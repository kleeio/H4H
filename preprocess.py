import json
import nltk
import random
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC


# Read in the intents and responses from a JSON file
with open('intents1.json') as file:
    data = json.load(file)
intents = data['intents']
