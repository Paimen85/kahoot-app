from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://bestuser:bestuser@localhost/kahoot_db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)
app.app_context().push()


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(200))
    answer_1 = db.Column(db.String(100))
    answer_2 = db.Column(db.String(100))
    answer_3 = db.Column(db.String(100))
    answer_4 = db.Column(db.String(100))
    correct_answer = db.Column(db.String(100))

    def __init__(
        self, question, answer_1, answer_2, answer_3, answer_4, correct_answer
    ):
        self.question = question
        self.answer_1 = answer_1
        self.answer_2 = answer_2
        self.answer_3 = answer_3
        self.answer_4 = answer_4
        self.correct_answer = correct_answer


class QuestionSchema(ma.Schema):
    class Meta:
        fields = ("id", "question", "answer_1", "answer_2", "answer_3", "answer_4", "correct_answer")


question_schema = QuestionSchema()
questions_schema = QuestionSchema(many=True)


@app.route("/start", methods=["GET"])
def get_questions():
    all_questions = Question.query.all()
    results = questions_schema.dump(all_questions)
    return jsonify(results)


@app.route("/get-question/<id>/", methods=["GET"])
def question_details(id):
    question = Question.query.get(id)
    return question_schema.jsonify(question)

@app.route("/update-question/<id>/", methods=["PUT"])
def update_question(id):
    updated_question = Question.query.get(id)
    question = request.json["question"]
    answer_1 = request.json["answer_1"]
    answer_2 = request.json["answer_2"]
    answer_3 = request.json["answer_3"]
    answer_4 = request.json["answer_4"]
    correct_answer = request.json["correct_answer"]

    updated_question.question = question
    updated_question.answer_1 = answer_1
    updated_question.answer_2 = answer_2
    updated_question.answer_3 = answer_3
    updated_question.answer_4 = answer_4
    updated_question.correct_answer = correct_answer

    db.session.commit()
    return question_schema.jsonify(updated_question)


@app.route("/add-question", methods=["POST"])
def add_question():
    question = request.json["question"]
    answer_1 = request.json["answer_1"]
    answer_2 = request.json["answer_2"]
    answer_3 = request.json["answer_3"]
    answer_4 = request.json["answer_4"]
    correct_answer = request.json["correct_answer"]

    created_question = Question(question, answer_1, answer_2, answer_3, answer_4, correct_answer)
    db.session.add(created_question)
    db.session.commit()
    return question_schema.jsonify(created_question)

@app.route("/delete/<id>/", methods=["DELETE"])
def question_delete(id):
    question = Question.query.get(id)
    db.session.delete(question)
    db.session.commit()

    return question_schema.jsonify(question)


if __name__ == "__main__":
    app.run(debug=True)
