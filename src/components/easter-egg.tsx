"use client"

import { useEffect, useState } from "react"

const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
]

export function EasterEgg() {
    const [sequence, setSequence] = useState<string[]>([])
    const [showEasterEgg, setShowEasterEgg] = useState(false)

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            setSequence((prev) => {
                const newSequence = [...prev, event.code].slice(-konamiCode.length)

                if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
                    setShowEasterEgg(true)
                    setTimeout(() => setShowEasterEgg(false), 3000)
                    return []
                }

                return newSequence
            })
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    if (!showEasterEgg) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50 pointer-events-none">
            <div className="text-center space-y-4 animate-bounce">
                <div className="text-6xl">🎉</div>
                <div className="text-2xl font-bold text-primary">Konami Code Activated!</div>
                <div className="text-muted-foreground">You found the easter egg!</div>
            </div>
        </div>
    )
}
