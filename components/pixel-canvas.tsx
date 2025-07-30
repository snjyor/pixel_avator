"use client"

import type React from "react"

import { forwardRef, useEffect } from "react"
import { characterParts } from "@/lib/character-parts"

interface PixelCanvasProps {
  selectedParts: {
    hair: number
    face: number
    neck: number
    clothing: number
    hands: number
    item: number
  }
  pixelSize: number
}

const PixelCanvas = forwardRef<HTMLCanvasElement, PixelCanvasProps>(({ selectedParts, pixelSize }, ref) => {
  const canvasSize = 32 * pixelSize // 32x32 pixel art
  const displaySize = 320 // Fixed display size

  // Draw the character on the canvas
  useEffect(() => {
    const canvas = ref as React.MutableRefObject<HTMLCanvasElement>
    if (!canvas.current) return

    const ctx = canvas.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasSize, canvasSize)

    // Draw each part in order (back to front)
    const drawOrder = ["neck", "clothing", "hands", "hair", "face", "item"]

    drawOrder.forEach((partKey) => {
      const partIndex = selectedParts[partKey as keyof typeof selectedParts]
      const partData = characterParts[partKey as keyof typeof characterParts]
      const pixelData = partData.variants[partIndex]

      // Draw pixels for this part
      pixelData.forEach((pixel) => {
        const [x, y, color] = pixel
        ctx.fillStyle = color
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize)
      })
    })
  }, [selectedParts, pixelSize, canvasSize, ref])

  return (
    <canvas
      ref={ref}
      width={canvasSize}
      height={canvasSize}
      style={{
        width: `${displaySize}px`,
        height: `${displaySize}px`,
        imageRendering: "pixelated",
      }}
      className="bg-transparent"
    />
  )
})

PixelCanvas.displayName = "PixelCanvas"

export default PixelCanvas
