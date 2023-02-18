import pandas as pd
import json


df = pd.read_csv('20200325_counsel_chat.csv')
df.to_json('20200325_counsel_chat.json')

json_data = None
with open("20200325_counsel_chat.json", "r") as f:
    data = f.read()
    json_data = json.loads(data)

for key in json_data.keys():
    print(key)
#list(json_data.keys())
#rint(json_data)

del json_data['thereapistInfo']

print("After:")
for key in json_data.keys():
    print(key)