import Facebook from './../../assets/logos/Facebook'
import Linkedin from './../../assets/logos/Linkedin'
import Twitter from './../../assets/logos/Twitter'
import { footerData } from './../../assets/data'

export default function index() {
  return (
    <footer className='Page-Footer'>
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
            <a href='#' aria-label='Facebook link'>
              <Facebook />
            </a>
            <a href='#' aria-label='Twitter link'>
              <Twitter />
            </a>
            <a href='#' aria-label='Linkedin link'>
              <Linkedin />
            </a>
          </nav>
        </section>
        <aside>
          {footerData.map((group) => {
            return (
              <div
                key={footerData.indexOf(group)}
                className='Footer-Card-Container'
              >
                <h1>{group.title}</h1>
                <section>
                  {group.nav.map((el) => {
                    return (
                      <a
                        key={group.nav.indexOf(el)}
                        href={el.link}
                        aria-label={`${el.name} link`}
                      >
                        {el.name}
                      </a>
                    )
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
