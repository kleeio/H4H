import json

with open('finalCrazyData.json', 'r') as f:
    data = json.load(f)

merged_data = []

for item in data:
    if not merged_data:
        merged_data.append(item)
    else:
        found = False
        for merged_item in merged_data:
            if item['patterns'][0] == merged_item['patterns'][0]:
                found = True
                merged_item['tag'] += ', ' + item['tag']
                merged_item['responses'] += item['responses']
                break
        if not found:
            merged_data.append(item)

with open('mergedResponses.json', 'w') as f:
    json.dump(merged_data, f, indent=4)