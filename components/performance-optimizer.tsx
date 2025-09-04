"use client"

import { useEffect } from "react"

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero images
      const heroImage = new Image()
      heroImage.src = "/images/hshtg-logo.png"

      // Preload fonts
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "font"
      link.type = "font/woff2"
      link.crossOrigin = "anonymous"
      document.head.appendChild(link)
    }

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      const images = document.querySelectorAll("img[data-src]")
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ""
            img.classList.remove("lazy")
            observer.unobserve(img)
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical scripts
      setTimeout(() => {
        // Load analytics after initial page load
        if (typeof window !== "undefined" && "gtag" in window) {
          // Analytics is already loaded by Vercel Analytics
        }
      }, 2000)
    }

    preloadCriticalResources()
    lazyLoadImages()
    optimizeThirdPartyScripts()

    // Service Worker registration for caching
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Service worker registration failed, but don't block the app
      })
    }
  }, [])

  return null
}
