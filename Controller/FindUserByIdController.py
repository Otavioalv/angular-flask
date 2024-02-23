from flask import jsonify;
from module.db import connection, cursor;
from helper.transformJSON import transformJSON;

class FindUserByIdController:
    def execute(id):
        try:
            sql = "SELECT id, name, birthday from user where id = %s";
            value = (id,);
            cursor.execute(sql, value);
            results = cursor.fetchall();
            connection.commit();
            
            user_list = transformJSON(results);

            return jsonify(user_list);
        except Exception as e:
            return jsonify(
                {'message': "Erro >>> "+str(e)}
            );