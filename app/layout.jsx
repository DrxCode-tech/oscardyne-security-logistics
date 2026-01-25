import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://www.oscardynesecuritylogistics.com'),
  title: {
    default: 'Oscardyne Security Logistics | Professional Security Services in Calgary',
    template: '%s | Oscardyne Security Logistics'
  },
  description: 'Full-spectrum private security services including corporate guards, surveillance, rapid-response units, escort services, and high-risk logistics. Available 24/7 in Calgary, Alberta, Canada.',
  keywords: [
    'security services Calgary',
    'private security Alberta',
    'corporate security guards',
    'Calgary security company',
    'security guards Canada',
    'surveillance services',
    'cybersecurity Calgary',
    'event security',
    'residential security',
    'commercial security',
    'physical security',
    'information security',
    'security logistics',
    'Alberta security services',
    '24/7 security services',
    'professional security guards'
  ],
  authors: [{ name: 'Oscardyne Security Logistics' }],
  creator: 'Oscardyne Security Logistics',
  publisher: 'Oscardyne Security Logistics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Oscardyne Security Logistics | Professional Security Services',
    description: 'Full-spectrum private security — corporate guards, surveillance, rapid-response units, escort services, and high-risk logistics. Reliable. Disciplined. Operational 24/7.',
    url: 'https://www.oscardynesecuritylogistics.com',
    siteName: 'Oscardyne Security Logistics',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oscardyne Security Logistics - Professional Security Services',
      }
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oscardyne Security Logistics | Professional Security Services',
    description: 'Full-spectrum private security services available 24/7 in Calgary, Alberta.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.oscardynesecuritylogistics.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Translate */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'fr,de,es,it,pt,zh,ar,ru,ja,ko,hi',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `}
        </Script>
      </head>
      <body className="min-h-screen">
        <div id="google_translate_element"></div>
        {children}
      </body>
    </html>
  )
}