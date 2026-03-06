#include <iostream>
using namespace std;

int main() {
    cout << string("5") + to_string(5) << endl;
    cout << stoi("5") - 5 << endl;
    cout << stoi("5") * stoi("2") << endl;
    cout << stoi("10") / 2 << endl;
    cout << 5 + true << endl;
    cout << stoi("10") - true << endl;
    cout << string("5") + "true" << endl;
    cout << 5 + 0 << endl;
    cout << "NaN" << endl;

    cout << 200 + 50 << endl;
    cout << to_string(25) + " years old" << endl;
    cout << (string("false") != "" ? "true" : "false") << endl;
    cout << stoi("10") - true << endl;

    const double temp = 30;
    double conventioner = (temp * 9.0 / 5.0) + 32;
    cout << conventioner << endl;

    double totalBudget, expense1, expense2, expense3;
    cout << "Enter your total budget: "; cin >> totalBudget;
    cout << "Enter expense 1: "; cin >> expense1;
    cout << "Enter expense 2: "; cin >> expense2;
    cout << "Enter expense 3: "; cin >> expense3;

    double totalExpenses = expense1 + expense2 + expense3;
    double remaining = totalBudget - totalExpenses;

    cout << "Total budget: " << totalBudget << endl;
    cout << "You spent " << expense1 << " first time" << endl;
    cout << "You spent " << expense2 << " second time" << endl;
    cout << "You spent " << expense3 << " third time" << endl;
    cout << "After spending you have: " << remaining << endl;

    if (remaining < 0) {
        cerr << "Overspent! You are over budget" << endl;
    } else {
        cout << "You're within budget." << endl;
    }
    return 0;
}
