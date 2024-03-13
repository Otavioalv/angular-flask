import mysql.connector;
from mysql.connector import errorcode;

HOST = "127.0.0.1";
PORT = 3306;


try:
    connection = mysql.connector.connect(
        user='root',
        password="123456",
        host=HOST,
        database="ussers",
        port=PORT
    );
    
    print(f"\nConectado ao banco de dados no endereço: {HOST}:{PORT}\nAperte CTRL+C para parar o servidor\n");
    cursor = connection.cursor();
    
except mysql.connector.Error as error:
    if error.errno == errorcode.ER_BAD_DB_ERROR:
        print("Banco de dados não existe");
    elif error.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Ussuario ou senha incorreto");
    else:
        print(error);
else: 
    cursor = connection.cursor()