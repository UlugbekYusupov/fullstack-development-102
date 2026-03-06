#include <iostream>
#include <vector>
using namespace std;

int main() {
    int choice;
    cout<<"Choose a challenge:\n1 - Finding largest\n"
          "2 - Finding sign\n3 - Sorting system\n"
          "4 - odd, even numbers\n5 - Fizz , Buzzer"
          "\n6 - Armstrong\n7 - Scoring"<<endl;
    cout<<"Enter your choice: ";cin>>choice;
    switch (choice) {
        case 1: {
            int num1, num2, num3;
            cout<<"Enter the first number: ";
            cin>>num1;
            cout<<"Enter the second number: ";
            cin>>num2;
            cout<<"Enter the third number: ";
            cin>>num3;

            int largest = num1;

            if (num1 == num2 && num2 == num3) {
                cout<<"All numbers are equal!!!"<<endl;
            }
            else if (num1 < num2 && num2 > num3) {
                largest = num2;
            }
            else if (num2 < num3 && num3 > num1) {
                largest = num3;
            }
            cout<<"The largest number is "<<largest<<endl;
            break;
        }
        case 2: {
            int a , b , c;
            cout<<"Enter the first number: ";
            cin>>a;
            cout<<"Enter the second number: ";
            cin>>b;
            cout<<"Enter the third number: ";
            cin>>c;
            int product = a * b * c;
            char sign = '+';
            if (product > 0 ) {
                sign = '+';
                cout<<"The sign is : "<<sign<<endl;
            }
            else {
                sign = '-';
                cout<<"The sign is : "<<sign<<endl;
            }
        }
        case 3: {
            int num1 , num2 , num3;
            cout<<"Enter the first number: ";
            cin>>num1;
            cout<<"Enter the second number: ";
            cin>>num2;
            cout<<"Enter the third number: ";
            int max = num1;
            int mid = num1;
            int min = num1;
            if (num1 >= num2 && num1 >= num3) max = num1;
            else if (num2 >= num1 && num2 >= num3) max = num2;
            else max = num3;
            if (num1 <= num2 && num1 <= num3) min = num1;
            else if (num2 <= num1 && num2 <= num3) min = num2;
            else min = num3;
            mid = (num1 + num2 + num3) - max - min;
            cout<<"The sorted order :"<<max << mid << min << endl;
            break;
        }
        case 4: {
            int str,end;
            cout<<"Enter the starting point : ";
            cin>>str;
            cout<<"Enter the ending point : ";
            cin>>end;
            int odd = 0, even = 0;
            for (int i = str; i <= end; i++) {
                if (i % 2 == 0) {
                    even++;
                }
                else {
                    odd++;
                }
            }
            cout<<"The even numbers count : "<<even<<endl;
            cout<<"The odd numbers count : "<<odd<<endl;
            break;
        }
        case 5: {
            int threeMlt = 0,fiveMlt = 0,bothMlt = 0;
            for (int i = 1; i <=100 ; i++) {
                if (i % 3 == 0 && i % 5 == 0) {
                    bothMlt++;
                    cout<<"FizzBuzz"<<endl;
                }
                else if (i % 5 == 0) {
                    fiveMlt++;
                    cout<<"Buzz"<<endl;
                }
                else if (i % 3 == 0) {
                    threeMlt++;
                    cout<<"Fizz"<<endl;
                }
                else {
                    cout<<i<<endl;
                }
            }
            cout<<"There are "<< threeMlt <<"Fizz and "<<fiveMlt << "Buzz , and finally" << bothMlt <<"FizzBuzz"<<endl;
            break;
        }
        case 6: {
            vector<int> result;

            for (int i = 100; i <= 999; i++) {
                int sum = 0, temp = i;
                while (temp > 0) {
                    int digit = temp % 10;
                    sum += digit * digit * digit;
                    temp /= 10;
                }

                if (sum == i) {
                    cout << i << endl;
                    result.push_back(i);
                }
            }
        }
        case 7: {
            vector<pair<string,int>> students{
            {"David", 80},
            {"Vinoth", 77},
            {"Divya", 88},
            {"Ishitma", 95},
            {"Thomas", 68}
            };
            for (auto s : students) {
                string name = s.first;
                int score = s.second;
                string grade;
                if (score < 60 ) grade = "F";
                else if (score < 70 ) grade = "D";
                else if (score < 80 ) grade = "C";
                else if (score < 90 ) grade = "B";
                else grade = "A";
                cout<<name<<" : "<<score<<" -> "<<grade<<endl;
            }
            break;
        }
        default: {
            cout<<"Enter a valid choice"<<endl;
        }
    }
}
