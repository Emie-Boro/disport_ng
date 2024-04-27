import { Link } from 'react-router-dom'
import '../styles/index.css'
import handleViews from '../utilties/handleViews'

const PostList = ({ posts }) => {
  return (
    <div className='flex md:flex-col'>
      <div className="lg:mr-2 p-5 lg:w-2/3">
          <img src={posts && posts[0].imgUrl} alt="" className="rounded-xl" style={{width: '100%'}}/>
          <Link to={`/blog/${posts && posts[0].id}`} onClick={()=> handleViews(posts && posts[0].id)}><h1 className="text-3xl">{posts && posts[0].title}</h1></Link>
      </div>
      <div className='p-5 lg:w-1/2'>
          {posts?.map(post =>( 
            <div key={post.id} className='my-3'>
              <Link to={`/blog/${post.id}`} onClick={()=> handleViews(post.id)}>
                <div className='flex flex-row justify-between'>
                  <div className='w-2/3 md:w-full'>
                    <h5 className='text-justify mr-5'>{post.title}</h5>
                    <span className='text-xs text-secondary'>{new Date(post.published_at).toDateString()}</span>
                  </div>
                  <div className='w-1/3'>
                    <div className=''>
                      <img src={post.imgUrl} className='w-fit object-contain' alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          <Link to={'/entertainment'} className="p-2 bg-dark text-light">Read More</Link>
      </div>
    </div>
  )
}

export default PostList
