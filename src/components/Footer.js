import { Link } from "react-router-dom"
import { useAuth } from "../config/MyContext"

const Footer = () => {
    const { currentUser } = useAuth()
  return (
    <footer className='bg-primary text-light sm:text-sm'>
        <div className="container mx-auto p-5">
            <div className="flex flex-row sm:flex-col justify-between item-start">
              <div>
                <ul className="">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'#'}>Contact us</Link></li>
                    {!currentUser && <li className=""><Link to={'/signup'}>Signup</Link></li>}
                </ul>
              </div>
              {/* <div className="text-sm text-gray">
                <span className="text-lg text-light">Contact</span>
                <ul className="mt-2">
                  <li className="mb-2">disportng@gmail.com</li>
                  <li className="mb-2">+234 (0)810 999 5607</li>
                  <li><address>NDU, Yenagoa, Bayelsa, Nigeria</address></li>
                </ul>
              </div> */}
            </div>
        </div>
      <p className="text-center py-3 text-xs">Copyright &copy; 2024</p>
    </footer>
  )
}

export default Footer
