import { useEffect, useState } from "react"
import { Slide, Dots } from "./Slide"
import '../styles/Slider.css'


export function Slider ({movies}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [intervalId, setIntervalId] = useState(null)

  const firstThreeMovies = movies.slice(0,3)

  // Mover el slider automaticamente
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex(prevState => (prevState + 1) % firstThreeMovies.length )
    },3000);

    setIntervalId(interval)

    return () => clearInterval(interval)

  },[firstThreeMovies.length])

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }

  // Manejadores de evento para detener el intervalo

  const handleMouseEnter = () => {
    clearInterval(intervalId)
  }

  const handleMouseLeave = () => {
    const interval = setInterval(()=>{
      setCurrentIndex(prevState => (prevState + 1) % firstThreeMovies.length)
    },3000)

    setIntervalId(interval)
  }
  return (
    <section className="slider-container">
      <article className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Slide firstThreeMovies={firstThreeMovies}/>
        </div>
      </article>
      <Dots
        firstThreeMovies={firstThreeMovies}
        currentIndex={currentIndex}
        handleDotClick={handleDotClick}
      />
    </section>
  )
}