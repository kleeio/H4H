import json

# Load the JSON file
with open('intents4.json', 'r') as f:
    data = json.load(f)

# Create sets to store unique responses and patterns
unique_responses = set()
unique_patterns = set()

# Loop through the data and add unique responses and patterns to the sets
for item in data:
    responses = set(item['responses'])
    unique_responses.update(responses)
    
    patterns = set(item['patterns'])
    unique_patterns.update(patterns)

# Create a new list to store the updated data
new_data = []

# Loop through the data again and remove duplicate responses and patterns
for item in data:
    responses = set(item['responses'])
    responses = [r for r in unique_responses if r in responses]
    
    patterns = set(item['patterns'])
    patterns = [p for p in unique_patterns if p in patterns]
    
    new_item = {
        'tag': item['tag'],
        'patterns': patterns,
        'responses': responses
    }
    
    new_data.append(new_item)

# Write the updated JSON to a new file
with open('unique.json', 'w') as f:
    json.dump(new_data, f, indent=4)