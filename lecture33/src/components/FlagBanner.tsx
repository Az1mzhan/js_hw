import {FC, useContext, useState} from "react";
import {Flag} from "../types/Flag";
import {LanguageContext} from "../types/LanguageContext";

export const FlagBanner: FC = () => {
    const languageObject = useContext(LanguageContext);

    return (
        <div className="flag">
            <img className="flag-img" src={languageObject.flag} />
        </div>
    )
}