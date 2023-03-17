import React, {FC, useState} from "react";
import '../App.css';

enum Lang {
    RU = "ru",
    KZ = "kz",
    EN = "en"
}

export const LangChanger: FC = () => {
    const [lang, setLang] = useState<Lang>(Lang.RU);
    const [text, setText] = useState<string>("Добро пожаловать");

    const switchLang = () => {
        switch (lang) {
            case Lang.RU:
                setLang(Lang.KZ);
                setText("Қош келдіңіздер!");
                break;
            case Lang.KZ:
                setLang(Lang.EN);
                setText("Welcome!")
                break;
            case Lang.EN:
                setLang(Lang.RU);
                setText("Добро пожаловать!");
                break;
            default:
                console.log("This language is not supported");
        }
    }

    return (
        <div className="lang-container">
            <button onClick={switchLang} className="lang-btn">{lang}</button>
            <h3>{text}</h3>
        </div>
    )
}