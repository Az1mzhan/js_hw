import '../App.css';

interface Props {
    btnId: number,
    title: string,
    content: string,
    isCollapsed: boolean,
    onCardClick: (e: any) => void
}

export const Card = ({btnId, title, content, isCollapsed, onCardClick}: Props) => {
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            {isCollapsed && <p className="card-par">{content}</p>}
            <button btn-key={btnId} onClick={onCardClick}>v</button>
        </div>
    );
}