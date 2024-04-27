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
    <div className="m-5">
        <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
