import {FC, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

export const Counter: FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="cnt-block">
            <h2>{count}</h2>
            <div className="cnt-btn-block">
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => {if (count > 0) setCount(count - 1)}}>Decrease</button>
            </div>
        </div>
    )
}