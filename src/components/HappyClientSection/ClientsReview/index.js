import { useState } from 'react'

export default function ClientsReview({ data }) {
  const [slide, setSlide] = useState(0)

  return (
    <div className='Reviews-Wrapper'>
      <article className='Reviews-Container'>
        {data.map((item) => {
          return (
            <div
              key={data.indexOf(item)}
              className='Reviews-Card'
              style={{
                display: data.indexOf(item) === slide ? 'flex' : 'none',
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          )
        })}
      </article>
      <footer className='Reviews-Slides-Swiper'>
        {data.map((item) => {
          return (
            <button
              key={data.indexOf(item)}
              onClick={() => {
                setSlide(data.indexOf(item))
              }}
              style={{
                backgroundColor:
                  data.indexOf(item) === slide ? '#2639ED' : '#e7f0fc',
              }}
              aria-label='swipper btn'
            ></button>
          )
        })}
      </footer>
    </div>
  )
}
