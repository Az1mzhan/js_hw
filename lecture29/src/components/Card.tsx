import '../App.css';
import React, {FC} from "react";

interface Props {
    title: string,
    content: string,
    isCollapsed: boolean,
    onCardClick: () => void
}

export const Card: FC<Props> = ({title, content, isCollapsed, onCardClick}: Props) => {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            {isCollapsed && <p className="card-par">{content}</p>}
            <button onClick={onCardClick}>v</button>
        </div>
    );
}