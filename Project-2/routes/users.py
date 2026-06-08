from flask import Blueprint, request, jsonify
from models import User, db

users_bp = Blueprint("users", __name__)

@users_bp.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()
    if User.query.filter_by(email=data.get("email")).first():
        return jsonify({"error": "Email already exists"}), 409
    user = User(
        name   = data.get("name"),
        email  = data.get("email"),
        role   = data.get("role", "user"),
        status = data.get("status", "active")
    )
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201

@users_bp.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify([u.to_dict() for u in users]), 200

@users_bp.route("/users/<int:id>", methods=["GET"])
def get_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.to_dict()), 200

@users_bp.route("/users/<int:id>", methods=["PUT"])
def update_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    data = request.get_json()
    existing = User.query.filter_by(email=data.get("email")).first()
    if existing and existing.id != id:
        return jsonify({"error": "Email already in use"}), 409
    user.name   = data.get("name",   user.name)
    user.email  = data.get("email",  user.email)
    user.role   = data.get("role",   user.role)
    user.status = data.get("status", user.status)
    db.session.commit()
    return jsonify(user.to_dict()), 200

@users_bp.route("/users/<int:id>", methods=["DELETE"])
def delete_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User deleted", "id": id}), 200