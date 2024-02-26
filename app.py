from flask import Flask, request, jsonify;
from flask_cors import CORS;
from Controller import ListUsersController, CreateUserController, UpdateUserController, FindUserByIdController, DeleteUserController;

app = Flask(__name__);
CORS(app, origins='http://localhost:4200');

# CRUD  
@app.route('/', methods=['GET'])
def index():
    if request.method == "GET":
        return "<h1>Teste</h1>";
    
# CREATE
@app.route('/create-user/', methods=['POST'])
def create_user():
    if request.method  == "POST":
        resp = request.get_json();
        res = request.get_data();
        
        print(res);
        
        result = CreateUserController.CreateUserController.execute(resp);
        return result;

# READ
@app.route('/list-users/', methods=['GET'])
def list_users(): 
    if request.method == "GET":
        result = ListUsersController.ListUsersController.execute();
        return result;

@app.route('/find-user-by-id/<int:user_id>', methods=['POST'])
def find_user_by_id(user_id):
    try:
        user_id = int(user_id)
    except ValueError:
        return jsonify({'message': 'User ID must be an integer'}), 400;
    
    if request.method == "POST":
        result = FindUserByIdController.FindUserByIdController.execute(user_id);
        return result;   
    
# UPDATE
@app.route('/update-user/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    try:
        user_id = int(user_id)
    except ValueError:
        return jsonify({'message': 'User ID must be an integer'}), 400;
    
    if request.method == "PUT":
        resp = request.get_json();
        result = UpdateUserController.UpdateUserController.execute(user_id, resp);
        return result;

# DELETE
@app.route('/delete-user/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    try:
        user_id = int(user_id)
    except ValueError:
        return jsonify({'message': 'User ID must be an integer'}), 400;

    if request.method == "DELETE":
        result = DeleteUserController.DeleteUserController.execute(user_id);
        return result;

if __name__ == "__main__":
    app.run(debug=True);