import { Buttons } from './Buttons'
import '../styles/Slide.css'
const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

export function Slide ({firstThreeMovies}) {
  return (
    <>
      {
        firstThreeMovies.map(item => (
          <div className="slide" style={{backgroundImage: `url(${URL_IMAGE}${item.backdrop_path})`}} key={item.id}>
            <Buttons/>
          </div>
        ))
      }
    </>
  )
}

export function Dots ({firstThreeMovies, currentIndex, handleDotClick}) {
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