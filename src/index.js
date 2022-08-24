import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"


function App(){
    return(
    <div>
        <Header />
        <Body />
        <Footer />
    </div>)
}

ReactDOM.render(<App/>,
                document.getElementById("root"))
