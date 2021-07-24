import React from 'react'
import ReactDOM from 'react-dom';

const PopupDom = ({children}) => {
    const p = document.getElementById("root")
    return (
        ReactDOM.createPortal(children, p)
    )
}

export default PopupDom
