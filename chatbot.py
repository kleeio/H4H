import nltk
from nltk.chat.util import Chat, reflections

pairs = [
    [
        r"hi|hello|hey",
        ["Hello! I'm a chatbot here to support you. How can I help you today?", 
         "Hi there! How are you feeling today?"]
    ],
    [
        r"what is anxiety?",
        ["Anxiety is a feeling of worry or fear about something that hasn't happened yet. It's a normal emotion, but it can become overwhelming and affect your daily life. Do you want to learn more about it?"]
    ],
    [
        r"yes",
        ["Anxiety can cause physical symptoms such as sweating, trembling, and a rapid heartbeat. It can also cause thoughts of worry, fear, and dread. If you're experiencing these symptoms, it's important to talk to a mental health professional who can provide you with support and resources. Would you like me to help you find a therapist?"]
    ],
    [
        r"no",
        ["That's okay. Let me know if you have any other questions."]
    ],
    [
        r"how can i manage anxiety?",
        ["There are many ways to manage anxiety, such as deep breathing exercises, mindfulness meditation, and physical exercise. Would you like me to walk you through some of these techniques?"]
    ],
    [
        r"yes",
        ["Sure, let's start with deep breathing. Take a deep breath in through your nose, hold it for a few seconds, and then exhale slowly through your mouth. Repeat this a few times until you feel more relaxed. How do you feel?"]
    ],
    [
        r"better|good",
        ["That's great to hear! Remember that managing anxiety is a process, and it's okay if it takes time to feel better. Is there anything else I can help you with?"]
    ],
    [
        r"no",
        ["Okay, take care of yourself. Don't hesitate to reach out to me if you have any questions or concerns."]
    ],
    [
        r"quit",
        ["Bye! Take care."]
    ],
]

def chatbot():
    print("Hi! I'm a chatbot here to support you. How can I help you today?")

    chat = Chat(pairs, reflections)
    chat.converse()

if __name__ == "__main__":
    nltk.download('punkt')
    chatbot()