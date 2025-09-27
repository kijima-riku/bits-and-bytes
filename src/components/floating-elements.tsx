'use client'

import { useEffect, useState } from 'react'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const newElements: FloatingElement[] = Array.from(
      { length: 6 },
      (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.1 + 0.05,
        speed: Math.random() * 20 + 10,
      }),
    )

    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full bg-primary/20 animate-pulse"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: element.opacity,
            animation: `float ${element.speed}s ease-in-out infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  )
}
