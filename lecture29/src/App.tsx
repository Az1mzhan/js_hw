import React, {useState} from 'react';
import './App.css';
import {Card} from "./components/Card";
import {LangChanger} from "./components/LangChanger";

interface CardData {
    id: number,
    title: string,
    content: string,
}

const App = () => {
    const [collapsedCard, setCollapsedCard] = useState<number>(-1);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [cards, setCards] = useState<CardData[]>([{
        id: 0,
        title: "SPQR",
        content: "Senatus Populusque Romanus",
    }, {
        id: 1,
        title: "BRPN",
        content: "Bono Rei Publicae Natus",
    }]);

    return (
        <div className="App">
            <LangChanger/>
            <div className="card-container">
                {cards.map(card => (
                    <Card key={card.id} btnId={card.id} title={card.title} content={card.content} isCollapsed={collapsedCard === card.id && isActive} onCardClick={(e: any) => {if (collapsedCard === card.id || (collapsedCard !== card.id && !isActive)) setIsActive(!isActive); setCollapsedCard(+(e.target.getAttribute("btn-key")))}}/>
                ))}
            </div>
        </div>
    )
}

export default App;
