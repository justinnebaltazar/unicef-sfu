import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  {/* update paths when other pages are created */}
  const navLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
    { name: 'Get Involved', path: '/get-involved' },
  ]

  return (
    <nav className="bg-white shadow-sm px-5">
      <div className="max-w-screen-xl mx-auto px-4 py-2 lg:px-8 lg:py-4">
        {/* Top section */}
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo - will be replaced once we have final version*/}
          <div className="flex items-center">
            <Link to="/" className="mr-4 py-1.5 font-medium text-blue-gray-900">
              <img
                src="/unicef-logo.jpg"
                alt="UNICEF logo"
                className="w-50 h-auto"
              />
            </Link>
          </div>

          {/* Desktop view */}
          <div className="hidden lg:flex items-center gap-x-2">
            <div className="relative flex w-full gap-2 md:w-max">
              <button className="bg-[#374EA2] hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Donate
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:block w-full">
            <hr className="my-3 bg-[#D9D9D9] border-0 h-px" />
            <ul className="flex flex-row items-center justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="p-1 font-medium text-black hover:text-gray-900 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        {openNav && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col gap-2 mb-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="p-1 font-medium text-gray-600 hover:text-gray-900 text-sm flex items-center"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <button className="bg-[#374EA2] hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium w-full sm:w-auto">
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}