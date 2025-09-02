def extract_lines_with_numbers(input_file, output_file):
    
    with open(input_file, 'r') as file:
        lines = file.readlines()
        import random
        random.shuffle(lines)
    total_lines = len(lines)
    id1="1"
    id3=''
    with open(output_file, 'w') as out_file:
        out_file.write('1,"Nom du dé :","'+id1+'"\n')
        out_file.write('2,"Nombre de faces :","'+str(total_lines)+'"\n')
        out_file.write('3,"(Optionnel) Image du Dé :","'+id3+'"\n')
        

        for idx, line in enumerate(lines, start=1):
            dulien=line.strip()
            pos=idx+3
            out_file.write(str(pos)+',"(Optionnel) Image de la face '+str(pos)+':","'+dulien+'"\n')

pos=0

import os

# Obtenir le chemin complet du fichier d'entrée
input_file = os.path.join(os.path.dirname(__file__), 'input.txt')
output_file = os.path.join(os.path.dirname(__file__),"output.txt")

# Appeler la fonction extract_lines_with_numbers avec les chemins complets des fichiers
extract_lines_with_numbers(input_file, output_file)
 
