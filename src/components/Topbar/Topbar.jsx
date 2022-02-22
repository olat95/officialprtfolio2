import React from 'react'
import { Person, Mail } from '@material-ui/icons'
import './Topbar.scss'

const Topbar = ({ open, close }) => {
  return (
    <div className={'topbar ' + (open && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            junior_DEV.
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+234-81-6626-6326</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>samsontunj@gmail.com</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => close(!open)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
