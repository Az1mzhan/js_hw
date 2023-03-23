import {createContext} from "react";
import {LangObject} from "./LangObject";
import {Lang} from "./Lang";
import {Flag} from "./Flag";

export const LanguageContext = createContext<LangObject>({lang: Lang.RU, flag: Flag.RU});