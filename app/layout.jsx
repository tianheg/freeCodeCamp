import ClientHome from './client-home'
import './globals.scss'

export const metadata = {
  title: 'freeCodeCamp projects',
  description: 'Created by tianheg',
  themeColor: '#fff',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'images/png' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'images/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    other: {
      rel: 'mask-icon',
      url: '/icons/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientHome />
        {children}
      </body>
    </html>
  )
}
