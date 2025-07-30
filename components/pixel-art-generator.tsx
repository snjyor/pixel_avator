"use client"

import { useState, useEffect, useRef } from "react"
import { Download, Shuffle, RotateCcw, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PixelCanvas from "@/components/pixel-canvas"
import ComponentSelector from "@/components/component-selector"
import { characterParts } from "@/lib/character-parts"
import { trackNFTDownload, trackRandomize, trackCustomization } from "@/lib/analytics"

// Twitter/X Icon SVG Component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function PixelArtGenerator() {
  const [selectedParts, setSelectedParts] = useState({
    hair: 0,
    face: 0,
    neck: 0,
    clothing: 0,
    hands: 0,
    item: 0,
  })

  const [downloadSize, setDownloadSize] = useState(8)
  const [activeTab, setActiveTab] = useState("preview")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Generate a random character
  const randomizeCharacter = () => {
    const newParts = {
      hair: Math.floor(Math.random() * 10),
      face: Math.floor(Math.random() * 10),
      neck: Math.floor(Math.random() * 10),
      clothing: Math.floor(Math.random() * 10),
      hands: Math.floor(Math.random() * 10),
      item: Math.floor(Math.random() * 10),
    }
    setSelectedParts(newParts)
    
    // Track randomize event
    trackRandomize()
  }

  // Reset to default character
  const resetCharacter = () => {
    setSelectedParts({
      hair: 0,
      face: 0,
      neck: 0,
      clothing: 0,
      hands: 0,
      item: 0,
    })
  }

  // Download the generated NFT
  const downloadNFT = () => {
    if (!canvasRef.current) return

    const characterDNA = `${selectedParts.hair}-${selectedParts.face}-${selectedParts.neck}-${selectedParts.clothing}-${selectedParts.hands}-${selectedParts.item}`
    
    const link = document.createElement("a")
    link.download = `pixel-nft-${Date.now()}.png`
    link.href = canvasRef.current.toDataURL("image/png")
    link.click()
    
    // Track download event
    trackNFTDownload(characterDNA)
  }

  // Handle part customization with analytics
  const handlePartChange = (partKey: string, value: number) => {
    setSelectedParts((prev) => ({
      ...prev,
      [partKey]: value,
    }))
    
    // Track customization event
    trackCustomization(partKey, value)
  }

  // Initialize with a random character
  useEffect(() => {
    randomizeCharacter()
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left panel - Controls */}
      <div className="lg:col-span-1 bg-gray-800 p-4 rounded-lg">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-green-400">Download Image Size</h2>
          <div className="flex items-center gap-4">
            <Slider
              value={[downloadSize]}
              min={4}
              max={16}
              step={1}
              onValueChange={(value) => setDownloadSize(value[0])}
              className="flex-1 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            />
            <span className="text-sm font-mono bg-gray-700 px-2 py-1 rounded">
              {downloadSize * 32}×{downloadSize * 32}px
            </span>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full mb-4">
            <TabsTrigger value="preview" className="flex-1 cursor-pointer">
              Preview
            </TabsTrigger>
            <TabsTrigger value="customize" className="flex-1 cursor-pointer">
              Customize
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="space-y-4">
            <div className="flex gap-2">
              <Button 
                onClick={randomizeCharacter} 
                className="flex-1 bg-green-600 hover:bg-green-700 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Shuffle className="mr-2 h-4 w-4" />
                Randomize
              </Button>
              <Button 
                onClick={resetCharacter} 
                variant="outline" 
                className="flex-1 text-black hover:bg-gray-100 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </div>

            <Button 
              onClick={downloadNFT} 
              className="w-full bg-purple-600 hover:bg-purple-700 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Download NFT
            </Button>

            <div className="mt-4 p-3 bg-gray-700 rounded-md text-sm">
              <p className="font-mono text-xs text-gray-300 mb-2">Character DNA:</p>
              <code className="text-green-400 break-all">
                {`${selectedParts.hair}-${selectedParts.face}-${selectedParts.neck}-${selectedParts.clothing}-${selectedParts.hands}-${selectedParts.item}`}
              </code>
            </div>
          </TabsContent>

          <TabsContent value="customize" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(characterParts).map(([partKey]) => (
                <div key={partKey} className="mb-2">
                  <h3 className="text-md font-semibold mb-2 capitalize text-green-400">{partKey}</h3>
                  <Select
                    value={selectedParts[partKey as keyof typeof selectedParts].toString()}
                    onValueChange={(value) => {
                      handlePartChange(partKey, Number.parseInt(value))
                    }}
                  >
                    <SelectTrigger className="hover:bg-gray-700 transition-colors duration-200">
                      <SelectValue placeholder={`Select ${partKey} style`} />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => (
                        <SelectItem 
                          key={i} 
                          value={i.toString()}
                          className="hover:bg-gray-600 transition-colors duration-200"
                        >
                          Style {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Social Media Links */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-400 mb-3 text-center">Connect with us:</p>
          <div className="flex justify-center items-center gap-4">
            <a 
              href="https://twitter.com/intent/follow?screen_name=jinghui30" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-200 hover:scale-110 group text-xs"
              aria-label="Follow us on Twitter"
            >
              <XIcon className="w-4 h-4 group-hover:animate-pulse" />
              <span className="font-medium">Twitter</span>
            </a>
            <a 
              href="https://github.com/snjyor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-all duration-200 hover:scale-110 group text-xs"
              aria-label="View source code on GitHub"
            >
              <Github className="w-4 h-4 group-hover:animate-pulse" />
              <span className="font-medium">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right panel - Canvas preview */}
      <div className="lg:col-span-2">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4 text-green-400">NFT Preview</h2>
          <div className="flex justify-center">
            <div className="relative bg-white p-4 rounded-lg border-2 border-gray-700">
              <PixelCanvas ref={canvasRef} selectedParts={selectedParts} pixelSize={downloadSize} />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-2">
            {Object.entries(characterParts).map(([partKey]) => (
              <ComponentSelector
                key={partKey}
                partKey={partKey as keyof typeof selectedParts}
                selectedIndex={selectedParts[partKey as keyof typeof selectedParts]}
                onChange={(index) => {
                  handlePartChange(partKey, index)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
