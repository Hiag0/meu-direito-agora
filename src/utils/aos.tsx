'use client'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

const AosComponent = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    let isMounted = true

    const initAos = async () => {
      try {
        const { default: AOS } = await import('aos')
        if (!isMounted) return

        AOS.init({
          duration: 800,
          once: false,
        })

        AOS.refreshHard()
        document.documentElement.classList.add('aos-ready')
      } catch {
        // Keep content visible even if AOS fails to initialize.
      }
    }

    void initAos()

    return () => {
      isMounted = false
      document.documentElement.classList.remove('aos-ready')
    }
  }, [])

  return <div>{children}</div>
}

export default AosComponent
