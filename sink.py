import subprocess

while True:
    try:
        x = input()
    except EOFError:
        break

    with open("log.txt", "a") as file:
        file.write(x + "\n")
