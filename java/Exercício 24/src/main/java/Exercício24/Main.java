package Exerc�cio24;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        char desejaContinuar = 'S';

        while (desejaContinuar == 'S' || desejaContinuar == 's') {
            System.out.println("Digite um n�mero: ");
            int numero = leitor.nextInt();
            if (numero == 0) {
                System.out.println("O n�mero � zero");
            } else {
                if (numero > 0) {
                    System.out.println("O n�mero � maior que zero");
                } else {
                    System.out.println("O n�mero � menor que zero");
                }
            }
            System.out.println("Deseja continuar? S-Sim / N=N�o");
            desejaContinuar = leitor.next().charAt(0);
        }

    }

}
