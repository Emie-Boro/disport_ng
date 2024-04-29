import { Link } from "react-router-dom"
import { useAuth } from "../config/MyContext"

const Footer = () => {
    const { currentUser } = useAuth()
  return (
    <footer className='bg-primary text-light sm:text-sm'>
        <div className="container mx-auto p-5">
            <ul className="flex flex-col">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'#'}>Contact us</Link></li>
                {!currentUser && <li className=""><Link to={'/signup'}>Signup</Link></li>}
            </ul>
        </div>
      <p className="text-center py-3 text-xs">Copyright &copy; 2024</p>
    </footer>
  )
}

export default Footer
