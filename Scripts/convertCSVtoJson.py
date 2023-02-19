import csv
import json

csv_file_path = ''
json_file_path = 'path/to/json_file.json'

# Read CSV file
with open(csv_file_path, 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    # Convert each row into a dictionary and store it in a list
    data = [row for row in csv_reader]

# Write JSON file
with open(json_file_path, 'w') as json_file:
    json.dump(data, json_file)