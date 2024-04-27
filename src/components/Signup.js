import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../config/firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuth } from '../config/MyContext';
const auth = getAuth(app)

const Signup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(null);

    const navigate = useNavigate()
    const { currentUser } = useAuth()
    if(currentUser) {
        navigate('/dashboard')
    }
    
    const handleSubmit = (e) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log(userCredential)
        }).catch(err =>{
            console.log(err.message)
        })
        navigate('/dashboard')
    }
    
  return (
    <div>
        <span>{error && error}</span>
        <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Signup</button>
    </div>
  )
}

export default Signup
