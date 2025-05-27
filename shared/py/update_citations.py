# from scholarly import scholarly
import subprocess
import os
import platform
import re

# search_query = scholarly.search_author('Josue Martinez Moreno')
# data = scholarly.fill(next(search_query), sections=['basics', 'indices', 'publications'])

# citedby = data['citedby']
# publications = len(data['publications'])

## Hacky way to get the number of citations and publications from google scholar.

from urllib.request import Request, urlopen

url = "https://scholar.google.com/citations?user=gdPeyQ4AAAAJ&hl=en&oi=ao"

req = Request(
    url=url, 
    headers={'User-Agent': 'Mozilla/5.0'}
)
webpage = urlopen(req).read()

content = str(webpage, 'ISO-8859-1')

# filename = wget.download(url)

# with open(filename, 'r', encoding="ISO-8859-1") as file:
    # content = file.read()


citedby = content.split('Citations</a></td><td class="gsc_rsb_std">')[1].split('<')[0]

# papers_class = content.split('<tr class="gsc_a_tr">')[1:]

papers_class = content.split('<div class="gsc_rsb_m"><div class="gsc_rsb_m_a"><span>')[1].split('<')[0]

publications = int(re.findall(r'\d+', papers_class)[0]) + 1

sed_edit = ''
if platform.system() == "Darwin":
    sed_edit = '.bk'

def replace_string(line_identifier, replacement_string):
    cmd = [
            "sed",
            "-i{0}".format(sed_edit),
            "s/<.*{0}.*/<span class=\"w3-xlarge\">{1}<\/span><br>{0}/g".format(line_identifier,replacement_string),
            "research.html"
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

if os.path.isfile('./research.html.bk'):
    os.remove('./research.html.bk')