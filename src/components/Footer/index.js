import Facebook from './../../assets/logos/Facebook'
import Linkedin from './../../assets/logos/Linkedin'
import Twitter from './../../assets/logos/Twitter'
import { footerData } from './../../assets/data'

export default function index() {
  return (
    <footer>
      <div className='Footer-Container'>
        <section className='Footer-Detaills'>
          <div className='Website-Logo'>
            <h2 style={{ fontWeight: '600' }}>A+</h2>
            <h2 style={{ fontWeight: '400' }}>Studio</h2>
          </div>
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <nav>
            <a href='#'>
              <Facebook />
            </a>
            <a href='#'>
              <Twitter />
            </a>
            <a href='#'>
              <Linkedin />
            </a>
          </nav>
        </section>
        <aside>
          {footerData.map((group) => {
            return (
              <div className='Footer-Card-Container'>
                <h1>{group.title}</h1>
                <section>
                  {group.nav.map((el) => {
                    return <a href={el.link}>{el.name}</a>
                  })}
                </section>
              </div>
            )
          })}
        </aside>
      </div>
      <p className='Made-By'>Made By The Little Oussi</p>
    </footer>
  )
}
