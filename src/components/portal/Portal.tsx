import React from "react";
import ReactDOM from "react-dom";

const Portal = (props:{children:React.ReactNode}) => {
    const node:HTMLElement = document.getElementById("portal") as HTMLElement;
    return ReactDOM.createPortal(props.children, node );
};

export default Portal;