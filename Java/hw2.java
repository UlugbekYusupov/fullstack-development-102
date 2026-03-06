import java.util.Scanner;

public class hw2{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Choose a challenge:");
        System.out.println("1 - Count even & odd numbers");
        System.out.println("2 - Reverse a number");
        System.out.println("3 - Largest digit");
        System.out.println("4 - Sum of digits");
        System.out.println("5 - Count digits");
        System.out.print("Enter your choice: ");
        int choice = sc.nextInt();

        switch (choice) {
            case 1: {
                System.out.print("Enter a number: ");
                int n = sc.nextInt();
                int even = 0, odd = 0;
                for (int i = 1; i <= n; i++) {
                    if (i % 2 == 0) even++;
                    else odd++;
                }
                System.out.println("Even Numbers: " + even);
                System.out.println("Odd Numbers: " + odd);
                break;
            }
            case 2: {
                System.out.print("Enter a number: ");
                int num = sc.nextInt();
                int rev = 0;
                while (num > 0) {
                    int digit = num % 10;
                    rev = rev * 10 + digit;
                    num /= 10;
                }
                System.out.println("Reversed Number: " + rev);
                break;
            }
            case 3: {
                System.out.print("Enter a number: ");
                int num = sc.nextInt();
                int largest = 0;
                while (num > 0) {
                    int digit = num % 10;
                    if (digit > largest) largest = digit;
                    num /= 10;
                }
                System.out.println("Largest Digit: " + largest);
                break;
            }
            case 4: {
                System.out.print("Enter a number: ");
                int num = sc.nextInt();
                int sum = 0;
                while (num > 0) {
                    sum += num % 10;
                    num /= 10;
                }
                System.out.println("Sum of Digits: " + sum);
                break;
            }
            case 5: {
                System.out.print("Enter a number: ");
                int num = sc.nextInt();
                int count = 0;
                while (num > 0) {
                    count++;
                    num /= 10;
                }
                System.out.println("Number of Digits: " + count);
                break;
            }
            default:
                System.out.println("Enter a valid choice");
        }

        sc.close();
    }
}
