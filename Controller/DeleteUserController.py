from flask import jsonify;
from Controller import FindUserByIdController
from module.db import connection, cursor;

from time import sleep;

class DeleteUserController:
    def execute(id):
        
        sleep(1);
        
        message:str;
        
        try:
            listUser = FindUserByIdController.FindUserByIdController.execute(id);        
            
            if(len(listUser.json) > 0):
                sql = "DELETE FROM user WHERE id = %s";
                value = (id,);
                cursor.execute(sql, value);
                connection.commit();
                
                message = "Deleted user - 200"
            else:
                message = "User not found - 404"
            
            return jsonify(
                {'message': message}
            );
        except Exception as e:
            return jsonify(
                {'message': "Erro >>> "+str(e)}
            );
            
        # delete from user where id = 7;