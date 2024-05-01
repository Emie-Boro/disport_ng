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
        if((new Date().toDateString() == 'Wed May 02 2024')) {
            alert('Signup Disabled...')
            return
        } else {
            if(!password || !email) {
                alert('All fields are required')
                return
            }    
            createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential)
            }).catch(err =>{
                console.log(err.message)
            })
        }
    }
  return (
    <div className='container mx-auto'>
        <div className='p-5 flex flex-col lg:w-1/3'>
            <div className="">
                <span>{error && error}</span>
                <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} className='my-3 px-4 py-2 w-full' style={{border: '1px solid black'}}/>
                <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} className='my-3 px-4 py-2 w-full' style={{border: '1px solid black'}}/>
            </div>
            <div>
                <button onClick={handleSubmit} className="bg-dark text-semi_light w-full py-3">Signup</button> 
            </div>
        </div>
    </div>
  )
}

export default Signup
