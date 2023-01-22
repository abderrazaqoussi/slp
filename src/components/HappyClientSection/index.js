import HappyClient from './../../assets/backgrounds/HappyClient.svg'
import { happyClientsData, clientsImages } from './../../assets/data'
import ClientsReview from './ClientsReview'

export default function index() {
  return (
    <section className='Happy-Clients-Section'>
      <header className='Happy-Clients-Header'>
        <h2 className='Happy-Clients-Header-Title'>
          What our happy client say
        </h2>
        <p className='Happy-Clients-Header-Desc'>
          Several selected clients, who already believe in our service.
        </p>
      </header>
      <main
        className='Happy-Clients-Main'
        style={{
          background: `url(${HappyClient}) no-repeat`,
        }}
      >
        <div className='Happy-Clients-Aside-Img'>
          <img
            src={`https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`}
            alt='A+ Studio happy client'
          />
        </div>
        <ClientsReview data={happyClientsData} />
        <aside
          className='Happy-Clients-Imgs-Handler'
          style={{
            position: 'relative',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          {clientsImages.map((e) => {
            return (
              <img
                key={clientsImages.indexOf(e)}
                src={e}
                alt={`Client ${clientsImages.indexOf(e) + 1} img`}
                style={{
                  width: `${120 - (30 + 6 * clientsImages.indexOf(e))}px`,
                  height: `${120 - (30 + 6 * clientsImages.indexOf(e))}px`,
                  objectFit: 'cover',
                  transform: `rotate(${
                    52 * clientsImages.indexOf(e)
                  }deg) translateX(${
                    clientsImages.indexOf(e)
                      ? 90 + 5 * clientsImages.indexOf(e)
                      : 0
                  }px) rotate(-${52 * clientsImages.indexOf(e)}deg)`,
                  aspectRatio: 1,
                  borderRadius: '50%',
                  position: 'absolute',
                }}
              />
            )
          })}
        </aside>
      </main>
    </section>
  )
}
