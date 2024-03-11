import { useState } from "react"
import { Slide, Dots } from "./Slide"
import '../styles/Slider.css'


export function Slider ({movies}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleDotClick = (index) => {
    setCurrentIndex(index)
  }
  return (
    <section className="slider-container">
      <article className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <Slide movies={movies}/>
        </div>
      </article>
      <Dots
        movies={movies}
        currentIndex={currentIndex}
        handleDotClick={handleDotClick}
      />
    </section>
  )
}