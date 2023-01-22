import React from 'react'
import Newsletter from './../../assets/backgrounds/Newsletter.svg'
import Rectangle31 from './../../assets/backgrounds/Rectangle31.svg'

export default function index() {
  return (
    <section
      className='NewsLetter-Section'
      style={{
        background: `url(${Newsletter}) no-repeat`,
      }}
    >
      <article className='NewsLetter-Wrapper'>
        <aside className='NewsLetter-Aside'>
          <h2>Subscribe Newsletter</h2>
          <p>I will update good news and promotion service not spam</p>
        </aside>
        <div
          className='Input-Wrapper'
          style={{
            background: `url(${Rectangle31}) no-repeat`,
          }}
        >
          <div className='Input-Container'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email address..'
            />
            <button className='Input-Button' aria-label='contact now btn'>
              Contact Now
            </button>
          </div>
        </div>
      </article>
    </section>
  )
}
