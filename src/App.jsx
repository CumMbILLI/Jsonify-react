import React, { useState } from "react";
import Inputs from "./components/Inputs/Inputs";
import Header from "./components/Header/Header";
import './style/App.css'

function App() {
  const [inputsValues, setInputsValues] = useState([
    { id: Math.random(), key: undefined, value: undefined },
  ])

  function createInputs() {
    if (inputsValues.every(elem => elem.key)) {
      setInputsValues(inputsValues.concat([{ id: Math.random(), key: undefined, value: undefined }]))
    }
  }

  function removeInputs(id) {
    setInputsValues(inputsValues.filter(elem => elem.id !== id))
  }

  function changeKey(key, id) {
    setInputsValues(inputsValues.map(elem => {
      if (elem.id === id) {
        return { ...elem, key }
      }
      return elem
    }))
  }

  function changeValue(value, id) {
    setInputsValues(inputsValues.map(elem => {
      if (elem.id === id) {
        return { ...elem, value }
      }
      return elem
    }))
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Inputs inputsValues={inputsValues} onCreate={createInputs} remove={removeInputs} cK={changeKey} cV={changeValue} />
      </div>
    </div>
  );
}

export default App;
