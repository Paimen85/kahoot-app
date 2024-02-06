import sqlite3
import os.path

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def create_db_from_sql(sql_file_path, db_file_path, users_table_path):
    conn = sqlite3.connect(db_file_path)

    with open(sql_file_path, "r") as sql_file:
        sql_script = sql_file.read()

    with open(users_table_path, "r") as sql_file1:
        sql_script1 = sql_file1.read()

    try:
        conn.executescript(sql_script)
        conn.executescript(sql_script1)
        print("Database created and schemas imported successfully.")
    except sqlite3.Error as e:
        print("An error occurred:", e)
    finally:
        conn.close()


sql_file_path = BASE_DIR + "\\schema.sql"
users_table_path = BASE_DIR + "\\user_schema.sql"

db_file_path = BASE_DIR + "\\kahoot_db.db"

create_db_from_sql(sql_file_path, db_file_path, users_table_path)
