import { useEffect, useRef } from "react";

export function useIntersectionObserver (callback) {
  const observer = useRef(null)

  useEffect(()=>{
    observer.current = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting) {
        callback()
      }
    })

    return () => observer.current.disconnect()
  },[callback])

  return observer
}