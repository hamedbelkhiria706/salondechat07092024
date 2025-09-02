# -*- coding: utf-8 -*-
# Get the current opened file in Notepad++
current_file = notepad.getCurrentFilename()

# Define output file names
output1_file = current_file.replace('.txt', '_output1.txt')
output2_file = current_file.replace('.txt', '_output2.txt')

def process_files(input_file, output1_file, output2_file):
    with open(input_file, 'r') as file:
        lines = file.readlines()
    
    # Shuffle lines (if needed)
    import random
    random.shuffle(lines)

    total_lines = len(lines)
    id1 = "1"
    id3 = ''

    # Create output1.txt
    with open(output1_file, 'w') as out_file:
        out_file.write('1,"Nom du dé :","' + id1 + '"\n')
        out_file.write('2,"Nombre de faces :","' + str(total_lines) + '"\n')
        out_file.write('3,"(Optionnel) Image du Dé :","' + id3 + '"\n')

        for idx, line in enumerate(lines, start=1):
            dulien = line.strip().replace('/th/', '/')  # Replace /th/ with /
            pos = idx + 3
            out_file.write(str(pos) + ',"(Optionnel) Image de la face ' + str(pos) + ' :","' + dulien + '"\n')

    # Create output2.txt
    with open(output2_file, 'w') as out_file:
        for line in lines:
            dulien = line.strip().replace('/th/', '/')
            # Replace https with [img]https and append [/img] to image extensions
            dulien = dulien.replace('https', '[img]https').replace('.jpg', '.jpg[/img]').replace('.gif', '.gif[/img]').replace('.png', '.png[/img]')
            out_file.write(dulien + '\n')

# Call the function with the current file
process_files(current_file, output1_file, output2_file)

notepad.messageBox("Output files created: " + output1_file + ", " + output2_file)