import Airbnb from './../../assets/logos/Airbnb'
import Amazon from './../../assets/logos/Amazon'
import Google from './../../assets/logos/Google'
import UberEats from './../../assets/logos/UberEats'

export default function index() {
  return (
    <section className='Client-Section-Container'>
      <article className='Client-Article'>
        <h1>Our Client</h1>
        <p>Several selected clients, who already believe in our service.</p>
      </article>
      <aside className='Brands-Logo-Wrapper'>
        <div className='Brands-Logo-Container'>
          <Google />
        </div>
        <div className='Brands-Logo-Container'>
          <Airbnb />
        </div>
        <div className='Brands-Logo-Container'>
          <UberEats />
        </div>
        <div className='Brands-Logo-Container'>
          <Amazon />
        </div>
      </aside>
    </section>
  )
}
