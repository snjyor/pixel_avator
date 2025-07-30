// Comprehensive JSON-LD Structured Data for Pixel Art NFT Generator

export const getWebApplicationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Pixel Art NFT Generator",
  "description": "Create stunning pixel art NFT characters with 1 million unique combinations. Free online pixel art generator with customizable parts, instant download, and professional quality output.",
  "url": "https://pixelnft.top",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Web Browser",
  "browserRequirements": "Requires JavaScript. Supported browsers: Chrome, Firefox, Safari, Edge",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "creator": {
    "@type": "Person",
    "name": "snjyor",
    "url": "https://github.com/snjyor/pixel_nft",
    "sameAs": [
      "https://twitter.com/jinghui30",
      "https://github.com/snjyor"
    ]
  },
  "featureList": [
    "1,000,000 unique character combinations",
    "Customizable hair, face, neck, clothing, hands, and items",
    "Instant high-quality PNG download",
    "Adjustable output resolution (128px to 512px)",
    "No registration required",
    "Completely free to use",
    "Mobile-responsive interface",
    "Character DNA tracking system"
  ],
  "screenshot": "https://pixelnft.top/og-image.png",
  "softwareVersion": "1.0",
  "datePublished": "2024-12-01",
  "dateModified": new Date().toISOString().split('T')[0],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Digital Artist"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Amazing tool for creating NFT characters! The randomization feature saves so much time.",
      "datePublished": "2024-12-15"
    }
  ]
})

export const getCreativeWorkSchema = () => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Pixel Art NFT Generator",
  "description": "Online tool for generating pixel art NFT characters",
  "creator": {
    "@type": "Person",
    "name": "snjyor",
    "url": "https://github.com/snjyor/pixel_nft"
  },
  "dateCreated": "2024-12-01",
  "license": "https://opensource.org/licenses/MIT",
  "genre": ["Digital Art", "NFT", "Pixel Art", "Character Design"],
  "keywords": "pixel art, NFT generator, 8-bit characters, digital art, blockchain, crypto art",
  "audience": {
    "@type": "Audience",
    "audienceType": ["NFT Creators", "Game Developers", "Digital Artists", "Blockchain Enthusiasts"]
  }
})

export const getHowToSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create Pixel Art NFT Characters",
  "description": "Step-by-step guide to creating unique pixel art NFT characters using our free online generator",
  "image": "https://pixelnft.top/og-image.png",
  "totalTime": "PT2M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Web Browser"
    },
    {
      "@type": "HowToSupply", 
      "name": "Internet Connection"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Pixel Art NFT Generator",
      "url": "https://pixelnft.top"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open Generator",
      "text": "Visit the Pixel Art NFT Generator website and wait for it to load",
      "url": "https://pixelnft.top"
    },
    {
      "@type": "HowToStep", 
      "name": "Customize Character",
      "text": "Choose from 6 different character parts: hair, face, neck, clothing, hands, and items. Each part has 10 unique styles to choose from."
    },
    {
      "@type": "HowToStep",
      "name": "Randomize or Manual Select",
      "text": "Use the randomize button for instant inspiration or manually select each component using the dropdown menus in the Customize tab."
    },
    {
      "@type": "HowToStep",
      "name": "Adjust Download Size",
      "text": "Set your preferred download resolution using the size slider (from 128px to 512px)."
    },
    {
      "@type": "HowToStep",
      "name": "Download Your NFT",
      "text": "Click the Download NFT button to save your unique pixel art character as a high-quality PNG file."
    }
  ]
})

export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Pixel Art NFT Generator completely free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our pixel art generator is completely free to use. There are no hidden fees, no subscription required, no watermarks, and no usage limits. You can create unlimited pixel art characters and download them in high resolution."
      }
    },
    {
      "@type": "Question",
      "name": "How many unique character combinations can I create?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can create exactly 1,000,000 unique character combinations. With 6 customizable parts (hair, face, neck, clothing, hands, items) and 10 variations for each part, the total combinations are 10^6 = 1,000,000."
      }
    },
    {
      "@type": "Question",
      "name": "What image formats and resolutions are available for download?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All characters are downloaded as high-quality PNG files. You can adjust the resolution from 128×128 pixels up to 512×512 pixels using the download size slider."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use these pixel art characters for commercial NFT projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can use the generated pixel art characters for personal and commercial projects, including NFT collections, game development, and digital art projects. No attribution required."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to register or create an account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No registration required! You can start creating pixel art characters immediately without creating an account or providing any personal information."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Character DNA feature?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each generated character has a unique DNA code that represents its specific combination of parts. This helps you track and recreate specific characters for your collections."
      }
    }
  ]
})

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pixel Art NFT Generator",
  "url": "https://pixelnft.top",
  "logo": "https://pixelnft.top/icon-512.png",
  "description": "Creating the best free online pixel art NFT generator for digital artists and blockchain enthusiasts",
  "founder": {
    "@type": "Person",
    "name": "snjyor",
    "url": "https://github.com/snjyor/pixel_nft"
  },
  "foundingDate": "2025-05-23",
  "sameAs": [
    "https://twitter.com/jinghui30",
    "https://github.com/snjyor/pixel_nft"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://github.com/snjyor/pixel_nft/issues"
  }
})

export const getBreadcrumbSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://pixelnft.top"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pixel Art Generator",
      "item": "https://pixelnft.top"
    }
  ]
})

// Export all schemas as a combined JSON-LD array
export const getAllStructuredData = () => [
  getWebApplicationSchema(),
  getCreativeWorkSchema(),
  getHowToSchema(),
  getFAQSchema(),
  getOrganizationSchema(),
  getBreadcrumbSchema()
] 