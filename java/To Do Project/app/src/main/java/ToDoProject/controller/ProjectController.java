package ToDoProject.controller;

import ToDoProject.model.Project;
import ToDoProject.util.ConnectionFactory;
import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ProjectController {
    public List<Project> getAll() throws Exception{
        String query = "SELECT *FROM Project";
        List<Project> projects = new ArrayList<>();
        
        Connection connection = null;
        PreparedStatement statement = null;
        ResultSet result = null;
        
        
        try {
            
            connection = ConnectionFactory.getConnection();
            statement = connection.prepareStatement(query);
            result = statement.executeQuery();
            
            while(result.next()){
                Project project = new Project();
                project.setId(result.getInt("id"));
                project.setName(result.getString("name"));
                project.setDescription(result.getString("description"));
                project.setCreatedAt(result.getDate("createdAt"));
                project.setUpdatedAt(result.getDate("updatedAt"));
                
                projects.add(project);
            }
            
            return projects;
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao buscar o projetos ", e);
        } finally {
            ConnectionFactory.closeConnection(connection, statement, result);
        }
    }
    
    public void save (Project project) throws Exception{
        String query = "INSERT INTO Project (name,description,createdAt,"
                + "updatedAt ) VALUES (?,?,?,?)";
        Connection connection = null;
        PreparedStatement statement = null;
        
        try {
            connection = ConnectionFactory.getConnection();
            
            statement = connection.prepareStatement(query);
            
            statement.setString(1, project.getName());
            statement.setString(2, project.getDescription());
            statement.setDate(3, new Date(project.getCreatedAt().getTime()) );
            statement.setDate(4, new Date(project.getUpdatedAt().getTime()) );
            statement.execute();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao salvar o Project ", e);
        } finally {
            ConnectionFactory.closeConnection(connection, statement, null);
        }
    }
    
    public void upadate(Project project, int id) throws Exception{
        String query = "UPDATE Project SET "
                + "name = ?, "
                + "description = ?, "
                + "createdAt = ?, "
                + "updatedAt = ? "
                + "WHERE id = ?";
        Connection connection = null;
        PreparedStatement statement = null;
        try {
            connection = ConnectionFactory.getConnection();
            statement = connection.prepareStatement(query);
            statement.setString(1, project.getName());
            statement.setString(2, project.getDescription());
            statement.setDate(3, new Date(project.getCreatedAt().getTime()) );
            statement.setDate(4, new Date(project.getUpdatedAt().getTime()) );
            statement.setInt(5,id);
            statement.execute();
        } catch (SQLException e) {
            throw new RuntimeException("Erro atualizar o Project",e);
        } finally {
            ConnectionFactory.closeConnection(connection, statement, null);
        }
    }
    
    public void delete(int id) throws Exception {
        String query = "DELETE FROM Project WHERE id = ?";
        Connection connection = null;
        PreparedStatement statement = null;
        
        try {
            connection = ConnectionFactory.getConnection();
            statement = connection.prepareStatement(query);
            statement.setInt(1, id);
            statement.execute();
        } catch (SQLException e) {
            throw new RuntimeException("Erro ao deletar o Project", e);
        } finally {
            ConnectionFactory.closeConnection(connection, statement, null);
        }
    }
}
