#include <iostream>
#include <cmath>
using namespace std;

void greet(string str) {
    cout <<"Hello "<<str<<"!" << endl;
}

bool isPrime(int n) {
    if (n <= 1) {
        return false;
    }
    for (int i = 2 ; i < n ; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
void countDigit(int n) {
    int temp = n;
    int count = 0;
    while (temp > 0) {
        temp = temp / 10;
        count++;
    }
    cout <<"There are : "<< count <<" digits"<< endl;
}
void isPalindrome(int n) {
    int temp = n;
    int rev = 0;
    while (temp > 0) {
        int digit = temp % 10;
        rev = rev * 10 + digit;
        temp = temp / 10;
    }
    if (rev == n) {
        cout <<"The "<< n << " number is palindrome!" << endl;
    }
    else {
        cout <<"The "<< n << " number is palindrome!" << endl;
    }
}
int isArmstrong(int n) {
    int numDigits = 0;
    int temp = n;
    while (temp > 0) {
        temp = temp / 10;
        numDigits++;
    }
    int total = 0 ;
    temp = n;
    while (temp > 0) {
        int digit = temp % 10;
        total = total + pow(digit, numDigits);
        temp /= 10;
    }
    return total == n;
}

class Counter {
    private:
        int count;
    public:
        Counter(int start) : count(start) {}

        void increment() { count++; }
        void decrement() { count--; }
        int getCount() const { return count; }
};
class LazyAdder {
    int a;
public:
    LazyAdder(int val) {
        a = val;
    }
    int add(int b) {
        return a + b;
    }
};
void foodOrder(string name , string food , string address) {
    int time = rand() % (30 - 10 + 1) + 10;
    cout <<"Dear "<<name<<" your "<<food<<" will be ready in " << time << " minutes and will be delivered to "<< address <<endl;
}

int main() {
    int choice;
    cout<<"Choose a challenge:\n1 - greet()\n"
          "2 - Prime founder() \n3 - Digit count() \n"
          "4 - Palindrome()\n5 - Armstrong()"
          "\n6 - createCounter()\n7 - FoodOrder()\n8 - LazyAdder()"<<endl;
    cout<<"Enter your choice: ";cin>>choice;
    switch (choice) {
        case 1: {
            string frstname , lstname;
            cout<<"Enter your first name: ";
            cin>>frstname;
            cout<<"Enter your last name: ";
            cin>>lstname;
            greet(frstname + " " + lstname);
            break;
        }
        case 2: {
            int num1;
            cout<<"Enter your number: ";
            cin>>num1;
            if(isPrime(num1)) {
                cout<< num1 <<" is prime!"<<endl;
            }
            else {
                cout<< num1 <<" is not prime!"<<endl;
            }
            break;
        }
        case 3: {
            int num1;
            cout<<"Enter your number: ";
            cin>>num1;
            countDigit(num1);
            break;
        }
        case 4: {
            int num1;
            cout<<"Enter your number: ";
            cin>>num1;
            isPalindrome(num1);
            break;
        }
        case 5: {
            int num1;
            cout<<"Enter your number: ";
            cin>>num1;
            if (isArmstrong(num1)) {
                cout<< num1 <<" is Armstrong number!"<<endl;
            }
            else {
                cout<< num1 <<" is not Armstrong number!"<<endl;
            }
            break;
        }
        case 6: {
            int num1;
            cout<<"Enter your number: ";
            cin>>num1;
            Counter myCounter(num1);
            myCounter.increment();
            cout << "increment(): " << myCounter.getCount() <<endl;
            myCounter.decrement();
            cout << "decrement(): " << myCounter.getCount() <<endl;
            break;
        }
        case 7: {
            string name,food , address;
            cout<<"Enter your name: ";
            cin>>name;
            cout<<"Enter your food name: ";
            cin>>food;
            cout<<"Enter your address: ";
            cin>>address;
            foodOrder(name,food,address);
            break;
        }
        case 8: {
            int a,b;
            cout<<"Enter a number: ";
            cin>>a;
            cout<<"Enter second number you wanna add: ";
            cin>>b;
            LazyAdder adder(a);
            cout<<a<<" + "<<b<<" = "<<adder.add(b);
            break;
        }
        default: {
            cout<<"Enter a valid choice"<<endl;
        }
    }
}
