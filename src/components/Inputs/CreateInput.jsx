import React, { useEffect, useState } from "react";
import './CreateInput.css'

function CreateInput({ id, index, remove, changeK, changeV }) {
    const [key, setKey] = useState()
    const [value, setValue] = useState('')

    function onChangeKey(event) {
        setKey(event.target.value)
    }

    function onChangeValue(event) {
        setValue(event.target.value)
    }

    useEffect(() => {
        changeK(key, id)
    }, [key])

    useEffect(() => {
        changeV(value, id)
    }, [value])

    return (
        <div className="newInputs">
            {Boolean(index) && <div className="line"></div>}
            <div className="inputs">
                <input type="text" placeholder="key" onChange={event => onChangeKey(event)} />
                {Boolean(index) && <button className="remove__button" onClick={() => remove(id)}><span>+</span></button>}
                <input type="text" placeholder="value" onChange={event => onChangeValue(event)} />
            </div>
        </div>
    )
}

export default CreateInput