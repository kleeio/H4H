import pandas as pd
import json

json_data = None
with open("20200325_counsel_chat.json", "r") as f:
    data = f.read()
    json_data = json.loads(data)

for key in json_data.keys():
    print(key)

del json_data['thereapistInfo']

print("After:")
for key in json_data.keys():
    print(key)