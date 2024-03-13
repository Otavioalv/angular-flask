from flask import jsonify;
from Controller import FindUserByIdController
from module.db import connection, cursor;

from time import sleep;

class UpdateUserController:
    def execute(id, response):
        
        sleep(2);
        
        message:str;
        
        try:
            listUser = FindUserByIdController.FindUserByIdController.execute(id);        
            
            if(len(listUser.json) > 0):
                birthday, name = response["birthday"], response["name"];
                
                sql = "UPDATE user SET name=%s, birthday=%s where id=%s";
                value = (name, birthday, id);
                
                cursor.execute(sql, value);
                connection.commit();
                
                message = "Updated  user - 200"
            else:
                message = "User not found - 404"
            
            return jsonify(
                {'message': message}
            );
        except Exception as e:
            return jsonify(
                {'message': "Erro >>> "+str(e)}
            );
            
        # update user set name = "update" where id = 11;