import { useEffect, useState } from "react";


export function useSlider ({movies}) {
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

  return {currentIndex, intervalId, setCurrentIndex, setIntervalId, firstThreeMovies}
}