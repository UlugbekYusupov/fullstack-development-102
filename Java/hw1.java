import java.util.Scanner;

public class hw1 {
    public static void main(String[] args) {
        System.out.println("5" + 5);
        System.out.println(Integer.parseInt("5") - 5);
        System.out.println(Integer.parseInt("5") * Integer.parseInt("2"));
        System.out.println(Integer.parseInt("10") / 2);
        System.out.println(5 + (true ? 1 : 0));
        System.out.println(Integer.parseInt("10") - (true ? 1 : 0));
        System.out.println("5" + "true");
        System.out.println(5 + 0);
        System.out.println("NaN");

        System.out.println(200 + 50);
        System.out.println(25 + " years old");
        System.out.println(!"false".isEmpty() ? "true" : "false");
        System.out.println(Integer.parseInt("10") - (true ? 1 : 0));

        final double temp = 30;
        double conventioner = (temp * 9.0 / 5.0) + 32;
        System.out.println(conventioner);

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your total budget: ");
        double totalBudget = sc.nextDouble();
        System.out.print("Enter expense 1: ");
        double expense1 = sc.nextDouble();
        System.out.print("Enter expense 2: ");
        double expense2 = sc.nextDouble();
        System.out.print("Enter expense 3: ");
        double expense3 = sc.nextDouble();

        double totalExpenses = expense1 + expense2 + expense3;
        double remaining = totalBudget - totalExpenses;

        System.out.println("Total budget: " + totalBudget);
        System.out.println("You spent " + expense1 + " first time");
        System.out.println("You spent " + expense2 + " second time");
        System.out.println("You spent " + expense3 + " third time");
        System.out.println("After spending you have: " + remaining);

        if (remaining < 0) {
            System.err.println("Overspent! You are over budget");
        } else {
            System.out.println("You're within budget.");
        }

        sc.close();
    }
}
