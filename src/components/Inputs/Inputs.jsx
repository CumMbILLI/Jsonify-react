import React, { useEffect, useState, useMemo } from "react";
import CreateInput from "./CreateInput";
import './Inputs.css'

function Inputs(props) {
    const [keyValue, setKeyValue] = useState({})

    useEffect(() => { 
        if (props.inputsValues.every(elem => elem.key)) {
            setKeyValue(props.inputsValues.reduce((prev, curr) => ({...prev, [curr.key]:curr.value}), null))
        }
    }, [props.inputsValues])

    const textAreaValue = useMemo(() => JSON.stringify(keyValue, null, 2), [keyValue])

    return (
        <div className="content__box">
            <div className="input__box">
                {props.inputsValues.map((elem, idx) => {
                    return <CreateInput key={elem.id} inputValue={elem} id={elem.id} index={idx} remove = {props.remove} changeK = {props.cK} changeV = {props.cV}/>
                })}
                <button type="button" className="create__button" onClick={props.onCreate}>+</button>
            </div>
            <div className="text__box">
                <textarea value={textAreaValue} className="text__area" readOnly></textarea>
            </div>
        </div>
    )
}

export default Inputs