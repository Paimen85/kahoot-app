from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_jwt_extended import (
    create_access_token,
    get_jwt_identity,
    jwt_required,
    JWTManager,
)
import sqlite3
import os.path
import json
import os


BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = os.environ.get('JWT_SECRET')
jwt = JWTManager(app)
CORS(app)


DATABASE = BASE_DIR + "\\kahoot_db.db"


def get_db_connection():
    conn = sqlite3.connect(DATABASE, timeout=5)
    conn.row_factory = sqlite3.Row
    # try:
    #     conn.execute("SELECT 1")
    #     print("Database connection appears to be ok.")
    # except sqlite3.Error as e:
    #     print(f"Database connection failed: {e}")
    #     conn.close()  # Ensure the connection is closed in case of failure
    #     raise
    return conn


def get_question_by_id(question_id):
    conn = get_db_connection()
    question = conn.execute(
        "SELECT * FROM question WHERE id = ?", (question_id,)
    ).fetchone()
    conn.close()
    if question is None:
        return "There is no question with id" + question_id
    return question


@app.route('/login', methods=['POST'])
def login():
    email = request.json["email"]
    password = request.json["password"]

    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@app.route("/start", methods=["GET"])
@jwt_required()
def get_questions():

    # Convert tuple with product details to dict
    def product_row_to_dict(product):
        return {
            "id": product[0],
            "question": product[1],
            "answer_1": product[2],
            "answer_2": product[3],
            "answer_3": product[4],
            "answer_4": product[5],
            "correct_answer": product[6],
        }

    questions = []

    conn = get_db_connection()
    cursor = conn.cursor()
    fetched_questions = cursor.execute("SELECT * FROM question").fetchall()
    for question in fetched_questions:
        questions.append(product_row_to_dict(question))
    conn.close()
    return json.dumps(questions)


@app.route("/add-question", methods=["POST"])
def add_question():
    question = request.json["question"]
    answer_1 = request.json["answer_1"]
    answer_2 = request.json["answer_2"]
    answer_3 = request.json["answer_3"]
    answer_4 = request.json["answer_4"]
    correct_answer = request.json["correct_answer"]

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO question (question, answer_1, answer_2, answer_3, answer_4, correct_answer) VALUES (?, ?, ?, ?, ?, ?)",
        (question, answer_1, answer_2, answer_3, answer_4, correct_answer),
    )

    conn.commit()
    conn.close()
    return "question added"


@app.route("/update-question/<id>/", methods=["PUT"])
def update_question(id):
    # updated_question = get_question_by_id(id)
    question = request.json["question"]
    answer_1 = request.json["answer_1"]
    answer_2 = request.json["answer_2"]
    answer_3 = request.json["answer_3"]
    answer_4 = request.json["answer_4"]
    correct_answer = request.json["correct_answer"]

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE question SET question = ?, answer_1 = ?, answer_2 = ?, answer_3 = ?, answer_4 = ?, correct_answer = ? WHERE  id = ?",
        (question, answer_1, answer_2, answer_3, answer_4, correct_answer, id),
    )
    conn.commit()
    conn.close()
    return "question updated"



if __name__ == "__main__":
    app.run(debug=True)
