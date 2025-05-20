import random

# Predeclare Variables
Swapped_Count = 1  # Number of pairs to swap
Swapped_Keys = {}  # Dictionary to store swapped pairs

"""
First value in the dict is the "Shown Value" and the second value is the "Real Value"
"""


def Generate_Value2(value1):
    """Generates a second value that is not equal to value1."""
    value2 = random.randint(0, 9)
    while value2 == value1:  # Avoid self-swapping
        print("Value Clash! Retrying...")
        value2 = random.randint(0, 9)
    return value2


def Generate_Values():
    """Generates a pair of values (value1, value2) ensuring they are not equal."""
    value1 = random.randint(0, 9)
    value2 = Generate_Value2(value1)
    return value1, value2  # Returns the pair


# Generate Swapped Keys
for i in range(Swapped_Count):
    key = str(i)  # Use the index as the key
    Swapped_Keys[key] = Generate_Values()  # Add the pair to the dictionary
    print(f"Swapped Pair for Key '{key}': {Swapped_Keys[key]}")

# Final Output
print("Swapped Keys Dictionary:", Swapped_Keys)

