import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";

const AppLayout = function(){
    return (
        <>
            <Header/>
            <HamburgerMenu/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);