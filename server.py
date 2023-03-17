import os
from flask import Flask, render_template, jsonify, request
from translator.translator import english_to_french, french_to_english

app = Flask(__name__, static_folder='client/build/static/', template_folder='client/build/')
app.config['WATSON_KEY'] = os.getenv('WATSON_KEY')
app.config['WATSON_URL'] = os.getenv('WATSON_URL')


@app.route('/english-to-french', methods=['GET'])
def translate_en_to_fr():
    text = request.args.get('text')
    if text:
        french_text = english_to_french(text)
        return jsonify({'translation': french_text})
    else:
        return jsonify({'error': 'Text to translate is missing.'})

@app.route('/french-to-english', methods=['GET'])
def translate_fr_to_en():
    text = request.args.get('text')
    if text:
        english_text = french_to_english(text)
        return jsonify({'translation': english_text})
    else:
        return jsonify({'error': 'Text to translate is missing.'})

@app.route('/')
def index():
    return render_template('index.html')

