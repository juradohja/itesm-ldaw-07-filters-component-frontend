import React from "react";
import ButtonImg from "./ButtonImg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";

const ButtonFilter = ({title, buttons, tooltip, size, state, setState}) => {

    return (
        <div className={"container text-left mb-3"}>
            <div className={"row mb-1"}>
                <div className={"col px-0"}>
                    <b>{title} </b>
                    <button className={"btn px-1 py-0"}
                            style={{backgroundColor : "#1724ab", color : "#FFF", borderRadius : 0}}
                            data-toggle="tooltip"
                            data-placement="right"
                            title={tooltip}>
                        <FontAwesomeIcon icon={faQuestion}/>
                    </button>
                </div>
            </div>
            <div className={"row"}>
                {buttons.map((btn, i) =>
                    <ButtonImg src={btn.src} label={btn.label} size={size} state={state} setState={setState} key={i}/>
                )}
            </div>
        </div>
    );
}

export default ButtonFilter;