from flask import jsonify;
from module.db import cursor, connection;
from time import sleep;

class CreateUserController:
    def execute(valuesResponse):
        # sleep(5);
        
        try:
            birthday, name = valuesResponse["birthday"], valuesResponse["name"];
            
            
            sql = "INSERT INTO user (name, birthday) value(%s, %s)";
            values = (name, birthday);
            
            cursor.execute(sql, values);
            connection.commit();
        
            
            return jsonify(
                {"message": "User created - 201 "}
            )
        except Exception as e:
            return jsonify(
                {"message": "Erro >>> " + str(e)}    
            );
            