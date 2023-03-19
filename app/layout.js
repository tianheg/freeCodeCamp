import './globals.scss'

export const metadata = {
  title: 'freeCodeCamp projects',
  description: 'Created by tianheg',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  )
}
