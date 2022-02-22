import './Menu.scss'
import React from 'react'

const Menu = ({ open, close }) => {
  return (
    <div className={'menu ' + (open && 'active')}>
      <ul>
        <li onClick={() => close(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={() => close(false)}>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li onClick={() => close(false)}>
          <a href='#works'>Works</a>
        </li>
        <li onClick={() => close(false)}>
          <a href='#testimonial'>Testimonial</a>
        </li>
        <li onClick={() => close(false)}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
