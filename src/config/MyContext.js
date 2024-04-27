import { createContext, useState, useContext, useEffect} from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebase'

const AuthContext = createContext();
const auth = getAuth(app)

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('')
    useEffect(()=>{
        onAuthStateChanged(auth, (user) =>{
            if(user) {
                setCurrentUser(user)
            } else{
                setCurrentUser(null)
            }
        })
    }, [])
    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}
