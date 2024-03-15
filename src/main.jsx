import React from 'react'
import ReactDOM from 'react-dom/client'
//import Home from './containers/Home'
//import Orders from './containers/Orders'
import Routes from './routes'
import MyGlobalStyles from './styles/globalStyles'

//import {App} from './App.jsx'//
//import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyGlobalStyles />
    <Routes />
  </React.StrictMode>,
)
