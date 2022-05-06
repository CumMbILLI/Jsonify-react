import React, { useContext, useEffect, useState } from "react";
import Context from "../context";

function CreateInput({ inputValue, id, index }) {
    
    const [key, setKey] = useState()
    const [value, setValue] = useState()
    const { removeInputs, changeKey, changeValue } = useContext(Context)

    function onChangeKey(event) {
        setKey(event.target.value)
    }

    function onChangeValue(event) {
        setValue(event.target.value)
    }

    useEffect(() => {
        changeKey(key, id)
        
    }, [key])

    useEffect(() => {
        changeValue(value, id)
    }, [value])

    return (
        <div className="newInputs">
            {Boolean(index) && <div className="line"></div>}
            <div className="inputs">
                <input type="text" placeholder="key" onChange={event => onChangeKey(event)} />
                {Boolean(index) && <button className="removeBotton" onClick={() => removeInputs(id)}>X</button>}
                <input type="text" placeholder="value" onChange={event => onChangeValue(event)} />
            </div>
        </div>
    )
}

export default CreateInput