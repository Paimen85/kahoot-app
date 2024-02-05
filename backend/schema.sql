
DROP TABLE IF EXISTS posts;
CREATE TABLE question (
	id	INTEGER PRIMARY KEY,
	question	TEXT NOT NULL,
	answer_1	TEXT NOT NULL,
	answer_2	TEXT NOT NULL,
	answer_3	TEXT NOT NULL,
	answer_4	TEXT NOT NULL,
	correct_answer	TEXT NOT NULL
)