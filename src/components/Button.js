import React from "react";

const Button = ({label, color, submit}) => {

    const handleSubmit = (_e) => {
        submit();
    }

    return(
        <button className={`btn mybtn mybtn-${color}`} onClick={handleSubmit}>{label}</button>
    )
}

export default Button;