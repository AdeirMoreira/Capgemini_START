package ToDoProject.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ConnectionFactory {

    public static final String DRIVER = "com.mysql.jdbc.Driver";
    public static final String URL = "jdbc:mysql://localhost:3306/todoapp";
    public static final String USER = "root";
    public static final String PASS = "";

    public static Connection getConnection() throws Exception {
        try {
            Class.forName(DRIVER);
            return DriverManager.getConnection(URL,USER,PASS);
        } catch (Exception ex) {
            throw new RuntimeException("Erro na conex�o com o "
                    + "banco de dados", ex);
        }
    }
    
    public static void closeConnection(Connection connection, PreparedStatement statement, ResultSet result) {
            try {
                if(connection != null){
                    connection.close();
                }
                
                if(statement != null) {
                    statement.close();
                }
                
                if(result != null) {
                    result.close();
                }
            } catch (Exception e) {
                throw new RuntimeException("Erro no banco de dados", e);
            }
    }
}