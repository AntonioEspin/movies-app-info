import logoMovies from '../images/logo-blockBuster.svg'
import iconSearch from '../icons/icon-search.svg'
import '../styles/Header.css'

export function Header () {
  return (
    <header className="header">
      <figure className="header__figure">
        <img src={logoMovies} alt="logo movies" />
      </figure>

      <nav className="header__nav">
        <ul className="header__nav--list">
          <li>Todas</li>
          <li>Más valoradas</li>
          <li>Menos valoradas</li>
        </ul>
      </nav>

      <div className="header__search">
        <label htmlFor=""></label>
        <input type="text" placeholder="Busca tu película favorita" />
        <figure>
          <img src={iconSearch} alt="icon-search" />
        </figure>
      </div>
    </header>
  )
}