export type Pixel = [number, number, string] // [x, y, color]
export type PixelVariant = Pixel[]

export interface CharacterPart {
  variants: PixelVariant[]
}

export interface CharacterParts {
  hair: CharacterPart
  face: CharacterPart
  neck: CharacterPart
  clothing: CharacterPart
  hands: CharacterPart
  item: CharacterPart
}

export interface AvatarDNA {
  hair: number
  face: number
  neck: number
  clothing: number
  hands: number
  item: number
}

export interface PixelAvatarProps {
  /** 头像的基因编码字符串，格式：'0-1-2-3-4-5' */
  dna: string
  /** 头像尺寸（像素），默认 256 */
  size?: number
  /** CSS 类名 */
  className?: string
  /** 像素化缩放比例，默认 6 */
  pixelSize?: number
  /** 自定义样式 */
  style?: React.CSSProperties
  /** 背景颜色，默认白色 */
  backgroundColor?: string
  /** 垂直偏移量（像素），正值向下移动，负值向上移动，默认 0 */
  offsetY?: number
  /** 水平偏移量（像素），正值向右移动，负值向左移动，默认 -4 */
  offsetX?: number
} 