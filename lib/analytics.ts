// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track NFT downloads
export const trackNFTDownload = (characterDNA: string) => {
  event({
    action: 'download',
    category: 'NFT',
    label: `Character_${characterDNA}`,
  })
}

// Track randomize character
export const trackRandomize = () => {
  event({
    action: 'randomize',
    category: 'Character Generation',
    label: 'Random Character Created',
  })
}

// Track customization
export const trackCustomization = (partType: string, styleIndex: number) => {
  event({
    action: 'customize',
    category: 'Character Generation',
    label: `${partType}_Style_${styleIndex + 1}`,
  })
} 