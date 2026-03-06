#include <iostream>
using namespace std;

int main() {
    int choice;
    cout<<"Choose a challenge:\n1 - Count even & odd numbers\n"
          "2 - Reverse a number\n3 - Largest digit\n"
          "4 - Sum of digits\n5 - Count digits"<<endl;
    cout<<"Enter your choice: ";cin>>choice;
    switch (choice) {
        case 1: {
            int n;
            cout<<"Enter a number: ";
            cin>>n;
            int even=0, odd=0;
            for (int i = 1; i <= n; i++) {
                if ( i % 2 == 0) {
                    even++;
                }
                else {
                    odd++;
                }
            }
            cout<<"Even Numbers : "<<even<<endl;
            cout<<"Odd Numbers : "<<odd<<endl;
            break;
        }
        case 2: {
            int num;
            cout<<"Enter a number: ";
            cin>>num;
            int rev = 0;
            while (num > 0 ) {
                int digit = num % 10;
                rev = rev * 10 + digit;
                num = num / 10;
            }
            cout<<"Reversed Numbers : "<<rev<<endl;
            break;
        }
        case 3: {
            int numL;
            cout<<"Enter a number: ";
            cin>>numL;
            int largest = 0;
            while (numL > 0) {
                int digit = numL % 10;
                if (digit > largest) largest = digit;
                numL = numL / 10;
            }
            cout<<"Largest Digits : "<<largest<<endl;
            break;
        }
        case 4: {
            int numS;
            cout<<"Enter a number: ";
            cin>>numS;
            int sum = 0;
            while (numS > 0) {
                sum += numS % 10;
                numS = numS / 10;
            }
            cout<<"Sum of digits : "<<sum<<endl;
            break;
        }
        case 5: {
            int numN;
            cout<<"Enter a number: ";
            cin>>numN;
            int count = 0;
            while (numN > 0) {
                count++;
                numN = numN / 10;
            }
            cout<<"Number Count : "<<count<<endl;
            break;
        }
        default: {
            cout<<"Enter a valid choice"<<endl;
        }
    }
}
