"use client"

import { forwardRef, useEffect, useRef, useMemo } from "react"
import type { PixelAvatarProps } from "../types"
import { characterParts } from "../data/character-parts"
import { parseDNA } from "../utils/dna"

/**
 * PixelAvatar - 像素头像组件
 * 
 * @example
 * ```tsx
 * import { PixelAvatar } from 'pixel-avatar-lib'
 * 
 * function App() {
 *   return (
 *     <PixelAvatar 
 *       dna="0-1-2-3-4-5" 
 *       size={128}
 *       backgroundColor="#f0f0f0"
 *       offsetY={0}
 *       offsetX={-4}
 *       className="my-avatar"
 *     />
 *   )
 * }
 * ```
 */
export const PixelAvatar = forwardRef<HTMLCanvasElement, PixelAvatarProps>(
  ({ 
    dna, 
    size = 256, 
    className, 
    pixelSize = 6, // 增加默认像素尺寸，让头像更大
    style,
    backgroundColor = "#ffffff",
    offsetY = 0,
    offsetX = -3.5 // 向左移动头像以在24x24画布中水平居中
  }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    
    // 解析DNA字符串
    const selectedParts = useMemo(() => {
      try {
        return parseDNA(dna)
      } catch (error) {
        console.warn('Invalid DNA string, using default avatar:', error)
        return { hair: 0, face: 0, neck: 0, clothing: 0, hands: 0, item: 0 }
      }
    }, [dna])

    // 计算画布尺寸
    const canvasSize = useMemo(() => 24 * pixelSize, [pixelSize])

    // 绘制头像
    useEffect(() => {
      const canvas = ref ? (ref as React.MutableRefObject<HTMLCanvasElement>).current : canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // 清空画布并设置背景颜色
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvasSize, canvasSize)

      // 绘制顺序：从后到前
      const drawOrder = ["neck", "clothing", "hands", "hair", "face", "item"] as const

      drawOrder.forEach((partKey) => {
        const partIndex = selectedParts[partKey]
        const partData = characterParts[partKey]
        
        // 确保索引有效
        if (partIndex >= 0 && partIndex < partData.variants.length) {
          const pixelData = partData.variants[partIndex]

          // 绘制该部分的像素，应用水平和垂直偏移
          pixelData.forEach((pixel: [number, number, string]) => {
            const [x, y, color] = pixel
            // 应用偏移并只绘制在24x24画布范围内的像素
            const adjustedX = x + offsetX
            const adjustedY = y + offsetY
            if (adjustedX >= 0 && adjustedX < 24 && adjustedY >= 0 && adjustedY < 24) {
              ctx.fillStyle = color
              ctx.fillRect(
                adjustedX * pixelSize, 
                adjustedY * pixelSize,
                pixelSize, 
                pixelSize
              )
            }
          })
        }
      })
    }, [selectedParts, pixelSize, canvasSize, backgroundColor, offsetY, offsetX, ref])

    return (
      <canvas
        ref={ref || canvasRef}
        width={canvasSize}
        height={canvasSize}
        className={className}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          imageRendering: "pixelated",
          backgroundColor, // 设置CSS背景颜色作为后备
          ...style,
        }}
      />
    )
  }
)

PixelAvatar.displayName = "PixelAvatar" 