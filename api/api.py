import time 
from flask import Flask
import dnd

from icecream import ic


app = Flask(__name__)

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/api/user')
def get_users():

    try:
        db, cursor = dnd.db()
        q="SELECT * FROM `users`"
        cursor.execute(q)

        one_user = cursor.fetchone()
    
        if one_user is None:
            return {"error": "User not found"}, 404
        
        
        return one_user

    except Exception as ex:
        ic(ex)
        return {"error": "Could not fetch user"}, 500

    finally:
        if "db" in locals():
            db.close()
