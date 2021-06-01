require('file-loader?name=[name].[ext]!./index.html')
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const AppElement = document.getElementById('app')

// ReactDOM.render(<App />,AppElement)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  AppElement
);