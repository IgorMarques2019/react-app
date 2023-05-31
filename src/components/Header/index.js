import './scss/header.css'
import { Link } from 'react-router-dom';

function Header(){
  let logoName = 'JesCorp'
  return(
    <header>
      <h2>{logoName}</h2>
      <nav>
      <Link to='/'>Home</Link>
      <Link to='/sobre'>Sobre</Link>
      <Link to='/blog'>Blog</Link>
      </nav>
      <nav>

      </nav>
    </header>
  )
}
export default Header;