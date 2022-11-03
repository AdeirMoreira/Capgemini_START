package ToDoProject;
 
import ToDoProject.controller.ProjectController;
import ToDoProject.controller.TaskController;
import ToDoProject.model.Project;
import ToDoProject.model.Task;
import java.util.Date;
import java.util.List;

public class App {
    public static void main(String[] args) throws Exception {
        
        ProjectController projectController = new ProjectController();
        Project project = new Project();
        project.setName("teste");
        project.setDescription("description");
        //projectController.save(project);
        
        
        project.setName("projeto Teste");
        projectController.upadate(project, 3);
        
        TaskController taskcontroller = new TaskController();
        Task task = new Task();
        task.setIdProject(4);
        task.setName("tarefa teste");
        task.setDescription("descrição da tarefa");
        task.setCompleted(Boolean.FALSE);
        task.setNotes("");
        task.setDeadLine(new Date());
        //taskcontroller.save(task);
        
        task.setName("tarefa testa alterada");
        task.setNotes("essa tarefa foi alterada");
        task.setCompleted(Boolean.TRUE);
        taskcontroller.update(task, 1);
        
        List<Project> projects = projectController.getAll();
        System.out.println("Total de Projetos + " + projects.size());
        List<Task> tasks = taskcontroller.getAll(4);
        System.out.println("Total de tasks + " + tasks.size());
        
        taskcontroller.delete(1);
        projectController.delete(4);
        
        List<Project> projects2 = projectController.getAll();
        System.out.println("Total de Projetos + " + projects2.size());
        List<Task> tasks2 = taskcontroller.getAll(4);
        System.out.println("Total de tasks + " + tasks2.size());
    }

}
