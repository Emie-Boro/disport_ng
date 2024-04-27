import { Link } from "react-router-dom"
import { useAuth } from "../config/MyContext"
import Logout from "./Logout"

const Header = () => {
    const { currentUser } = useAuth()
  return (
    <header>
      <nav className=" bg-semi_light">
        <div  className="container mx-auto p-5 flex justify-between">
          <div>
            <ul className="flex">
                <li ><img src="/favicon.ico" alt=""  className="mr-5"/></li>
                <li><Link to={'/'}>Home</Link></li>
            </ul>
          </div>
          <div>
            <ul className="flex">
                {!currentUser && <li className="mx-5"><Link to={'/signup'}>Signup</Link></li>}
                {currentUser && <li className="mx-5"><Link to={'/newPost'}>New Post</Link></li>}
                {currentUser && <li className="mx-5"><Link to={'/dashboard'}>Dashboard</Link></li>}
                <li className="">{currentUser ? <Logout /> : <Link to={'/login'}>Login</Link>}</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
