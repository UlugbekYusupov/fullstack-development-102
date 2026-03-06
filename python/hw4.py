import os
import math
os.system("cls")

def greet(str):
    return "Hello " + str + "!"

def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def countDigit(n):
    temp = n
    count = 0
    while temp > 0:
        temp //= 10
        count +=1    
    return f"There are : {count} digits"

def isPalindrome(n):
    temp = n
    rev = 0
    while temp > 0:
        digit = temp % 10
        rev = rev * 10 + digit
        temp //= 10
    
    if rev == n:
        return f"The {n} number is palindrome"
    else:
        return f"The {n} number is not palindrome"
    
def isArmstrong(n):
    numdigits = 0
    temp = n 
    while temp > 0:
        temp //= 10
        numdigits +=1
    total = 0
    temp = n
    while temp > 0 :
        digit = temp % 10
        total = total + pow(digit,numdigits)
        temp //=10
    
    return total == n

def foodOrder(name , food , address):
    return f"Dear {name} your {food} will be ready in 15 minutes and will be delivered to {address}"


class Counter:
    def __init__(self, start):
        self.count = start

    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1

    def get_count(self):
        return self.count


class LazyAdder:
    def __init__(self, val):
        self.a = val

    def add(self, b):
        return self.a + b


print("Choose a challenge:\n1 - greet()\n"
          "2 - Prime founder() \n3 - Digit count() \n"
          "4 - Palindrome()\n5 - Armstrong()"
          "\n6 - createCounter()\n7 - FoodOrder()\n8 - LazyAdder()")
choice = int(input("Enter a number: "))
match choice:
    case 1:
        name = input("Enter your name : ")
        print(greet(name))
    case 2:
        num = int(input("Enter a number : "))
        if is_prime(num):
            print(f"{num} is prime!")
        else: print(f"{num} is not prime!")
    case 3:
        num = int(input("Enter a number : "))
        print(countDigit(num))
    case 4:
        num = int(input("Enter a number : "))
        print(isPalindrome(num))
    case 5:
        n = int(input("Enter a number : "))
        if isArmstrong(n):
            print(f"{n} is Armstrong number!")
        else:
            print(f"{n} is not Armstrong number!")
    case 6 :
        num = int(input("Enter a number : "))
        counter = Counter(num)
        counter.increment()
        print("increment()",counter.get_count())
        counter.decrement()
        print("decrement()",counter.get_count())
    case 7 :
        name = input("Enter your name : ")
        food = input("Enter your food : ")
        address = input("Enter your address : ")
        print(foodOrder(name,food,address))
    case 8 :
        num = int(input("Enter a number : "))
        num2 = int(input("What to add : "))
        adder = LazyAdder(num)
        print(adder.add(num2))
    case _ :
        print("Invalid choice")
