import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="pb-3 border-b-2 shadow-sm">
        <ul className="flex flex-row justify-between">
          <li>
            <img src="/thaparLogo.webp" className="h-16 ml-2 mt-2"/>
          </li>
          <li>
            <input type="text" placeholder="search" className="mt-5 text-black border-1 border-black bg-gray-100 w-96 p-1 pl-2 rounded-3xl"/>
          </li>
          <li>
            <button className="mr-5 mt-4 text-white font-bold bg-[#9f352c] p-2 rounded-3xl w-24">Sign Out</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header