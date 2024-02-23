from flask import jsonify;
from module.db import connection, cursor;
from helper.transformJSON import transformJSON;


class ListUsersController:
    def execute():
        try: 
            sql = "SELECT id, name, birthday from user";
            cursor.execute(sql);
            results = cursor.fetchall();
            connection.commit();
            
            user_list = [];
            user_list = transformJSON(results);
            
            return jsonify(user_list);
        except Exception as e: 
            return jsonify(
                {'error': str(e)}
            );