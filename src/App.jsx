
import React from 'react'
import Counter from "./Counter";
import TextInput from "./TextInput";
import ToggleMessage from "./ToggleMessage";
import ItemList from "./ItemList";
import ChangeColor from "./ChangeColor";
import StateMgm from "./StateMgm"
import TrenaryOperator from "./TrenaryOperator"
import Screensize from './Screensize';

const App = () => {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <Counter />
      <TextInput />
      <ToggleMessage />
      <ItemList />
      <ChangeColor />
      <StateMgm/>
      <TrenaryOperator/>
      <Screensize/>
    </div>
  )
}

export default App