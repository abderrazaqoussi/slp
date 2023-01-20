import React from 'react'

export default function index() {
  const navigationItems = [
    { name: 'Home', link: '#' },
    { name: 'What We Do', link: '#' },
    { name: 'Service', link: '#' },
    { name: 'Project', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'Contact', link: '#' },
  ]

  return (
    <header>
      <div className='Website-Logo'>
        <h2 style={{ fontWeight: '600' }}>A+</h2>
        <h2 style={{ fontWeight: '400' }}>Studio</h2>
      </div>
      <nav className='Nav-Container'>
        {navigationItems.map((item) => {
          return (
            <a key={navigationItems.indexOf(item)} href={item.link}>
              {item.name}
            </a>
          )
        })}
      </nav>
    </header>
  )
}
