def area(side_length):
    return side_length ** 2

try:
    side_length = float(input("Enter the side length of the square: "))
    
    if side_length < 0:
        print("Side length cannot be negative.")
    else:
        square_area = area(side_length)
        print(f"The area of the square with side length {side_length} is: {square_area}")
except ValueError:
    print("Invalid input. Please enter a valid number for the side length.")
