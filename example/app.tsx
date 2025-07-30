import React, { useState } from 'react'
import { PixelAvatar, generateRandomDNAString, isValidDNA } from 'pixel-avatar-lib'

function App() {
  const [dna, setDna] = useState('0-1-2-3-4-5')
  const [customDna, setCustomDna] = useState('')

  const handleRandomize = () => {
    const randomDna = generateRandomDNAString()
    setDna(randomDna)
  }

  const handleCustomDnaChange = (value: string) => {
    setCustomDna(value)
    if (isValidDNA(value)) {
      setDna(value)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🎨 Pixel Avatar Library 示例</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>当前头像</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <PixelAvatar 
            dna={dna} 
            size={128}
            className="rounded-avatar"
            style={{ 
              borderRadius: '50%',
              border: '3px solid #3b82f6',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
            }}
          />
          <div>
            <p><strong>DNA:</strong> <code>{dna}</code></p>
            <button onClick={handleRandomize} style={{
              padding: '8px 16px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              🎲 随机生成
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>自定义 DNA</h2>
        <input
          type="text"
          value={customDna}
          onChange={(e) => handleCustomDnaChange(e.target.value)}
          placeholder="输入 DNA 字符串 (例如: 1-2-3-4-5-6)"
          style={{
            padding: '8px',
            width: '200px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginRight: '10px'
          }}
        />
        <span style={{ 
          color: customDna && !isValidDNA(customDna) ? 'red' : 'green' 
        }}>
          {customDna && (isValidDNA(customDna) ? '✅ 有效' : '❌ 无效')}
        </span>
      </div>

      <div>
        <h2>头像画廊</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '15px',
          marginTop: '15px'
        }}>
          {[
            { dna: '0-0-0-0-0-0', name: '基础头像' },
            { dna: '1-1-1-1-1-1', name: '金发笑脸' },
            { dna: '2-2-2-2-2-2', name: '深色皮肤' },
            { dna: '3-0-0-0-0-3', name: '红头巾+盾牌' },
            { dna: '4-0-2-1-1-4', name: '绿莫西干+法杖' },
            { dna: '1-3-1-2-2-2', name: '金发西装+剑' },
          ].map((avatar, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              <PixelAvatar 
                dna={avatar.dna} 
                size={80}
                style={{ borderRadius: '50%' }}
              />
              <p style={{ fontSize: '12px', margin: '8px 0 4px', fontWeight: 'bold' }}>
                {avatar.name}
              </p>
              <p style={{ fontSize: '10px', fontFamily: 'monospace', color: '#666' }}>
                {avatar.dna}
              </p>
              <button 
                onClick={() => setDna(avatar.dna)}
                style={{
                  fontSize: '10px',
                  padding: '4px 8px',
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                使用此头像
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
        <h3>💡 使用提示</h3>
        <ul style={{ fontSize: '14px', lineHeight: '1.6' }}>
          <li>DNA 格式：<code>hair-face-neck-clothing-hands-item</code></li>
          <li>每个数字范围是 0-9，对应不同的样式变体</li>
          <li>可以传入 <code>size</code> 属性控制头像大小</li>
          <li>支持 <code>className</code> 和 <code>style</code> 属性进行样式定制</li>
          <li>使用工具函数 <code>generateRandomDNAString()</code> 生成随机头像</li>
        </ul>
      </div>
    </div>
  )
}

export default App 