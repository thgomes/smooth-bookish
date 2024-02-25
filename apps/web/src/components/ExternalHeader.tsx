import React from 'react'

const Header = () => {
  return (
    <header className="text-indigo-50 p-4">
      <div className="max-w-screen-xl mx-auto">
        <nav className="flex items-center justify-between">
          <strong className="text-xl font-semibold cursor-pointer">
            SmoothBookish
          </strong>
          <ul className="flex space-x-4 font-bold">
            <li>
              <a
                className="hover:text-indigo-300 duration-500"
                href="#home"
              >
                sign-up
              </a>
            </li>
            <li>
              <a
                className="hover:text-indigo-400 duration-500"
                href="#about"
              >
                login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
