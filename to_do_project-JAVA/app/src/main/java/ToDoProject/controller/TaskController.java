package ToDoProject.controller;

import ToDoProject.model.Task;
import ToDoProject.util.ConnectionFactory;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class TaskController {

    public List<Task> getAll(int projectId) throws Exception {
        String query = "SELECT * FROM Task WHERE idProject = ?";
        
        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet result = null;
        List<Task> Tasks = new ArrayList<Task>();
        try {
            connection = ConnectionFactory.getConnection();
            statement = connection.prepareStatement(query);
            statement.setInt(1, projectId);
            result = statement.executeQuery();
            while (result.next()) {
                Task task = new Task();
                task.setId(result.getInt("id"));
                task.setIdProject(result.getInt("idProject"));
                task.setName(result.getString("name"));
                task.setDescription(result.getString("description"));
                task.setNotes(result.getString("notes"));
                task.setCompleted(result.getBoolean("completed"));
                task.setDeadLine(result.getDate("deadline"));
                task.setCreatedAt(result.getDate("createdAt"));
                task.setUpdatedAt(result.getDate("updatedAt"));
                Tasks.add(task);
               
            }
            return Tasks;
        } catch (Exception e) {
            throw new Exception("Erro ao consultar as tarefas " + e.getMessage(), e);
        } finally {
            ConnectionFactory.closeConnection(connection, statement, result);
        }
    }

    public void save(Task task) throws Exception {
        String query = "INSERT INTO Task (idProject, name, description, "
                + "completed, notes, deadLine, createdAT, updatedAt) "
                + "VALUES (?,?,?,?,?,?,?,?)";

        Connection connection = null;
        PreparedStatement statement = null;

        try {
            connection = ConnectionFactory.getConnection();
            statement = connection.prepareStatement(query);
            statement.setInt(1, task.getIdProject());
            statement.setString(2, task.getName());
            statement.setString(3, task.getDescription());
            statement.setBoolean(4, task.getCompleted());
            statement.setString(5, task.getNotes());
            statement.setDate(6, new Date(task.getDeadLine().getTime()));
            statement.setDate(7, new Date(task.getCreatedAt().getTime()));
            statement.setDate(8, new Date(task.getUpdatedAt().getTime()));
            statement.execute();

        } catch (Exception e) {
            throw new RuntimeException("Erro ao salvar tarefa " + e.getMessage(), e);
        } finally {
            ConnectionFactory.closeConnection(connection, statement, null);
        }

    }

    public void update(Task task, int id) throws SQLException {
        String query = "UPDATE Task SET "
                + "idProject = ?, "
                + "name = ?, "
                + "description = ?, "
                + "notes = ?, "
                + "completed = ?, "
                + "deadLine = ?, "
                + "createdAt = ?, "
                + "updatedAt = ? "
                + "WHERE id = ?";

        Connection connection = null;
        PreparedStatement statement = null;

        try {
            connection = ConnectionFactory.getConnection();
            statement = connection.prepareStatement(query);
            statement.setInt(1, task.getIdProject());
            statement.setString(2, task.getName());
            statement.setString(3, task.getDescription());
            statement.setString(4, task.getNotes());
            statement.setBoolean(5, task.getCompleted());
            statement.setDate(6, new Date(task.getDeadLine().getTime()));
            statement.setDate(7, new Date(task.getCreatedAt().getTime()));
            statement.setDate(8, new Date(task.getUpdatedAt().getTime()));
            statement.setInt(9,id);
            statement.execute();
        } catch (Exception e) {
            throw new RuntimeException("Erro atualizar a Task",e);
        } finally {
            ConnectionFactory.closeConnection(connection, statement, null);
        }
    }

    public void delete(int id) throws SQLException, Exception {
        String query = "DELETE FROM Task WHERE id = ?";

        Connection connection = null;
        PreparedStatement statement = null;

        try {
            connection = ConnectionFactory.getConnection();
            statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            statement.execute();
        } catch (SQLException e) {
            throw new RuntimeException("Erro no banco de dados ao tentar deletar a Task",e);
        } finally {
            ConnectionFactory.closeConnection(connection, statement, null);
        }
    }
}
