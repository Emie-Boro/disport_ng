import { Link } from 'react-router-dom'
import '../styles/index.css'
import handleViews from '../utilties/handleViews'

const PostList = ({ posts, title }) => {
  return (
    <div className=''>
      <h5 className="lg:text-1xl uppercase font-light sm:text-sm my-2">{title}</h5>
      <div className='flex flex-row sm:flex-col lg:mr-2 sm:full md:mr-5 my-2 lg:w-full md:w-full'>
        <div className="">
          <div className='md:mr-5 lg:mr-6' style={{alignItems: 'center'}}>
            <img src={posts && posts[0].imgUrl} alt="" className="rounded-sm" style={{maxHeight: '300px'}}/>
            <Link to={`/blog/${posts && posts[0].id}`} onClick={()=> handleViews(posts && posts[0].id)}><h1 className="text-2xl font-semibold capitalize sm:text-xl ">{posts && posts[0].title}</h1></Link>
          </div>
        </div>
        <div className='lg:px-2 lg:w-4/6'>
            {posts?.map(post =>(
              <div key={post.id} className='py-2' style={{borderBottom: '1px solid lightgray'}}>
                <Link to={`/blog/${post.id}`} onClick={()=> handleViews(post.id)}>
                  <div className='flex justify-between'>
                    <div className=''>
                      <h5 className='text-justify font-semibold text-primary sm:text-sm'>{post.title}</h5>
                      <span className='text-xs text-secondary'>{post.published_at}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            <div className='mt-5'>
              <Link to={'/entertainment'} className="p-2 bg-dark text-light sm:text-xs">Read More</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostList
