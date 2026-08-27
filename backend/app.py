from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from models import db, bcrypt
from routes.auth import auth_bp
from routes.alert_rules import alert_rules_bp
from routes.sightings import sightings_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)
    JWTManager(app)
    CORS(app)

    app.register_blueprint(auth_bp, url_prefix="/api")
    app.register_blueprint(alert_rules_bp, url_prefix="/api")
    app.register_blueprint(sightings_bp, url_prefix="/api")

    @app.errorhandler(404)
    def not_found(e):
        return jsonify({"error": "Resource not found"}), 404

    @app.errorhandler(500)
    def server_error(e):
        return jsonify({"error": "Internal server error"}), 500

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True, port=5000)
    