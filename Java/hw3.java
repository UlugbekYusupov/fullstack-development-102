import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class hw3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Choose a challenge:");
        System.out.println("1 - Finding largest");
        System.out.println("2 - Finding sign");
        System.out.println("3 - Sorting system");
        System.out.println("4 - Odd, even numbers");
        System.out.println("5 - Fizz, Buzzer");
        System.out.println("6 - Armstrong numbers");
        System.out.println("7 - Student grades");
        System.out.print("Enter your choice: ");
        int choice = sc.nextInt();

        switch (choice) {
            case 1: {
                System.out.print("Enter 1 number: ");
                int n1 = sc.nextInt();
                System.out.print("Enter 2 number: ");
                int n2 = sc.nextInt();
                System.out.print("Enter 3 number: ");
                int n3 = sc.nextInt();
                int largest = n1;
                if (n1 == n2 && n2 == n3) {
                    System.out.println("All numbers are equal!!!");
                } else {
                    if (n2 > largest) largest = n2;
                    if (n3 > largest) largest = n3;
                    System.out.println("The largest number is: " + largest);
                }
                break;
            }
            case 2: {
                System.out.print("Enter 1 number: ");
                int num1 = sc.nextInt();
                System.out.print("Enter 2 number: ");
                int num2 = sc.nextInt();
                System.out.print("Enter 3 number: ");
                int num3 = sc.nextInt();
                int product = num1 * num2 * num3;
                char sign = (product < 0) ? '-' : '+';
                System.out.println("The sign is: " + sign);
                break;
            }
            case 3: {
                System.out.print("Enter 1 number: ");
                int num1 = sc.nextInt();
                System.out.print("Enter 2 number: ");
                int num2 = sc.nextInt();
                System.out.print("Enter 3 number: ");
                int num3 = sc.nextInt();
                int max = num1, min = num1;
                if (num2 > max) max = num2;
                if (num3 > max) max = num3;
                if (num2 < min) min = num2;
                if (num3 < min) min = num3;
                int mid = num1 + num2 + num3 - max - min;
                System.out.println("The sorted order: " + max + " " + mid + " " + min);
                break;
            }
            case 4: {
                System.out.print("Enter starting point: ");
                int start = sc.nextInt();
                System.out.print("Enter ending point: ");
                int end = sc.nextInt();
                int odd = 0, even = 0;
                for (int i = start; i <= end; i++) {
                    if (i % 2 == 0) even++;
                    else odd++;
                }
                System.out.println("The even numbers count: " + even);
                System.out.println("The odd numbers count: " + odd);
                break;
            }
            case 5: {
                int threeMlt = 0, fiveMlt = 0, bothMlt = 0;
                for (int i = 1; i <= 100; i++) {
                    if (i % 3 == 0 && i % 5 == 0) {
                        bothMlt++;
                        System.out.println("FizzBuzz");
                    } else if (i % 3 == 0) {
                        threeMlt++;
                        System.out.println("Fizz");
                    } else if (i % 5 == 0) {
                        fiveMlt++;
                        System.out.println("Buzz");
                    } else {
                        System.out.println(i);
                    }
                }
                System.out.println("There are " + threeMlt + " Fizz, " + fiveMlt + " Buzz, and " + bothMlt + " FizzBuzz");
                break;
            }
            case 6: {
                List<Integer> result = new ArrayList<>();
                for (int i = 100; i <= 999; i++) {
                    int sum = 0, temp = i;
                    while (temp > 0) {
                        int digit = temp % 10;
                        sum += digit * digit * digit;
                        temp /= 10;
                    }
                    if (sum == i) {
                        System.out.println(i);
                        result.add(i);
                    }
                }
                break;
            }
            case 7: {
                List<Student> students = Arrays.asList(
                        new Student("David", 80),
                        new Student("Vinoth", 77),
                        new Student("Divya", 88),
                        new Student("Ishitma", 95),
                        new Student("Thomas", 68)
                );

                for (Student s : students) {
                    String grade;
                    int score = s.score;
                    if (score < 60) grade = "F";
                    else if (score < 70) grade = "D";
                    else if (score < 80) grade = "C";
                    else if (score < 90) grade = "B";
                    else grade = "A";

                    System.out.println(s.name + " : " + score + " -> " + grade);
                }
                break;
            }
            default:
                System.out.println("Enter a valid choice!");
        }

        sc.close();
    }
}

class Student {
    String name;
    int score;

    Student(String name, int score) {
        this.name = name;
        this.score = score;
    }
}
