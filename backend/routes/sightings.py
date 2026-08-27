from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from datetime import datetime
from models import db, Sighting

sightings_bp = Blueprint("sightings", __name__)

@sightings_bp.route("/sightings", methods=["GET"])
@jwt_required()
def get_sightings():
    user_id = get_jwt_identity()
    page = request.args.get("page", 1, type=int)
    per_page = request.args.get("per_page", 10, type=int)

    pagination = Sighting.query.filter_by(user_id=user_id).paginate(
        page=page, per_page=per_page, error_out=False
    )
    return jsonify({
        "items": [s.to_dict() for s in pagination.items],
        "total": pagination.total,
        "page": pagination.page,
        "pages": pagination.pages,
    }), 200


@sightings_bp.route("/sightings", methods=["POST"])
@jwt_required()
def create_sighting():
    user_id = get_jwt_identity()
    data = request.get_json()
    date_str = data.get("date")
    location = data.get("location")
    note = data.get("note", "")

    if not date_str or not location:
        return jsonify({"error": "date and location are required"}), 400

    try:
        date_obj = datetime.strptime(date_str, "%Y-%m-%d").date()
    except ValueError:
        return jsonify({"error": "date must be in YYYY-MM-DD format"}), 400

    sighting = Sighting(user_id=user_id, date=date_obj, location=location, note=note)
    db.session.add(sighting)
    db.session.commit()
    return jsonify(sighting.to_dict()), 201


@sightings_bp.route("/sightings/<int:sighting_id>", methods=["PATCH"])
@jwt_required()
def update_sighting(sighting_id):
    user_id = get_jwt_identity()
    sighting = Sighting.query.get_or_404(sighting_id)

    if str(sighting.user_id) != str(user_id):
        return jsonify({"error": "Not authorized to modify this sighting"}), 403

    data = request.get_json()
    if "location" in data:
        sighting.location = data["location"]
    if "note" in data:
        sighting.note = data["note"]
    if "date" in data:
        sighting.date = datetime.strptime(data["date"], "%Y-%m-%d").date()

    db.session.commit()
    return jsonify(sighting.to_dict()), 200


@sightings_bp.route("/sightings/<int:sighting_id>", methods=["DELETE"])
@jwt_required()
def delete_sighting(sighting_id):
    user_id = get_jwt_identity()
    sighting = Sighting.query.get_or_404(sighting_id)

    if str(sighting.user_id) != str(user_id):
        return jsonify({"error": "Not authorized to delete this sighting"}), 403

    db.session.delete(sighting)
    db.session.commit()
    return jsonify({"message": "Deleted"}), 200