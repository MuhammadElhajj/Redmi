import React from 'react'
import MenuHeader from './MenuHedaer'


function Header() {
  return (
    <div className='Header'>
      <div className='Logo-part'>Muhammad <span>El</span>Hajj</div>
      <div className='Menu-part'>
        {
            MenuHeader.map((item , index) => <a className={`Li-menu-header ${index === 0 ? 'active' : ''}`} href = {item.href}>{item.name}</a>)
        }
      </div>
    </div>
  )
}

export default Header
