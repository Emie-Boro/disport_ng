import { Link } from "react-router-dom"
import { useAuth } from "../config/MyContext"
import Logout from "./Logout"

const Header = () => {
    const { currentUser } = useAuth()
  return (
    <header>
      <nav className=" bg-semi_light">
        <div  className="container mx-auto p-5 flex flex-row md:flex-col justify-between">
          <div>
            <ul className="flex md:flex-col">
                <li className="md:hidden"><Link to={'/'}><img src="/favicon.ico" alt="" className="mr-5"/></Link></li>
                <li><Link to={'#'} className="mr-5">Hottest</Link></li>
                <li><Link to={'#'} className="mr-5">World News</Link></li>
            </ul>
          </div>
          <div>
            <div className="hidden">
              <span className="bg-dark p-5"></span>
            </div>
            <ul className="flex md:flex-col">
                {!currentUser && <li className="lg:mr-5"><Link to={'/signup'}>Signup</Link></li>}
                {currentUser && <li className="lg:mr-5"><Link to={'/newPost'}>New Post</Link></li>}
                {currentUser && <li className="lg:mr-5"><Link to={'/dashboard'}>Dashboard</Link></li>}
                <li className="">{currentUser ? <Logout /> : <Link to={'/login'}>Login</Link>}</li>
                <li className="sm:hidden"><Link to={'#'} className="ml-5 bg-dark text-light p-3 rounded-xl">Advertise with us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
