import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 0)
            setCount(count - 1);
    }

    return (
        <div className="cnt-block">
            <h2>{count}</h2>
            <div className="cnt-btn-block">
                <button onClick={increaseCount}>Increase</button>
                <button onClick={decreaseCount}>Decrease</button>
            </div>
        </div>
    )
}