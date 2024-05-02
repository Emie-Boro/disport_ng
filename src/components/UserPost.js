import { useNavigate, Link } from 'react-router-dom'
import { getFirestore, collection, query, getDocs, doc, deleteDoc, where, orderBy } from 'firebase/firestore'
import { getStorage, deleteObject, ref } from 'firebase/storage'
import app from '../config/firebase'
import { useEffect, useState } from 'react'
import { useAuth } from '../config/MyContext'
const db = getFirestore(app)
const storage = getStorage()

const UserPost = () => {
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
    }, [currentUser])

    const handleDelete = (id, file) =>{
        deleteObject(ref(storage, file)).then(()=> console.log('Deleted File...'))
        .catch(err => console.log(err))
        deleteDoc(doc(db, "blogPosts", id )).then(()=> console.log('Deleted Content...'))
        .catch(err => console.log(err))
        alert('Content Successfully Deleted...')
    }
  return (
    <div className='p-5 lg:m-5'>
        <div className="container mx-auto lg:p-16">
            <h1 className='text-2xl font-semibold sm:text-xl'>{!posts ? 'Your Contents' : 'No content posted yet!'}</h1>
          {posts?.map(post =>(
            <div key={post && post.id} className='py-3 flex justify-between'>
                <div className='sm:mr-2'>
                    <div>
                        <Link to={`/blog/${post && post.id}`} className='hover:text-secondary'>
                            <h1 className='lg:text-lg sm:text-sm'>{post && post.title}</h1>
                        </Link>
                    </div>
                    <div>
                        <span className='text-secondary text-sm'>{post && post.views} Views</span>
                    </div>
                </div>
                <div className=''>
                    <button className='p-3 bg-primary text-light sm:text-sm sm:p-2 hover:bg-secondary' onClick={()=> handleDelete(post && post.id, post.image.name)}>Delete</button>
                </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default UserPost
