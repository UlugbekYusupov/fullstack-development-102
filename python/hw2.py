import os
os.system("cls")

print("Choose a challenge:\n1 - Count even & odd numbers\n"
      "2 - Reverse a number\n3 - Largest digit\n"
      "4 - Sum of digits\n5 - Count digits")

choice = int(input("Enter a number: "))

match choice:
    case 1:
        n = int(input("Enter a number: "))
        even = 0
        odd = 0

        for i in range(1, n + 1):
            if i % 2 == 0:
                even += 1
            else:
                odd += 1
            
        print("Even numbers:", even)
        print("Odd numbers:", odd)

    case 2:
        num = int(input("Enter a number : "))
        rev = 0
        while num > 0:
            digit = num % 10
            rev = rev * 10 + digit
            num //= 10

        print("Reversed : " , rev)
    case 3:
        num = int(input("Enter a number : "))
        largest = 0
        while num > 0 :
            digit = num % 10
            if digit > largest : largest = digit
            num //= 10
        print("Largest digit : " , largest)
    case 4:
        num = int(input("Enter a number : "))
        sum = 0
        while num > 0 :
            sum += num % 10
            num //= 10
        print("Sum of digits : " , sum )
    case 5:
        num = int(input("Enter a number : "))
        count = 0
        while num > 0 : 
            count +=1
            num //=10
        print("Number count : " , count)
    case _:
        print("Invalid choice")
