import { useNavigate, Link } from 'react-router-dom'
import { getFirestore, collection, query, getDocs, where, orderBy } from 'firebase/firestore'
import app from '../config/firebase'
import { useEffect, useState } from 'react'
import { useAuth } from '../config/MyContext'
const db = getFirestore(app)

const Dashboard = () => {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  if(!currentUser) {
    navigate('/login')
  }
  
  return (
    <div className='lg:m-5 lg:p-5 md:p-2'>
      <div>
        <h3 className='text-3xl sm:text-lg'>{`Welcome ${currentUser && currentUser.email.split('@')[0]} to Disport NG`}</h3>
        <div className='my-5'>
          <Link to={'/newPost'} className='bg-dark text-light p-3 lg:rounded-lg sm:text-sm sm:rounded-sm mr-3'>New Content</Link>
          <Link to={'/userPost'} className='bg-dark text-light p-3 lg:rounded-lg sm:text-sm sm:rounded-sm'>Your Contents</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
