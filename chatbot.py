import json
import nltk
import random
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC

# Read in the intents and responses from a JSON file
with open('intents.json') as file:
    data = json.load(file)
intents = data['intents']

# Preprocess the intents and responses
lemmatizer = nltk.WordNetLemmatizer()
stop_words = set(stopwords.words('english'))

def preprocess(text):
    # Tokenize the text
    tokens = word_tokenize(text.lower())
    # Remove stop words and non-alphabetic tokens
    tokens = [token for token in tokens if token.isalpha() and token not in stop_words]
    # Lemmatize the tokens
    tokens = [lemmatizer.lemmatize(token) for token in tokens]
    return ' '.join(tokens)

X = []
y = []
for intent in intents:
    for pattern in intent['patterns']:
        X.append(preprocess(pattern))
        y.append(intent['tag'])

# Extract features using TF-IDF
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(X)

# Train a Support Vector Machine classifier
clf = SVC(kernel='linear')
clf.fit(X, y)

# Define a function to classify user inputs and generate responses
def classify_intent(text):
    X_input = vectorizer.transform([preprocess(text)])
    intent = clf.predict(X_input)[0]
    return intent

def generate_response(intent):
    for i in intents:
        if i['tag'] == intent:
            responses = i['responses']
    return random.choice(responses)

def chat():
    print("Hi, I'm a chatbot. How can I help you today?")
    while True:
        user_input = input("> ")
        intent = classify_intent(user_input)
        response = generate_response(intent)
        print(response)

if __name__ == '__main__':
    nltk.download('punkt')
    nltk.download('stopwords')
    nltk.download('wordnet')
    chat()
