import json

with open('crazyDATA.json', 'r') as f:
    data = json.load(f)

output = []

for q_id, question in data['questionID'].items():
    output.append({
        "tag": str(q_id),
        "patterns": [data['pattern'][q_id]],
        "responses": [data['response'][q_id]]
    })

with open('newCrazyData.json', 'w') as f:
    json.dump(output, f, indent=2)
