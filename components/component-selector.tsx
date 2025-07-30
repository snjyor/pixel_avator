"use client"

import { useEffect, useRef } from "react"
import { characterParts } from "@/lib/character-parts"

interface ComponentSelectorProps {
  partKey: keyof typeof characterParts
  selectedIndex: number
  onChange: (index: number) => void
}

export default function ComponentSelector({ partKey, selectedIndex, onChange }: ComponentSelectorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pixelSize = 2 // Small preview
  const canvasSize = 32 * pixelSize

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasSize, canvasSize)

    // Draw the component
    const partData = characterParts[partKey]
    const pixelData = partData.variants[selectedIndex]

    pixelData.forEach((pixel) => {
      const [x, y, color] = pixel
      ctx.fillStyle = color
      ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
    })
  }, [partKey, selectedIndex, canvasSize, pixelSize])

  return (
    <div
      className="cursor-pointer p-1 rounded-md"
      onClick={() => onChange((selectedIndex + 1) % 10)}
    >
      <div className="text-xs text-center mb-1 capitalize">{partKey}</div>
      <div className="bg-gray-900 rounded-md p-1 flex justify-center">
        <canvas
          ref={canvasRef}
          width={canvasSize}
          height={canvasSize}
          style={{
            width: "48px",
            height: "48px",
            imageRendering: "pixelated",
          }}
          className="bg-transparent"
        />
      </div>
    </div>
  )
}
