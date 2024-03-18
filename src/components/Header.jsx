import logoMovies from '../images/logo-blockBuster.svg'
import iconSearch from '../icons/icon-search.svg'
import '../styles/Header.css'

export function Header ({setSearch, filterMovies, moviesSearch, setActive}) {

  const handleSubmitSearch = (e) => {
    e.preventDefault()
    const {elements} = e.currentTarget
    const item = elements.namedItem('inputSearch')
    setSearch(item.value)
    moviesSearch(item.value)
    setActive(true)
    item.value = ''
  }

  const handleFilterMovies = (e) => {
    const value = e.target.innerText
    if (value === 'Todas') {
      filterMovies(null,null)
      setActive(false)
    }

    if (value === 'Más valoradas') {
      filterMovies(7, null)
      setActive(false)
    }

    if (value === 'Menos valoradas') {
      filterMovies(null,7)
      setActive(false)
    }
  }

  return (
    <header className="header">
      <figure className="header__figure">
        <img src={logoMovies} alt="logo movies" />
      </figure>

      <nav className="header__nav">
        <ul className="header__nav--list">
          <li onClick={handleFilterMovies}>Todas</li>
          <li onClick={handleFilterMovies}>Más valoradas</li>
          <li onClick={handleFilterMovies}>Menos valoradas</li>
        </ul>
      </nav>

      <form onSubmit={handleSubmitSearch} className="header__search">
        <label htmlFor="inputSearch"></label>
        <input name='inputSearch' id='inputSearch' type="text" placeholder="Busca tu película favorita" />
        <button>
          <img src={iconSearch} alt="icon-search" />
        </button>
      </form>
    </header>
  )
}