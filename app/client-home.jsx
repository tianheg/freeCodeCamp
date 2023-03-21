'use client'

import { usePathname } from 'next/navigation'
import Home from './home'

export default function ClientHome() {
  const pathname = usePathname()
  return <>{pathname !== '/' && <Home />}</>
}
