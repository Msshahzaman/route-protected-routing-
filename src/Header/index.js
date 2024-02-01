import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav = useNavigate()
  return (
    <div>
      <h1>Header</h1>
      <button onClick={()=>nav('/detail')}>details</button>
    </div>
  )
}

export default Header;
