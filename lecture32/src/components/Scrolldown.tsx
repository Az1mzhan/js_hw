// @ts-ignore
import logo from "../logo.svg";
import {FC, useEffect} from "react";

export const Scrolldown: FC = () => {
    useEffect(() => {
        const elem = document.getElementById("atom");

        if (elem) {
            window.scroll({
                top: 2 * elem.offsetTop,
                behavior: "smooth"
            })
        }
    }, [])

    return (
        <div className="scrolldown">
            <img id="atom" width="200px" src={logo} alt="Atom"/>
        </div>
    )
}