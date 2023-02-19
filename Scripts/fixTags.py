import json

# Load the original JSON data
with open("mergedResponses.json", "r") as f:
    data = json.load(f)

# Create a mapping of old tag names to new tag numbers
tag_map = {old_tag: i + 1 for i, old_tag in enumerate(sorted(data))}

# Update the tag names in the data
new_data = {tag_map[old_tag]: data[old_tag] for old_tag in data}

# Write the updated data to a new JSON file
with open("updated.json", "w") as f:
    json.dump(new_data, f, indent=2)