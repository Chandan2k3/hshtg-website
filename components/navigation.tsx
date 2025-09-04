"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home", description: "HSHTG Marketing Firm Homepage" },
    { href: "/services", label: "Services", description: "Digital Marketing Services in Bengaluru" },
    { href: "/portfolio", label: "Portfolio", description: "Our Marketing Success Stories and Case Studies" },
    { href: "/about", label: "About", description: "About HSHTG Marketing Team and Company" },
    { href: "/pricing", label: "Pricing", description: "Marketing Service Pricing and Packages" },
    { href: "/blog", label: "Blog", description: "Marketing Tips and Business Growth Resources" },
    { href: "/contact", label: "Contact", description: "Contact HSHTG Marketing for Free Consultation" },
  ]

  return (
    <nav
      className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="HSHTG Marketing Firm - Go to homepage">
            <Image
              src="/images/hshtg-logo.png"
              alt="HSHTG Marketing Firm - Digital Marketing Agency Bengaluru"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                role="menuitem"
                aria-label={item.description}
                title={item.description}
              >
                {item.label}
              </Link>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              aria-label="Get Free Marketing Audit - Contact HSHTG"
            >
              Get Free Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden" id="mobile-menu" role="menu" aria-label="Mobile navigation menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  aria-label={item.description}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  aria-label="Get Free Marketing Audit - Contact HSHTG"
                >
                  Get Free Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
