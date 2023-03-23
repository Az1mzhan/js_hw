import {FC, useState} from "react";

export const InputElement: FC = () => {
    const [text, setText] = useState<string>("");
    const [items, setItems] = useState<string[]>([]);

    return (
        <div className="name-input-block">
            <input type="text" onChange={e => setText(e.target.value)} />
            <button onClick={() => {setItems(items => [...items, text])}}>Add</button>
            <ul>
                {items.map((item: string, ind: number) => (
                    <li key={ind}>{item}</li>
                ))}
            </ul>
        </div>
    )
}