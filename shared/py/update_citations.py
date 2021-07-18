from scholarly import scholarly
import subprocess
import os

search_query = scholarly.search_author('Josue Martinez Moreno')
data = scholarly.fill(next(search_query), sections=['basics', 'indices', 'publications'])

citedby = data['citedby']
publications = len(data['publications'])

def replace_string(line_identifier, replacement_string):
    cmd = [
            "sed"
            "-i.bk",
            "s/<\s.*{0}.*/<span class=\"w3-xlarge\">{1}<\/span><br>{0}/g".format(line_identifier,replacement_string),
            "research.html", 
            # s">", "
            # "research.html.bk",
            # "&&",
            # "mv", 
            # "./research.html.bk ./research.html"
        ]
    return cmd

replace_lines = {"<!--Cit-->": citedby, "<!--Pub-->": publications}

for key,item in replace_lines.items():
    print("Key",key," item:",item)
    cmd = replace_string(key, item)
    print(" ".join(cmd))
    proc = subprocess.run(
        cmd
    )

# if os.path.isfile('./research.html.bk'):
#     os.remove('./research.html.bk')