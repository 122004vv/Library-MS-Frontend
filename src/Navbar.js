import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const logout = () => {
    window.location.href = "/"
  }


  return (
    <div className="bg-white sticky top-0 z-50  "  >
      {/* desktop  */}
      <header className="relative bg-white">
        

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/home'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black px-2 py-1 rounded' >LIBRARY MANAGEMENT SYSTEM</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allbooks'} className="text-sm font-medium text-gray-700 " >
                    All Books
                  </Link>
                  <Link to={'/'} className="text-sm font-medium text-gray-700 " >
                    Order
                  </Link>

                   <Link to={'/'} className="text-sm font-medium text-gray-700 " >
                    Admin
                  </Link>
                 

                    <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " >
                    Logout
                  </a>
                  <Link to={'/'} className="text-sm font-medium text-gray-700 cursor-pointer  ">
                    Signup
                  </Link>

                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" >INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://images.pexels.com/photos/5778556/pexels-photo-5778556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="user_img" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Outlet/>
      </header>
    </div>
  )
}