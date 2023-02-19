import pandas as pd
import json

json_data = None
f =  open("20200325_counsel_chat.json", "r")
json_data = json.load(f)

toReturn = {}
toReturn["pattern"] = {}
toReturn["response"] = {}

for i in range(0, 2128):
    title = json_data["questionTitle"][str(i)]
    text = json_data["questionText"][str(i)]
    question = title + " " + text
    print(question)
    toReturn["pattern"][i] = question
    toReturn["response"][i] = json_data['answerText'][str(i)]

with open("20200325_counsel_chat.json", "w") as fp:
    json.dump(toReturn, fp)

f.close() 
