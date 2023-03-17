import os
from flask import Flask, render_template

app = Flask(__name__)
app.config['WATSON_KEY'] = os.getenv('WATSON_KEY')
app.config['WATSON_URL'] = os.getenv('WATSON_URL')

WATSON_KEY = os.getenv('WATSON_KEY')

@app.route('/')
def index():
    return f'Hello, {WATSON_KEY}'