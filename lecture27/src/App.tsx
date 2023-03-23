import React, {FC} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {InputElement} from "./components/InputElement";

const App: FC = () => {
  return (
    <div className="App">
        <Counter/>
        <InputElement/>
    </div>
  );
}

export default App;
