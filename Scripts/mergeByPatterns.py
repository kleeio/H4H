import json

# Load the JSON data from a file
with open('finalCrazyData.json', 'r') as f:
    data = json.load(f)

# Create a dictionary to store the unique responses
unique_responses = {}

# Loop through each item in the JSON data
for item in data:
    # Get the first response from the list of responses
    first_response = item['responses'][0]
    # Check if the response has already been added to the dictionary
    if first_response in unique_responses:
        # If it has, append the current item's patterns to the existing tag's patterns
        unique_responses[first_response]['patterns'] += item['patterns']
        # Delete the current item from the list
        data.remove(item)
    else:
        # If it hasn't, add the response to the dictionary with the current item's tag and patterns
        unique_responses[first_response] = {
            'tag': item['tag'],
            'patterns': item['patterns']
        }

# Convert the dictionary back to a list
merged_data = list(unique_responses.values()) + data

# Write the merged data to a new file
with open('fixedPattern.json', 'w') as f:
    json.dump(merged_data, f, indent=4)