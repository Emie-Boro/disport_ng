import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import app from "../config/firebase"
import { useAuth } from "../config/MyContext"

const auth = getAuth(app)

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()
    const { currentUser } = useAuth()
    if(currentUser) {
      navigate('/dashboard')
    }

    const handleClick = (e) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            navigate('/dashboard')
            console.log(userCredential.user.email)
        }).catch(err => console.log(err.message))
    }
  return (
    <div className="container mx-auto">
        <div className="p-5 flex flex-col lg:w-1/3">
          <div className="">
            <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} className='my-3 px-4 py-2 w-full' style={{border: '1px solid black'}}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} className='my-3 px-4 py-2 w-full' style={{border: '1px solid black'}}/>
          </div>
          <div>
            <button onClick={handleClick} className='bg-dark text-semi_light w-full py-3'>Login</button>
          </div>
        </div>
    </div>
  )
}

export default Login
