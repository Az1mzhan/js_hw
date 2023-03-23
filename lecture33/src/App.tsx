import {FC, useState} from "react";
import './App.css';
import {ModeButton} from "./components/ModeButton";
import {ThemeContext} from "./types/ThemeContext";
import {LanguageContext} from "./types/LanguageContext";
import {LangObject} from "./types/LangObject"
import {Lang} from "./types/Lang";
import {Flag} from "./types/Flag";
import {FlagBanner} from "./components/FlagBanner";
import {Theme} from "./types/Theme";

const App: FC = () => {
  const [langObject, setLangObject] = useState<LangObject>({lang: Lang.RU, flag: Flag.RU});
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  const switchLang = () => {
      switch (langObject.lang) {
          case Lang.RU:
              setLangObject({lang: Lang.EN, flag: Flag.EN});
              break;
          case Lang.EN:
              setLangObject({lang: Lang.KZ, flag: Flag.KZ});
              break;
          case Lang.KZ:
              setLangObject({lang: Lang.RU, flag: Flag.RU});
              break;
      }
  }

  const selectTheme = () => {
      if (theme === Theme.DARK)
          setTheme(Theme.LIGHT);
      else
          setTheme(Theme.DARK);
  }

  return (
    <ThemeContext.Provider value={theme}>
        <LanguageContext.Provider value={langObject}>
            <div className="App" style={theme === Theme.DARK ? {backgroundColor: "rgb(35,35,35)", color: "white"}: {backgroundColor: "white", color: "rgb(35,35,35)"}}>
                <div className="button-panel">
                    <ModeButton text={langObject.lang} buttonClick={switchLang}/>
                    <ModeButton text={theme} buttonClick={selectTheme}/>
                </div>
                <FlagBanner/>
            </div>
        </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
