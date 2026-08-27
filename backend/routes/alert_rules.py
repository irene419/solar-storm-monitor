from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, AlertRule

alert_rules_bp = Blueprint("alert_rules", __name__)

@alert_rules_bp.route("/alert-rules", methods=["GET"])
@jwt_required()
def get_alert_rules():
    user_id = get_jwt_identity()
    page = request.args.get("page", 1, type=int)
    per_page = request.args.get("per_page", 10, type=int)

    pagination = AlertRule.query.filter_by(user_id=user_id).paginate(
        page=page, per_page=per_page, error_out=False
    )
    return jsonify({
        "items": [rule.to_dict() for rule in pagination.items],
        "total": pagination.total,
        "page": pagination.page,
        "pages": pagination.pages,
    }), 200


@alert_rules_bp.route("/alert-rules", methods=["POST"])
@jwt_required()
def create_alert_rule():
    user_id = get_jwt_identity()
    data = request.get_json()
    metric = data.get("metric")
    threshold_value = data.get("threshold_value")

    if not metric or threshold_value is None:
        return jsonify({"error": "metric and threshold_value are required"}), 400

    rule = AlertRule(user_id=user_id, metric=metric, threshold_value=threshold_value)
    db.session.add(rule)
    db.session.commit()
    return jsonify(rule.to_dict()), 201


@alert_rules_bp.route("/alert-rules/<int:rule_id>", methods=["PATCH"])
@jwt_required()
def update_alert_rule(rule_id):
    user_id = get_jwt_identity()
    rule = AlertRule.query.get_or_404(rule_id)

    if str(rule.user_id) != str(user_id):
        return jsonify({"error": "Not authorized to modify this rule"}), 403

    data = request.get_json()
    if "metric" in data:
        rule.metric = data["metric"]
    if "threshold_value" in data:
        rule.threshold_value = data["threshold_value"]

    db.session.commit()
    return jsonify(rule.to_dict()), 200


@alert_rules_bp.route("/alert-rules/<int:rule_id>", methods=["DELETE"])
@jwt_required()
def delete_alert_rule(rule_id):
    user_id = get_jwt_identity()
    rule = AlertRule.query.get_or_404(rule_id)

    if str(rule.user_id) != str(user_id):
        return jsonify({"error": "Not authorized to delete this rule"}), 403

    db.session.delete(rule)
    db.session.commit()
    return jsonify({"message": "Deleted"}), 200