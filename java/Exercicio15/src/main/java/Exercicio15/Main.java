package Exercicio15;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        int numero;

        Scanner leitor = new Scanner(System.in);
        System.out.print("Digite um valor: ");
        numero = leitor.nextInt();

        if (numero >= 100 && numero <= 200) {
            System.out.println("O numero está dentro do intervalo");
        } else {
            System.out.println("o numero não está dentro do intervalo");
        };
    };
};
