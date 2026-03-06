import os
os.system("cls")

print(str("5") + str(5))
print(int("5") - 5)
print(int("5") * int("2"))
print(int("10") / 2)
print(5 + True)
print(int("10") - True)
print("5" + "true")
print(5 + 0)
print("NaN")
print(200 + 50)
print(str(25) + " years old")
print("true" if ("false" != "") else "false")
print(int("10") - True)

temp = 30
conventioner = (temp * 9.0 / 5.0) + 32
print(conventioner)

# Budget program
totalBudget = float(input("Enter your total budget: "))
expense1 = float(input("Enter expense 1: "))
expense2 = float(input("Enter expense 2: "))
expense3 = float(input("Enter expense 3: "))

totalExpenses = expense1 + expense2 + expense3
remaining = totalBudget - totalExpenses

print("Total budget:", totalBudget)
print("You spent", expense1, "first time")
print("You spent", expense2, "second time")
print("You spent", expense3, "third time")
print("After spending you have:", remaining)

if remaining < 0:
    print("Overspent! You are over budget", file=__import__("sys").stderr)
else:
    print("You're within budget.")
