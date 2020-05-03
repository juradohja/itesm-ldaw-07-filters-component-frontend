import React from "react";

const ButtonImg = ({src, label, size, state, setState}) => {

    const handleSetState = (_e) => {
        setState(label);
    }

    const bgc = state === label ? "#ecedfc" : "#fff";

    return(
        <div className={`col-${size} px-0 py-0`}>
            <button className={"btn text-center px-0 w-100 h-100"}
                    style={{borderRadius : 0, borderColor : "#1724ab", backgroundColor : bgc, fontSize : "0.75rem"}}
                    onClick={handleSetState}>
                <img alt={label} src={src} className={"mx-auto"} onClick={handleSetState}/>
                {label}
            </button>
        </div>
    )
}

export default ButtonImg;