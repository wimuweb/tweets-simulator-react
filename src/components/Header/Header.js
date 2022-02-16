import React from 'react'
import TwitterLogo from '../../assets/img/580b57fcd9996e24bc43c53e.png';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
    <img src={TwitterLogo} alt="tweetsSimulator" />
    <h1>Tweets Simulator</h1>
    
    </div>
  )
}
