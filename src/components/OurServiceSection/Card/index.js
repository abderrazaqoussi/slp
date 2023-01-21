export default function index({ Icon, title, script, color }) {
  return (
    <article className='Card-Container'>
      <div className='Card-Icon-Wrapper' style={{ background: `${color}1A` }}>
        {Icon}
      </div>
      <h2>{title}</h2>
      <p>{script}</p>
    </article>
  )
}
