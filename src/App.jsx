import React, { useState } from "react";
import Inputs from "./components/inputs";
import Context from "./context";

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
    <Context.Provider value={{ removeInputs, changeKey, changeValue }}>
      <div className="App">
        <Inputs inputsValues={inputsValues} onToggle={createInputs} />
      </div>
    </Context.Provider>
  );
}

export default App;
