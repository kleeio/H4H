import json

# Read the original JSON data from file
with open('newCrazyData.json', 'r') as f:
    original_data = json.load(f)

# Combine responses for entries with the same tag
tag_data = {}
for entry in original_data:
    tag = entry['tag']
    if tag not in tag_data:
        tag_data[tag] = {'tag': tag, 'patterns': [], 'responses': []}
    tag_data[tag]['patterns'].extend(entry['patterns'])
    tag_data[tag]['responses'].extend(entry['responses'])

# Write the updated data to a new JSON file
with open('finalCrazyData.json', 'w') as f:
    json.dump(list(tag_data.values()), f, indent=2)
