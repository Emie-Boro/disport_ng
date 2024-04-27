import { getAuth, signOut } from "firebase/auth"
import app from "../config/firebase"
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Logout = () => {
    const navigate = useNavigate()
    const handleLogout = () =>{
        signOut(auth).then(()=>{
            navigate('/')
            console.log('Signed Out')
        }).catch(err =>{
            console.log(err.message)
        })
    }
  return (
    <button onClick={handleLogout} className="mx-5">Logout</button>
  )
}

export default Logout
