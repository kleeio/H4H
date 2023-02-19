import json

with open('intents3.json') as f:
    data = f.readlines()

output = {}

for entry in data:
    entry_data = json.loads(entry)
    tag = entry_data['tag']
    pattern = entry_data['patterns']
    response = entry_data['Response']

    if tag not in output:
        output[tag] = {'tag': tag, 'patterns': [], 'responses': []}

    output[tag]['patterns'].append(pattern)
    output[tag]['responses'].append(response)

for tag in output:
    output[tag]['patterns'] = list(set(output[tag]['patterns']))
    output[tag]['responses'] = list(set(output[tag]['responses']))

with open('formatted_data.json', 'w') as f:
    json.dump(list(output.values()), f, indent=2)