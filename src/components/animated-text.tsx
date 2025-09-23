'use client'

import { useEffect, useState } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50 + delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, delay])

  useEffect(() => {
    if (currentIndex === text.length && text.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText('')
        setCurrentIndex(0)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
}
