# Pixel Avatar Library

[![中文](https://img.shields.io/badge/lang-中文-red.svg)](./README_ZH.md) [![English](https://img.shields.io/badge/lang-English-blue.svg)](./README.md)

> 🌟 **[在线演示 - 查看效果](https://www.pixelnft.top/)**
> 
> 点击上方链接可以直接体验像素头像生成器，无需安装任何依赖！

一个用于生成可定制像素头像的 React 组件库。类似 shadcn/ui 的使用方式，可以直接导入使用。

## 特性

- 🎨 **10+ 种不同样式**：发型、面部表情、服装、配饰等
- 🧬 **基因编码系统**：使用简单的字符串格式控制头像外观
- ⚡ **轻量高效**：基于 Canvas 渲染，性能优秀
- 📱 **响应式**：支持任意尺寸缩放
- 🎯 **TypeScript 支持**：完整的类型定义
- 🔧 **简单易用**：像使用其他 React 组件一样简单
- 🌈 **背景颜色自定义**：支持任意背景颜色
- 📐 **位置控制**：水平和垂直偏移支持

## 安装

```bash
npm install pixel-avatar-lib
# 或
yarn add pixel-avatar-lib
# 或
pnpm add pixel-avatar-lib
```

## 快速开始

```tsx
import { PixelAvatar } from 'pixel-avatar-lib'

function App() {
  return (
    <div>
      {/* 基础用法 */}
      <PixelAvatar dna="0-1-2-3-4-5" />
      
      {/* 自定义尺寸 */}
      <PixelAvatar dna="1-2-3-4-5-6" size={256} />
      
      {/* 带背景颜色和位置控制 */}
      <PixelAvatar 
        dna="2-3-4-5-6-7" 
        size={200}
        backgroundColor="#f0f8ff"
        offsetX={-2}
        offsetY={1}
        className="rounded-full border-2 border-gray-300"
      />
    </div>
  )
}
```

## API 参考

### PixelAvatar

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `dna` | `string` | - | **必需**。头像的基因编码，格式：`"0-1-2-3-4-5"` |
| `size` | `number` | `256` | 头像显示尺寸（像素） |
| `className` | `string` | - | CSS 类名 |
| `pixelSize` | `number` | `6` | 像素化缩放比例 |
| `style` | `React.CSSProperties` | - | 自定义样式 |
| `backgroundColor` | `string` | `"#ffffff"` | 背景颜色 |
| `offsetY` | `number` | `0` | 垂直偏移量（正值向下，负值向上） |
| `offsetX` | `number` | `-4` | 水平偏移量（正值向右，负值向左） |

### DNA 编码格式

DNA 字符串由 6 个数字组成，用连字符分隔：`"hair-face-neck-clothing-hands-item"`

每个数字范围是 0-9，分别对应：
- **hair**: 发型样式 (0-9)
- **face**: 面部表情 (0-9)  
- **neck**: 颈部配饰 (0-9)
- **clothing**: 服装样式 (0-9)
- **hands**: 手部样式 (0-9)
- **item**: 持有物品 (0-9)

### 工具函数

```tsx
import { 
  generateRandomDNAString, 
  parseDNA, 
  formatDNA, 
  isValidDNA 
} from 'pixel-avatar-lib'

// 生成随机 DNA 字符串
const randomDNA = generateRandomDNAString() // "3-7-1-9-2-5"

// 解析 DNA 字符串
const dnaObj = parseDNA("0-1-2-3-4-5")
// { hair: 0, face: 1, neck: 2, clothing: 3, hands: 4, item: 5 }

// 格式化 DNA 对象为字符串
const dnaString = formatDNA({ hair: 0, face: 1, neck: 2, clothing: 3, hands: 4, item: 5 })
// "0-1-2-3-4-5"

// 验证 DNA 字符串
const isValid = isValidDNA("0-1-2-3-4-5") // true
```

## 使用示例

### 头像画廊

```tsx
import { PixelAvatar, generateRandomDNAString } from 'pixel-avatar-lib'

function AvatarGallery() {
  const avatars = Array.from({ length: 12 }, () => generateRandomDNAString())
  
  return (
    <div className="grid grid-cols-4 gap-4">
      {avatars.map((dna, index) => (
        <PixelAvatar 
          key={index}
          dna={dna} 
          size={100}
          className="rounded-lg shadow-md"
        />
      ))}
    </div>
  )
}
```

### 用户资料

```tsx
import { PixelAvatar } from 'pixel-avatar-lib'

function UserProfile({ userDNA }: { userDNA: string }) {
  return (
    <div className="flex items-center space-x-4">
      <PixelAvatar 
        dna={userDNA} 
        size={64}
        className="rounded-full"
      />
      <div>
        <h3 className="font-bold">用户名</h3>
        <p className="text-gray-600">DNA: {userDNA}</p>
      </div>
    </div>
  )
}
```

### 带自定义背景的头像选择器

```tsx
import { useState } from 'react'
import { PixelAvatar, generateRandomDNAString } from 'pixel-avatar-lib'

function AvatarSelector() {
  const [selectedDNA, setSelectedDNA] = useState("0-0-0-0-0-0")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  
  const generateNew = () => {
    setSelectedDNA(generateRandomDNAString())
  }
  
  return (
    <div className="text-center">
      <PixelAvatar 
        dna={selectedDNA} 
        size={200} 
        backgroundColor={backgroundColor}
      />
      <br />
      <div className="mt-4 space-y-2">
        <button 
          onClick={generateNew}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          生成新头像
        </button>
        <br />
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="w-20 h-8 rounded"
        />
      </div>
    </div>
  )
}
```

## 样式定制

### CSS 类名

```css
/* 圆形头像 */
.avatar-circle {
  border-radius: 50%;
}

/* 带边框 */
.avatar-border {
  border: 2px solid #e5e7eb;
  border-radius: 8px;
}

/* 阴影效果 */
.avatar-shadow {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### 内联样式

```tsx
<PixelAvatar 
  dna="1-2-3-4-5-6"
  style={{
    borderRadius: '50%',
    border: '3px solid #3b82f6',
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
  }}
/>
```

## 高级功能

### 自定义位置

```tsx
// 精细调整头像在画布中的位置
<PixelAvatar 
  dna="1-2-3-4-5-6"
  offsetX={-2}  // 向左移动 2 像素
  offsetY={1}   // 向下移动 1 像素
/>
```

### 不同背景

```tsx
// 透明背景
<PixelAvatar dna="1-2-3-4-5-6" backgroundColor="transparent" />

// 彩色背景
<PixelAvatar dna="1-2-3-4-5-6" backgroundColor="#e6e6fa" />
<PixelAvatar dna="1-2-3-4-5-6" backgroundColor="#f0fff0" />
<PixelAvatar dna="1-2-3-4-5-6" backgroundColor="#ffe4e1" />
```

### 高分辨率

```tsx
// 更高的像素密度，显示更清晰
<PixelAvatar 
  dna="1-2-3-4-5-6"
  size={512}
  pixelSize={8}
/>
```

## 技术细节

### Canvas 优化

- **画布尺寸**: 优化的 24x24 网格，提升头像占画布比例
- **像素缩放**: 默认 6 倍缩放，显示清晰
- **边界检测**: 智能裁剪，防止溢出
- **性能优化**: 减少绘制区域，提升渲染性能

### 默认参数

```tsx
// 这些是默认值
<PixelAvatar 
  size={256}                    // 显示尺寸
  pixelSize={6}                 // 像素缩放
  offsetY={0}                   // 垂直偏移
  offsetX={-4}                  // 水平偏移（优化居中）
  backgroundColor="#ffffff"     // 白色背景
/>
```

## 开发

```bash
# 克隆仓库
git clone https://github.com/your-username/pixel-avatar-lib.git
cd pixel-avatar-lib

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 类型检查
npm run type-check

# 运行测试
npm test
```

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 性能

- ⚡ 轻量级: < 40KB 打包后
- 🚀 快速渲染: 基于 Canvas 绘制
- 📱 移动端优化: 触控友好
- 🔧 Tree-shakable: 按需导入

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

### 开发指南

1. Fork 仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 更新日志

### v1.0.0
- ✨ 初始版本发布
- 🎨 10+ 头像样式
- 🧬 DNA 编码系统
- 📱 响应式设计
- 🎯 TypeScript 支持
- 🌈 背景颜色自定义
- 📐 位置控制 (offsetX, offsetY)
- ⚡ Canvas 优化 (24x24 网格)
