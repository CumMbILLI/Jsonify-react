import React, { useEffect, useState } from "react";
import CreateInput from "./createInput";

function Inputs(props) {
    const [keyValue, setKeyValue] = useState({})

    useEffect(() => {
        if (props.inputsValues.every(elem => elem.key)) {
            setKeyValue({})
            const keyArr = props.inputsValues.map(elem => elem.key)
            const valueArr = props.inputsValues.map(elem => elem.value)

            for (let i = 0; i < keyArr.length; i++) {
                setKeyValue({ ...keyValue, [keyArr[i]]: valueArr[i] })
            }
        }

    }, [props.inputsValues])

    const textAreaValue = () => {
        return (
            JSON.stringify(keyValue, null, 2)
        )
    }

    return (
        <div className="contentBox">
            <div className="inputBox">
                {props.inputsValues.map((elem, idx) => {
                    return <CreateInput key={elem.id} inputValue={elem} id={elem.id} index={idx} />
                })}
                <button type="button" className="createButton" onClick={props.onToggle}>+</button>
            </div>
            <div className="textArea">
                <textarea name="" id="" cols="30" rows="10" value={textAreaValue()} readOnly></textarea>
            </div>
        </div>
    )
}

export default Inputs