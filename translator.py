import os
from ibm_watson import LanguageTranslatorV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

apikey = os.getenv('WATSON_KEY')
url = os.getenv('WATSON_URL')

authenticator = IAMAuthenticator(apikey)
translator = LanguageTranslatorV3(
    version='2018-05-01',
    authenticator=authenticator
)

translator.set_service_url(url)

def english_to_french(text):
    """
    Translate English text to French using the Watson Language Translator service
    """
    response = translator.translate(
        text=text,
        source='en',
        target='fr'
    ).get_result()

    french_text = response['translations'][0]['translation']
    return french_text


def french_to_english(text):
    """
    Translate French text to English using the Watson Language Translator service
    """
    response = translator.translate(
        text=text,
        source='fr',
        target='en'
    ).get_result()

    english_text = response['translations'][0]['translation']
    return english_text