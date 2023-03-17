import React, { useState } from "react";
import { en_to_fr, fr_to_en } from "../api/translate";

const Translator = () => {
    const [english, setEnglish] = useState("");
    const [french, setFrench] = useState("");

    const enTranslation = async() => {
        let text = await fr_to_en(french);
        setEnglish(text);
    };

    const frTranslation = async() => {
        let text = await en_to_fr(english);
        setFrench(text);
    };

    const handleChangeEnglish = (e) => {
        setEnglish(e.target.value);
    };

    const handleChangeFrench = (e) => {
        setFrench(e.target.value);
    };

    return (
        <div>
            <h1>Watson API translation service - Bikranta Singha</h1>
            <div>
                <div>
                    <h3>English</h3>
                    <textarea value={english} onChange={handleChangeEnglish} />
                </div>
                <div>
                    <h3>French</h3>
                    <textarea value={french} onChange={handleChangeFrench} />
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
