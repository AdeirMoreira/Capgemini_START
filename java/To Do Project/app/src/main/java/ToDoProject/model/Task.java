package ToDoProject.model;
import java.util.Date;

public class Task {

    public Task(int id, int idProject, String name, String description, String notes, Boolean completed, Date deadLine, Date createdAt, Date updatedAt) {
        this.id = id;
        this.idProject = idProject;
        this.name = name;
        this.description = description;
        this.notes = notes;
        this.completed = completed;
        this.deadLine = deadLine;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    
    public Task(){
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    
    
    private int id;
    private int idProject;
    private String name;
    private String description;
    private String notes;
    private Boolean completed;
    private Date deadLine;
    private Date createdAt;
    private Date updatedAt;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdProject() {
        return idProject;
    }

    public void setIdProject(int idProject) {
        this.idProject = idProject;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public Date getDeadLine() {
        return deadLine;
    }

    public void setDeadLine(Date deadLine) {
        this.deadLine = deadLine;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        return "Task{" + "id=" + id + ", idProject=" + idProject + ", name=" + 
                name + ", description=" + description + ", notes=" + 
                notes + ", completed=" + completed + ", deadLine=" + 
                deadLine + ", createdAt=" + createdAt + ", updatedAt=" + 
                updatedAt + '}';
    }
    
    
}
