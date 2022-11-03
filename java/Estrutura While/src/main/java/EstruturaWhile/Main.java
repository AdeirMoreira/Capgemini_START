package EstruturaWhile;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        int totalAlunos = 10; 
        Scanner leitor = new Scanner(System.in);
        while (totalAlunos > 0) {
            String nomeDoAluno = leitor.nextLine();
            int idadeAluno = leitor.nextInt();
            
            System.out.println("nome do aluno é " + nomeDoAluno + 
                    " e sua idade e" + idadeAluno);
            totalAlunos = totalAlunos - 1;
        }
    }
}
