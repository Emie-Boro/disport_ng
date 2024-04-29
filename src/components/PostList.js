import { Link } from 'react-router-dom'
import '../styles/index.css'
import handleViews from '../utilties/handleViews'

const PostList = ({ posts, title }) => {
  return (
    <>
      <h5 className="lg:text-1xl uppercase font-light sm:text-sm my-2">{title}</h5>
      <div className='flex flex-row sm:flex-col lg:mr-2 lg:w-3/4  md:mr-5 my-2'>
        <div className="">
          <div className='md:mr-5' style={{alignItems: 'center'}}>
            <img src={posts && posts[0].imgUrl} alt="" className="rounded-sm" style={{maxHeight: '300px'}}/>
            <Link to={`/blog/${posts && posts[0].id}`} onClick={()=> handleViews(posts && posts[0].id)}><h1 className="text-3xl font-semibold capitalize sm:text-xl ">{posts && posts[0].title}</h1></Link>
          </div>
        </div>
        <div className='lg:w-2/4 lg:px-2 md:2/4'>
            {posts?.map(post =>(
              <div key={post.id} className='my-3 py-2' style={{borderBottom: '1px solid lightgray'}}>
                <Link to={`/blog/${post.id}`} onClick={()=> handleViews(post.id)}>
                  <div className='flex justify-between'>
                    <div className=' md:w-full'>
                      <h5 className='text-justify font-semibold text-secondary sm:text-sm'>{post.title}</h5>
                      <span className='text-xs text-gray'>{post.published_at}</span>
                    </div>
                    {/* <div className='w-1/5 sm:hidden'>
                      <div className='md:w-full'>
                        <img src={post.imgUrl} className='w-fit object-contain' alt="" />
                      </div>
                    </div> */}
                  </div>
                </Link>
              </div>
            ))}
            <Link to={'/entertainment'} className="p-2 bg-dark text-light sm:text-xs">Read More</Link>
        </div>
      </div>
    </>
  )
}

export default PostList
