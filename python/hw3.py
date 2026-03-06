import os
os.system("cls")

print("Choose a challenge:\n1 - Finding largest\n"
          "2 - Finding sign\n3 - Sorting system\n"
          "4 - odd, even numbers\n5 - Fizz , Buzzer"
          "\n6 - Armstrong\n7 - Scoring")
choice = int(input("Enter your choice : "))
match choice:
    case 1:
        num1 = int(input("Enter 1 number : "))
        num2 = int(input("Enter 2 number : "))
        num3 = int(input("Enter 3 number : "))
        largest = num1
        if num1 == num2 and num2 == num3:
            print("All equal!!")
        elif num1 < num2 and num2 > num3:
            largest = num2
        elif num2 < num3 and num3 > num1:
            largest = num3
        
        print("The largest : " , largest)
    case 2:
        a = int(input("Enter 1 number : "))
        b = int(input("Enter 2 number : "))
        c = int(input("Enter 3 number : "))
        product = a * b * c
        sign = "-" if product < 0 else "+"
        print("The sign :" , sign)
    case 3:
        num1 = int(input("Enter 1 number"))
        num2 = int(input("Enter 2 number"))
        num3 = int(input("Enter 3 number"))
        maxnum = num1
        midnum = num1
        minnum = num1
        if num1 >= num2 and num1 >= num3 : maxnum = num1
        elif num2 >= num1 and num2 >= num3 : maxnum = num2
        else : maxnum = num3
        if num1 <= num2 and num1 <= num3 : minnum = num1
        elif num2 <= num1 and num2 <= num3 : minnum = num2
        else : minnum = num3
        midnum = (num1 + num2 + num3) - maxnum - minnum
        print("The sorted order : " , maxnum , midnum , minnum)
    case 4:
        sta = int(input("Enter starting point : ")) 
        end = int(input("Enter ending point : ")) 
        odd  = 0
        even = 0
        for i in range(sta , end + 1):
            if i % 2 == 0:
                even +=1
            else : odd +=1
        print("Even numbers : " ,even )
        print("Odd numbers : " , odd )
    case 5:
        threeMlt  = 0
        fiveMlt   = 0
        bothMlt   = 0
        for i in range(1, 101):
            if i % 3 == 0 and i % 5 == 0 :
                bothMlt += 1
                print("FizzBuzz")
            elif i % 5 == 0:
                fiveMlt += 1
                print("Buzz")
            elif i % 3 == 0:
                threeMlt += 1
                print("Fizz")
            else:
                print(i)
        
        print("There are " ,threeMlt , "Fizz and ",fiveMlt , "Buzz and finally",bothMlt,"FizzBuzz")
    case 6:
        result = []
        for i in range(100 , 1000):
            sum = 0
            temp = i
            while temp > 0 :
                digit = temp % 10
                sum += digit * digit * digit
                temp //= 10
            
            if sum == i:
                result.append(i)    
        print("Armstrong numbers between 100 and 999:", result)
    case 7:
        students = {
            "David": 80,
            "Vinoth": 77,
            "Ishitma": 95,
            "Thomas": 68
        }
        for name , score in students.items():
            if score < 60:
                grade = "F"
            elif score < 70:
                grade = "D"
            elif score < 80:
                grade = "C"
            elif score < 90:
                grade = "B"
            else:
                grade = "A"
            print(f"{name} : {score} -> {grade}")        
    case _:
        print("Invalid choice")