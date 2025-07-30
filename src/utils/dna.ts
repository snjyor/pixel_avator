import type { AvatarDNA } from '../types'

/**
 * 生成随机的头像DNA
 * @returns 随机生成的头像DNA对象
 */
export function generateRandomDNA(): AvatarDNA {
  return {
    hair: Math.floor(Math.random() * 10),
    face: Math.floor(Math.random() * 10),
    neck: Math.floor(Math.random() * 10),
    clothing: Math.floor(Math.random() * 10),
    hands: Math.floor(Math.random() * 10),
    item: Math.floor(Math.random() * 10),
  }
}

/**
 * 解析DNA字符串为对象
 * @param dnaString - DNA字符串，格式："0-1-2-3-4-5"
 * @returns 解析后的DNA对象
 * @throws {Error} 当DNA字符串格式无效时抛出错误
 */
export function parseDNA(dnaString: string): AvatarDNA {
  if (!dnaString || typeof dnaString !== 'string') {
    throw new Error('DNA string is required and must be a string')
  }

  const parts = dnaString.split('-')
  
  if (parts.length !== 6) {
    throw new Error('DNA string must contain exactly 6 parts separated by hyphens')
  }

  const [hair, face, neck, clothing, hands, item] = parts.map(part => {
    const num = parseInt(part, 10)
    if (isNaN(num) || num < 0 || num > 9) {
      throw new Error(`Invalid DNA part: ${part}. Each part must be a number between 0-9`)
    }
    return num
  })

  return { hair, face, neck, clothing, hands, item }
}

/**
 * 将DNA对象格式化为字符串
 * @param dna - DNA对象
 * @returns 格式化的DNA字符串
 */
export function formatDNA(dna: AvatarDNA): string {
  return `${dna.hair}-${dna.face}-${dna.neck}-${dna.clothing}-${dna.hands}-${dna.item}`
}

/**
 * 验证DNA字符串是否有效
 * @param dnaString - 要验证的DNA字符串
 * @returns 如果有效返回true，否则返回false
 */
export function isValidDNA(dnaString: string): boolean {
  try {
    parseDNA(dnaString)
    return true
  } catch {
    return false
  }
}

/**
 * 生成随机DNA字符串
 * @returns 随机生成的DNA字符串
 */
export function generateRandomDNAString(): string {
  return formatDNA(generateRandomDNA())
} 