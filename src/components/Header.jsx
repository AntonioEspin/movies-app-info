import logoMovies from '../images/logo-blockBuster.svg'
import iconSearch from '../icons/icon-search.svg'
import '../styles/Header.css'

export function Header ({setSearch, moviesSearch, moviesByPopularity, moviesTrending}) {

  const handleSubmitSearch = (e) => {
    e.preventDefault()
    const {elements} = e.currentTarget
    const item = elements.namedItem('inputSearch')
    setSearch(item.value)
    moviesSearch(item.value)
    item.value = ''
  }

  const handleNavList = (e) => {
    const valueLIst = e.target.innerText
    let popularity

    if(valueLIst === 'Más valoradas') {
      popularity = 'popularity.desc'
      moviesByPopularity(popularity)
      return
    }

    if(valueLIst === 'Menos valoradas') {
      popularity = 'popularity.asc'
      moviesByPopularity(popularity)
      return
    }

    return moviesTrending()

  }

  return (
    <header className="header">
      <figure className="header__figure">
        <img src={logoMovies} alt="logo movies" />
      </figure>

      <nav className="header__nav">
        <ul className="header__nav--list">
          <li onClick={handleNavList}>Todas</li>
          <li onClick={handleNavList}>Más valoradas</li>
          <li onClick={handleNavList}>Menos valoradas</li>
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