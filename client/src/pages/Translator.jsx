import React, {useState} from "react";
import { en_to_fr, fr_to_en } from "../api/translate";

const Translator = () => {
    const [english, setEnglish] = useState("");
    const [french, setFrench] = useState("");

    const enTranslation = async() => {
        let text = await fr_to_en(english);
        setEnglish(text);
    }

    const frTranslation = async() => {
        let text = await en_to_fr(french);
        setFrench(text);
    }

    return (
        <div>
            <h1>Watson API translation service - Bikranta Singha</h1>
            <div>
                <div>
                    <h3>English</h3>
                    <textarea value={english} onChange={(e) => setEnglish(e.target.text)}/>
                </div>
                <div>
                    <h3>French</h3>
                    <textarea value={french} onChange={(e) => setFrench(e.target.text)}/>
                </div>
            </div>
            <div>
                <button onClick={enTranslation}>Translate to English</button>
                <button onClick={frTranslation}>Translate to French</button>
            </div>
        </div>
    );
};

export default Translator;
