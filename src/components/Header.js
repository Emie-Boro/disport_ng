import { Link } from "react-router-dom"
import { useAuth } from "../config/MyContext"
import Logout from "./Logout"
import '../styles/index.css'
import { useState } from "react"

const Header = () => {
    const { currentUser } = useAuth()
    const [showMenu, setShowMenu] = useState(false)
  return (
    <header>
      <nav className=" bg-semi_light">
        <div  className="container mx-auto md:p-5">
          <div className="lg:hidden flex justify-between items-center">
          <div>
              <button type="button" className="lg:hidden flex flex-col navBar" onClick={()=> setShowMenu(!showMenu)}>
                <span className="bg-dark"></span>
                <span className="bg-dark"></span>
                <span className="bg-dark"></span>
              </button>
            </div>
            <div>
              <Link to={'/'}><img src="/favicon.ico" alt="" className="sm:w-8"/></Link>
            </div>
          </div>
          <div className={`md:${!showMenu && 'hidden'} flex flex-row md:flex-col justify-between py-5 lg:items-center`}>
            <div>
              <ul className="flex md:flex-col lg:items-center">
                  <li className="md:hidden"><Link to={'/'}><img src="/favicon.ico" alt="" width={'40'} className="mr-5"/></Link></li>
                  <li><Link to={'/'} className="mr-5">Home</Link></li>
                  <li><Link to={'#'} className="mr-5">Hottest</Link></li>
                  <li><Link to={'#'} className="mr-5">World News</Link></li>
              </ul>
            </div>
            <div className="">
              <div>
                <ul className="flex md:flex-col">
                    {!currentUser && <li className="lg:mr-5"><Link to={'/signup'}>Signup</Link></li>}
                    {currentUser && <li className="lg:mr-5"><Link to={'/newPost'}>New Post</Link></li>}
                    {currentUser && <li className="lg:mr-5"><Link to={'/dashboard'}>Dashboard</Link></li>}
                    <li className="">{currentUser ? <Logout /> : <Link to={'/login'}>Login</Link>}</li>
                    <li className="md:my-5"><Link to={'#'} className="lg:ml-5 bg-dark text-light p-3 rounded-sm hover:bg-semi_light hover:text-secondary">Advertise with us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
