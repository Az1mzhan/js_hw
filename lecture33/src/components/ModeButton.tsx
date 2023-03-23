import {FC, useContext, useState} from "react";
import {ThemeContext} from "../types/ThemeContext";
import {Theme} from "../types/Theme";

interface Props {
    text: string,
    buttonClick: () => void
}

export const ModeButton: FC<Props> = ({text, buttonClick}: Props) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const theme = useContext(ThemeContext);

    const darkButtonStyle = {
        backgroundColor: "rgb(35,35,35)",
        color: "white",
        borderColor: "white"
    }

    const darkButtonHoverStyle = {
        backgroundColor: "white",
        color: "rgb(35,35,35)",
        borderColor: "white"
    }

    const lightButtonStyle = {
        backgroundColor: "white",
        color: "rgb(35,35,35)",
        borderColor: "rgb(35,35,35)"
    }

    const lightButtonHoverStyle = {
        backgroundColor: "rgb(35,35,35)",
        color: "white",
        borderColor: "rgb(35,35,35)"
    }

    const buttonMouseEnter = (): void => {
        setIsHover(true);
    };

    const buttonMouseLeave = (): void => {
        setIsHover(false);
    }

    return (
        <button className="mode-btn" style={isHover ? (theme === Theme.DARK ? darkButtonHoverStyle : lightButtonHoverStyle) : (theme === Theme.DARK ? darkButtonStyle : lightButtonStyle)} onClick={buttonClick} onMouseEnter={buttonMouseEnter} onMouseLeave={buttonMouseLeave}>{text}</button>
    )
}