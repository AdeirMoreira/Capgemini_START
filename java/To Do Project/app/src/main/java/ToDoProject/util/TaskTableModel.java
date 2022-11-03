package ToDoProject.util;

import ToDoProject.model.Task;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import javax.swing.table.AbstractTableModel;

public class TaskTableModel extends AbstractTableModel{

    String[] conlumns = {"Nome", "Descrição", "Prazo", "Tarefa Concluída", "Editar", "Excluir"};
    List<Task> tasks = new ArrayList();
    
    @Override
    public int getRowCount() {
        return tasks.size();
    }

    @Override
    public int getColumnCount() {
       return conlumns.length;
    }
    
    @Override
    public String getColumnName(int columnIndex){
        return conlumns[columnIndex];
    }
    
    public boolean isCellEditable(int rowIndex, int columnIndex){
        return columnIndex == 3;
    }

    @Override
    public Class<?> getColumnClass(int columnIndex){
         if(tasks.isEmpty()){
             return Object.class;
         }
         return this.getValueAt(0,columnIndex).getClass();
    }
    
    @Override
    public Object getValueAt(int rowIndex, int columnIndex) {
        switch(columnIndex){
            case 0:
                return tasks.get(rowIndex).getName();
            case 1:
                return tasks.get(rowIndex).getDescription();
            case 2:
                SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
                return dateFormat.format(tasks.get(rowIndex).getDeadLine());
            case 3:
                return tasks.get(rowIndex).getCompleted();
            case 4:
                return "";
            case 5:
                return "";
            default:
                return "Dados não encontrados";
        }
        
    }
    
    @Override
    public void setValueAt(Object aValue, int rowIndex, int columnIndex){
        tasks.get(rowIndex).setCompleted((Boolean) aValue);
    }

    public String[] getConlumns() {
        return conlumns;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
    
}
