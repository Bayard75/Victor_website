import os

def get_file_name(directory):

    for path, dirs, files in os.walk(directory):
        x = files

    for index, names in enumerate(x):
        x[index] = names[:-4]

    return x


def list_to_sublist(l, n):
    for i in range(0, len(l), 4):
        yield l[i:i+n]
