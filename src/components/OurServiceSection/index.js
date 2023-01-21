import Card from './Card'
import { servicesData } from './../../assets/data'

export default function index() {
  return (
    <section className='Services-Section'>
      <aside className='Services-Section-Description'>
        <h2>How can we help your Business ?</h2>
        <p>
          We build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
      </aside>
      <main className='Cards-Wrapper'>
        {servicesData.map((service) => {
          return (
            <Card
              key={servicesData.indexOf(service)}
              Icon={service.icon}
              title={service.title}
              script={service.script}
              color={service.color}
            />
          )
        })}
      </main>
    </section>
  )
}
