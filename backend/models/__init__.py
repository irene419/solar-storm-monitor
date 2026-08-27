from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    alert_rules = db.relationship("AlertRule", backref="user", cascade="all, delete-orphan")
    sightings = db.relationship("Sighting", backref="user", cascade="all, delete-orphan")

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode("utf-8")

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def to_dict(self):
        return {"id": self.id, "email": self.email}


class AlertRule(db.Model):
    __tablename__ = "alert_rules"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    metric = db.Column(db.String(50), nullable=False)
    threshold_value = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "metric": self.metric,
            "threshold_value": self.threshold_value,
            "created_at": self.created_at.isoformat(),
        }


class Sighting(db.Model):
    __tablename__ = "sightings"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    date = db.Column(db.Date, nullable=False)
    location = db.Column(db.String(120), nullable=False)
    note = db.Column(db.Text)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date.isoformat(),
            "location": self.location,
            "note": self.note,
            "created_at": self.created_at.isoformat(),
        }