import iconPlay from '../icons/icon-play.svg'
import iconPlus from '../icons/icon-plus.svg'
import '../styles/Slide.css'
const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

export function Slide ({movies}) {
  const firstThreeMovies = movies.slice(0,3)
  return (
    <>
      {
        firstThreeMovies.map(item => (
          <div className="slide" style={{backgroundImage: `url(${URL_IMAGE}${item.backdrop_path})`}} key={item.id}>
            <div className="buttons">
              <button>
                <img src={iconPlay} alt="icon-play" />
                <span>VER AHORA</span>
              </button>
              <button>
                <img src={iconPlus} alt="icon-plus" />
                <span>VER DESPUÉS</span>
              </button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export function Dots ({movies, currentIndex, handleDotClick}) {
  const firstThreeMovies = movies.slice(0,3)
  return (
    <>
      <div className="dots">
        {firstThreeMovies.map((dot, index)=> (
          <div key={index}>
            <input type="radio" name="dot" id={`dot${index + 1}`} checked={currentIndex === index} onChange={()=> handleDotClick(index)} />
            <label htmlFor={`dot${index + 1}`}></label>
          </div>
        ))}
      </div>
    </>
  )
}