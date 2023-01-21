import React from 'react'
import HeroHeadline from './../../assets/backgrounds/HeroHeadline.svg'

export default function index() {
  return (
    <section
      className='Intro-Section'
      style={{
        background: `url(${HeroHeadline})`,
      }}
    >
      <aside className='Intro-Aside'>
        <h1 className='Intro-Aside-Title'>A Digital Product Agency</h1>
        <p className='Intro-Aside-Paragraph'>{`Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.`}</p>
        <button className='Intro-Aside-Button'>Contact Now</button>
      </aside>
      <div className='Image-Wrapper'>
        <img
          src={`https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`}
          alt=''
        />
      </div>
    </section>
  )
}
