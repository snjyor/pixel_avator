# Pixel Avatar Library

[![中文](https://img.shields.io/badge/lang-中文-red.svg)](./README_ZH.md) [![English](https://img.shields.io/badge/lang-English-blue.svg)](./README.md)

> 🌟 **[Online Demo - View Effects](https://www.pixelnft.top/)** 
> 
> Click the link above to experience the pixel avatar generator directly, no installation required!

A React component library for generating customizable pixel avatars. Similar to shadcn/ui usage, can be directly imported and used.

## Features

- 🎨 **10+ Different Styles**: Hairstyles, facial expressions, clothing, accessories, etc.
- 🧬 **DNA Encoding System**: Use simple string format to control avatar appearance
- ⚡ **Lightweight & Efficient**: Canvas-based rendering with excellent performance
- 📱 **Responsive**: Support for arbitrary size scaling
- 🎯 **TypeScript Support**: Complete type definitions
- 🔧 **Easy to Use**: Use it like any other React component
- 🌈 **Background Colors**: Customizable background colors
- 📐 **Position Control**: Horizontal and vertical offset support

## Installation

```bash
npm install pixel-avatar-lib
# or
yarn add pixel-avatar-lib
# or
pnpm add pixel-avatar-lib
```

## Quick Start

```tsx
import { PixelAvatar } from 'pixel-avatar-lib'

function App() {
  return (
    <div>
      {/* Basic usage */}
      <PixelAvatar dna="0-1-2-3-4-5" />
      
      {/* Custom size */}
      <PixelAvatar dna="1-2-3-4-5-6" size={256} />
      
      {/* With background color and positioning */}
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

## API Reference

### PixelAvatar

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `dna` | `string` | - | **Required**. Avatar DNA encoding, format: `"0-1-2-3-4-5"` |
| `size` | `number` | `256` | Avatar display size (pixels) |
| `className` | `string` | - | CSS class name |
| `pixelSize` | `number` | `6` | Pixel scaling ratio |
| `style` | `React.CSSProperties` | - | Custom styles |
| `backgroundColor` | `string` | `"#ffffff"` | Background color |
| `offsetY` | `number` | `0` | Vertical offset (positive moves down, negative moves up) |
| `offsetX` | `number` | `-4` | Horizontal offset (positive moves right, negative moves left) |

### DNA Encoding Format

DNA string consists of 6 numbers separated by hyphens: `"hair-face-neck-clothing-hands-item"`

Each number ranges from 0-9, corresponding to:
- **hair**: Hairstyle (0-9)
- **face**: Facial expression (0-9)  
- **neck**: Neck accessories (0-9)
- **clothing**: Clothing style (0-9)
- **hands**: Hand style (0-9)
- **item**: Held items (0-9)

### Utility Functions

```tsx
import { 
  generateRandomDNAString, 
  parseDNA, 
  formatDNA, 
  isValidDNA 
} from 'pixel-avatar-lib'

// Generate random DNA string
const randomDNA = generateRandomDNAString() // "3-7-1-9-2-5"

// Parse DNA string
const dnaObj = parseDNA("0-1-2-3-4-5")
// { hair: 0, face: 1, neck: 2, clothing: 3, hands: 4, item: 5 }

// Format DNA object to string
const dnaString = formatDNA({ hair: 0, face: 1, neck: 2, clothing: 3, hands: 4, item: 5 })
// "0-1-2-3-4-5"

// Validate DNA string
const isValid = isValidDNA("0-1-2-3-4-5") // true
```

## Usage Examples

### Avatar Gallery

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

### User Profile

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
        <h3 className="font-bold">Username</h3>
        <p className="text-gray-600">DNA: {userDNA}</p>
      </div>
    </div>
  )
}
```

### Avatar Selector with Custom Background

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
          Generate New Avatar
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

## Style Customization

### CSS Classes

```css
/* Circular avatar */
.avatar-circle {
  border-radius: 50%;
}

/* With border */
.avatar-border {
  border: 2px solid #e5e7eb;
  border-radius: 8px;
}

/* Shadow effect */
.avatar-shadow {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### Inline Styles

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

## Advanced Features

### Custom Positioning

```tsx
// Fine-tune avatar position within the canvas
<PixelAvatar 
  dna="1-2-3-4-5-6"
  offsetX={-2}  // Move left by 2 pixels
  offsetY={1}   // Move down by 1 pixel
/>
```

### Different Backgrounds

```tsx
// Transparent background
<PixelAvatar dna="1-2-3-4-5-6" backgroundColor="transparent" />

// Colored backgrounds
<PixelAvatar dna="1-2-3-4-5-6" backgroundColor="#e6e6fa" />
<PixelAvatar dna="1-2-3-4-5-6" backgroundColor="#f0fff0" />
<PixelAvatar dna="1-2-3-4-5-6" backgroundColor="#ffe4e1" />
```

### High Resolution

```tsx
// Higher pixel density for crisp display
<PixelAvatar 
  dna="1-2-3-4-5-6"
  size={512}
  pixelSize={8}
/>
```

## Technical Details

### Canvas Optimization

- **Canvas Size**: Optimized 24x24 grid for better avatar-to-canvas ratio
- **Pixel Scaling**: Default 6x scaling for crisp display
- **Boundary Detection**: Smart clipping to prevent overflow
- **Performance**: Reduced drawing area for better rendering performance

### Default Parameters

```tsx
// These are the default values
<PixelAvatar 
  size={256}                    // Display size
  pixelSize={6}                 // Pixel scaling
  offsetY={0}                   // Vertical offset
  offsetX={-4}                  // Horizontal offset (optimized for centering)
  backgroundColor="#ffffff"     // White background
/>
```

## Development

```bash
# Clone repository
git clone https://github.com/your-username/pixel-avatar-lib.git
cd pixel-avatar-lib

# Install dependencies
npm install

# Development mode
npm run dev

# Build
npm run build

# Type checking
npm run type-check

# Run tests
npm test
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- ⚡ Lightweight: < 40KB bundled
- 🚀 Fast rendering: Canvas-based drawing
- 📱 Mobile optimized: Touch-friendly
- 🔧 Tree-shakable: Import only what you need

## License

MIT License

## Contributing

Welcome to submit Issues and Pull Requests!

### Development Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Changelog

### v1.0.0
- ✨ Initial release
- 🎨 10+ avatar styles
- 🧬 DNA encoding system
- 📱 Responsive design
- 🎯 TypeScript support
- 🌈 Background color customization
- 📐 Position control (offsetX, offsetY)
- ⚡ Canvas optimization (24x24 grid) 