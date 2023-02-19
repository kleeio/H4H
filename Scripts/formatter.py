import json

# Read JSON data from file
with open('intents3.json', 'r') as f:
    data = json.load(f)

# Convert to desired format
output = []
for d in data:
    new_entry = {
        'tag': d['tag'],
        'patterns': [d['pattern']],
        'responses': [d['response']]
    }
    output.append(new_entry)

# Write converted data to file
with open('output.json', 'w') as f:
    json.dump(output, f, indent=2)
