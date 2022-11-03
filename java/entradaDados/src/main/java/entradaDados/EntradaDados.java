package entradaDados;

import javax.swing.JOptionPane;

public class EntradaDados {

    String nome;
    int idade;
    public static void main(String[] args) {
        int idade = Integer.parseInt(JOptionPane.showInputDialog("Infome a idade da pessoa"));
        JOptionPane.showMessageDialog(null, "A Pessoa tem " + idade + " anos de idade");
    }
    
    
}
