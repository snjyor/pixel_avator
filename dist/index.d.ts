import * as react from 'react';

type Pixel = [number, number, string];
type PixelVariant = Pixel[];
interface CharacterPart {
    variants: PixelVariant[];
}
interface CharacterParts {
    hair: CharacterPart;
    face: CharacterPart;
    neck: CharacterPart;
    clothing: CharacterPart;
    hands: CharacterPart;
    item: CharacterPart;
}
interface AvatarDNA {
    hair: number;
    face: number;
    neck: number;
    clothing: number;
    hands: number;
    item: number;
}
interface PixelAvatarProps {
    /** 头像的基因编码字符串，格式：'0-1-2-3-4-5' */
    dna: string;
    /** 头像尺寸（像素），默认 256 */
    size?: number;
    /** CSS 类名 */
    className?: string;
    /** 像素化缩放比例，默认 6 */
    pixelSize?: number;
    /** 自定义样式 */
    style?: React.CSSProperties;
    /** 背景颜色，默认白色 */
    backgroundColor?: string;
    /** 垂直偏移量（像素），正值向下移动，负值向上移动，默认 0 */
    offsetY?: number;
    /** 水平偏移量（像素），正值向右移动，负值向左移动，默认 -4 */
    offsetX?: number;
}

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
declare const PixelAvatar: react.ForwardRefExoticComponent<PixelAvatarProps & react.RefAttributes<HTMLCanvasElement>>;

/**
 * 生成随机的头像DNA
 * @returns 随机生成的头像DNA对象
 */
declare function generateRandomDNA(): AvatarDNA;
/**
 * 解析DNA字符串为对象
 * @param dnaString - DNA字符串，格式："0-1-2-3-4-5"
 * @returns 解析后的DNA对象
 * @throws {Error} 当DNA字符串格式无效时抛出错误
 */
declare function parseDNA(dnaString: string): AvatarDNA;
/**
 * 将DNA对象格式化为字符串
 * @param dna - DNA对象
 * @returns 格式化的DNA字符串
 */
declare function formatDNA(dna: AvatarDNA): string;
/**
 * 验证DNA字符串是否有效
 * @param dnaString - 要验证的DNA字符串
 * @returns 如果有效返回true，否则返回false
 */
declare function isValidDNA(dnaString: string): boolean;
/**
 * 生成随机DNA字符串
 * @returns 随机生成的DNA字符串
 */
declare function generateRandomDNAString(): string;

export { type AvatarDNA, type CharacterParts, PixelAvatar, type PixelAvatarProps, formatDNA, generateRandomDNA, generateRandomDNAString, isValidDNA, parseDNA };
