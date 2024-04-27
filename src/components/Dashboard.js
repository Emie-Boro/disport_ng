import { useNavigate, Link } from 'react-router-dom'
import { getFirestore, collection, query, getDocs, where, orderBy } from 'firebase/firestore'
import app from '../config/firebase'
import { useEffect, useState } from 'react'
import { useAuth } from '../config/MyContext'
const db = getFirestore(app)

const Dashboard = () => {
  const [posts, setPosts] = useState()
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  if(!currentUser) {
    navigate('/login')
  }
  useEffect(()=>{
      const searchQuery = async () =>{
          try {
            const q = query(collection(db, 'blogPosts'), where('author.id', '==', currentUser.uid), orderBy("views", "desc"))
              const querySnapshot = await getDocs(q);
              const formattedPosts = querySnapshot.docs.map(doc => ({
                  id: doc.id,
                  ...doc.data()
              }));
              setPosts(formattedPosts)
          } catch (error) {
              console.log(error.message)
          }
      };

      searchQuery()
  }, [])
  return (
    <div className='m-5 p-5'>
      <div>
        <h3 className='text-3xl'>{`Welcome ${currentUser && currentUser.email.split('@')[0]} to Dispor NG`}</h3>
        <div className='my-5'>
          <Link to={'/newPost'} className='bg-dark text-light p-3 rounded-lg'>New Content</Link>
        </div>
      </div>
      <div className='p-5 m-5 bg-semi_light rounded-xl'>
        <h1 className='text-2xl font-semibold'>Your Contents</h1>
        <div className="py-5">
          {posts?.map(post =>(
            <div key={post.id} className='py-3'>
              <Link to={`/blog/${post.id}`} className='hover:text-secondary'>
                <div className='flex justify-between'>
                  <h1>{post.title}</h1>
                  <span>{post.views} Views</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
