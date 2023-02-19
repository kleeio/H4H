import json


# Opening JSON file
f = open('mentalhealth.json')

# returns JSON object as
# a dictionary
data = json.load(f)
listDict =[]


# Iterating through the json
# list


for list in data:
    newDict = {}
    for key in list:
        if(key == "B"):
            newDict["patterns"] = list["B"]
        elif(key == "C"):
            newDict["responses"] = list["C"]
    listDict.append(newDict)

with open('mentalhealth.json', 'w') as fp:
    json.dump(listDict,fp)

# for list in data["intents"]:
#     for trashKey in trashKeys:
#         list.pop(trashKey)
# #print(trashKeys)
#
# #print(data["intents"][0])
# with open('mentalhealth.json', 'w') as fp:
#     json.dump(data["intents"],fp)

# for i in data['intents']['tags']:
#     if(i != 'patterns' or i != 'responses'):
#         print(i)

# Closing file
f.close()
