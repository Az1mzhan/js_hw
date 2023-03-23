import React from 'react';
import './App.css';
import {Scrolldown} from "./components/Scrolldown";
import {LoremIpsumParagraph} from "./components/LoremIpsumParagraph";

function App() {
  return (
    <div className="App">
        <h1>Lorem ipsum</h1>
        <LoremIpsumParagraph/>
        <LoremIpsumParagraph/>
        <LoremIpsumParagraph/>
      <Scrolldown/>
    </div>
  );
}

export default App;
