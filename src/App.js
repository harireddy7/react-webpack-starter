import React from 'react'
import './App.css'
import Img from './assets/react.png'

const App = () => {
    return (
        <div className="app-container">
            <p>Hello FEDS from React!!</p>
            <img src={Img} alt="react-webpack-babel" />
        </div>
    )
}

export default App
