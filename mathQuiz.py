"""Random math quiz"""

import random

def randomNumbers():
    x = random.randint(3, 100)
    y = random.randint(3, 100)
    numbers = [x, y]
    return numbers

def addAnswerOptions(x, y):
    choices = ['A', 'B', 'C', 'D']
    a, b, c, d = [x + y], [x - y], [round(x + (y - (y * .2)))], [round(x + (y +(y * .2)))]
    answers = [a, b, c, d]
    answersSorted = sorted(answers, key=lambda k: random.random())
    answerOptions = []
    for i in range(4):
        option = f"{choices[i]}) {answersSorted[i]}"
        answerOptions.append(option)
    return answerOptions

def correct(x, y):
    correctAnswer = x + y
    return correctAnswer

def quiz():
    for quizNum in range(2):
        #Create the quiz and the answer key files
        quizFile = open(f'Math_Quiz{quizNum + 1}.txt', 'w')
        answerKeyFile = open(f'Math_Quiz_Key{quizNum + 1}.txt', 'w')
            #Write out header for quiz
        quizFile.write('Name:\n\nDate:\n\nPeriod:\n\n')
        quizFile.write((' ' * 20) + f'Math quiz (Form{quizNum + 1})')
        quizFile.write('\n\n')


        for questionNum in range(20):
            """Use my other functions to loop through writing questions"""
            x_y = randomNumbers()
            x = x_y[0]
            y = x_y[1]
            answerOptions = addAnswerOptions(x, y)
            answer = correct(x, y)
            correctAnswer = f"{answer}"
            correctChoice = ''
            #Write the questions and answers options to the quiz file
            quizFile.write(f'{questionNum + 1})  {x} + {y} = __  |')
            for i in range(4):
                quizFile.write(f" {answerOptions[i]}")
                
            quizFile.write('\n')
            #Write the answer key to a file
            for x in answerOptions:
                if correctAnswer in x:
                    answerKeyFile.write(f"{questionNum + 1}  {x}\n")
    quizFile.close()
    answerKeyFile.close()

quiz()