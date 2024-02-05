import sqlite3
import os.path

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def create_db_from_sql(sql_file_path, db_file_path):
    conn = sqlite3.connect(db_file_path)

    with open(sql_file_path, "r") as sql_file:
        sql_script = sql_file.read()

    try:
        conn.executescript(sql_script)
        print("Database created and schema imported successfully.")
    except sqlite3.Error as e:
        print("An error occurred:", e)
    finally:
        conn.close()


sql_file_path = BASE_DIR + "\\schema.sql"

db_file_path = BASE_DIR + "\\kahoot_db.db"

create_db_from_sql(sql_file_path, db_file_path)
