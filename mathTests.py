"""Random math tests and answer keys"""

import random

def randomNumber(difficulty):
    if difficulty == 1:
        number = random.randint(0, 15)
        return number
    elif difficulty == 2:
        number = random.randint(7, 500)
        number = number * 2.5
        return number
    else:
        number = random.randint(-500, 500)
        number = number * 5.3
        return number


def operand(type):
    oper = ''
    if type == 'add':
        oper = '+'
        return oper
    elif type == 'sub':
        oper = '-'
        return oper
    elif type == 'mult':
        oper = '*'
        return oper
    elif type == 'div':
        oper = '%'
        return oper

def problem(difficulty, type, length):
    problem = ''
    for x in range(length):
        


    




