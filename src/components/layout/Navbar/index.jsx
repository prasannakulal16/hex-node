import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi' // Importing menu icons
import Button from '../../ui/Button'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full py-4 flex items-center justify-between shadow-md mx-auto xl:px-24 lg:px-14 sm:px-10 px-6 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white text-black' : 'bg-[#020A19] text-white'
      }`}
    >
      {/* Logo */}
      <h2 className="text-xl md:text-3xl font-semibold">Hexnode</h2>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Button variant="primary" size="medium">
          14 Days Free Trial
        </Button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(true)}>
          <HiMenu size={28} />
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/90 text-white flex flex-col items-center justify-center z-50 transition-all duration-300">
          <Button
            className="absolute top-6 right-6 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <HiX size={32} />
          </Button>

          <Button
            variant="primary"
            size="large"
            className="mt-8"
            onClick={() => setIsMenuOpen(false)}
          >
            14 Days Free Trial
          </Button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
