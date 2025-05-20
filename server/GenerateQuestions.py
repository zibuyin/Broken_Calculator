import random

# Pre Declear Variables
Swapped_Count = 1 # Pairs Swapped
Swapped_Keys = {}
value1 = -1
value2 = -1

"""
First value in the dict is the "Shown Value" and the second value is the "Real Value"
"""
def Generate_Value2():
    
    value2 = random.randint(0,9) # Generate the first key swapped
    if value2 == value1:
        print("Value Clash! Retrying")
        Generate_Value2() # Generate the second one, but check if it's swapping with it self


def Generate_Values():
    global value1,value2
    value1 = random.randint(0,9)
    Generate_Value2()
    return(value1,value2) # Returns the pairs swapped



# Generate Swapped Keys
for i in range(Swapped_Count):
    key = str(i)
    value1 = random.randint(0,9)

    Swapped_Keys = dict(key=Generate_Values())
    print(Swapped_Keys)