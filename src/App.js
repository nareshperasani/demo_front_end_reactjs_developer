import React from 'react'
import './App.css'
import Auth from './components/Auth';
import Balance from './components/Balance';
import Banking from './components/Banking';
import AccountStatus from './components/AccountStatus';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Auth/>
      <Balance/>
      <Banking/>
      <AccountStatus/>
    </>
  )
}

export default App
