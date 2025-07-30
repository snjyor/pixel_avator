import PixelArtGenerator from "@/components/pixel-art-generator"
import { Metadata } from "next"
import { getAllStructuredData } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Pixel Art NFT Generator - Create Unique 8-bit Characters Online",
  description: "Generate stunning pixel art NFT characters with 1 million unique combinations. Customize hair, face, clothing & more. Free download in high resolution. Perfect for NFT projects, game development, and digital art.",
  openGraph: {
    title: "Pixel Art NFT Generator - Create Unique 8-bit Characters",
    description: "Generate stunning pixel art NFT characters with 1 million unique combinations. Free online tool with instant download.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pixel Art NFT Generator - Create unique 8-bit characters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Art NFT Generator - Create Unique 8-bit Characters",
    description: "Generate stunning pixel art NFT characters with 1 million unique combinations. Free online tool!",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://pixelnft.top",
  },
}

export default function Home() {
  const allStructuredData = getAllStructuredData()
  
  return (
    <>
      {/* Multiple JSON-LD Structured Data Scripts */}
      {allStructuredData.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      <main className="min-h-screen p-4 md:p-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-green-400">
              Pixel Art NFT Generator
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Create unique pixel art characters by mixing and matching different components.
            </p>
            <p className="text-md text-gray-400">
              <strong>1,000,000</strong> possible combinations • <strong>Free</strong> to use • <strong>Instant</strong> download
            </p>
          </header>

          <section aria-labelledby="generator-heading">
            <h2 id="generator-heading" className="sr-only">
              Pixel Art Character Generator
            </h2>
            <PixelArtGenerator />
          </section>
          
          <footer className="text-center mt-12">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-400 mb-2">About This Tool</h3>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                Our pixel art generator lets you create stunning 8-bit style NFT characters perfect for blockchain projects, 
                game development, or digital art collections. Each character is composed of 6 customizable parts with 10 
                variations each, giving you endless creative possibilities.
              </p>
            </div>

            {/* 5H2W SEO Content */}
            <div className="mb-8 max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-green-400 mb-4 text-center">Complete Guide to Pixel Art NFT Creation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">🎯 What is Pixel Art NFT Generator?</h4>
                    <p>A free online tool that creates unique 8-bit style NFT characters with 1,000,000 possible combinations. Generate high-quality pixel art for NFT projects, game development, digital art collections, and social media avatars without any design experience required.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">👥 Who Can Use This Generator?</h4>
                    <p>Perfect for NFT creators, game developers, digital artists, blockchain enthusiasts, content creators, indie game studios, and anyone looking to create unique pixel art characters for personal or commercial projects.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">📍 Where Can You Use These Characters?</h4>
                    <p>Use your generated pixel art in NFT marketplaces (OpenSea, Rarible), video games, mobile apps, social media profiles, Discord servers, Telegram stickers, digital art collections, and blockchain projects.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">⏰ When to Use This Tool?</h4>
                    <p>Ideal for rapid prototyping, NFT collection launches, game development sprints, digital art experiments, social media content creation, and whenever you need quick, professional-quality pixel art characters.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">💡 Why Choose Our Pixel Art Generator?</h4>
                    <p>Completely free, no registration required, instant high-resolution downloads, professional quality output, mobile-friendly interface, and unlimited usage. Save time and money while creating unique characters for your projects.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">🔧 How Does It Work?</h4>
                    <p>Simply customize 6 character parts (hair, face, neck, clothing, hands, items) with 10 style options each. Use the randomize button for instant inspiration or manually select each component. Download your creation in high resolution (128px-512px) instantly.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">📊 How Many Combinations Available?</h4>
                    <p>With 10 variations for each of the 6 customizable parts, you can create exactly 1,000,000 unique character combinations. Each character has a unique DNA code for easy identification and collection management.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">💰 How Much Does It Cost?</h4>
                    <p>Absolutely free! No hidden fees, no subscription required, no watermarks, and no usage limits. Create unlimited pixel art characters and download them in high resolution without any restrictions.</p>
                  </div>
                </div>
              </div>

              {/* Additional SEO Keywords Section */}
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h4 className="text-sm font-semibold text-green-300 mb-2">Popular Use Cases & Keywords:</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  NFT character generator, 8-bit avatar creator, pixel art maker, retro game sprites, blockchain art, 
                  crypto collectibles, digital character design, pixelated avatars, 16-bit style graphics, indie game assets, 
                  procedural character generation, randomized avatars, downloadable pixel art, NFT collection tools, 
                  Web3 character creator, decentralized art generator, custom pixel sprites, retro gaming art, 
                  digital collectible maker, automated character design, pixel art NFT collection, 8-bit character builder
                </p>
              </div>
            </div>

            <div className="text-xs text-gray-500 border-t border-gray-700 pt-4">
              <p>&copy; 2025 Pixel Art NFT Generator. All rights reserved.</p>
              <p className="mt-1">
                Made with ❤️ for the digital art community
              </p>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
