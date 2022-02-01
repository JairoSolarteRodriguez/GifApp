import './Gif.css'
import { Link } from 'wouter'

const Gif = ({ title, id, url}) => {
 
  return (
    <section className='gif'>
      <Link to={`/gif/${id}`}>
        <img src={url} alt={title}/>
      </Link>
    </section>
  )
}

export default Gif;