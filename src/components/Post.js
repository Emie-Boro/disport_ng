import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../config/firebase";
import '../styles/index.css'
import AdsSpace1 from "./AdsSpace/AdsSpace1";
const db = getFirestore(app)

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState()
    useEffect(()=>{
        const searchQuery = async () =>{
            try {
                const q = await getDoc(doc(db, 'blogPosts', id))
                setPost(q.data())
            } catch (error) {
                console.log(error.message)
            }
        };
        searchQuery()
    }, [])
  return (
    <div className="container mx-auto">
        <div className="">
            <div className="mt-5">
                <Link to={'/'} className="text-sm p-2 bg-primary text-light">Go back <i className="bi bi-backspace"></i></Link>
            </div>
            <div>
                
            </div>
        </div>
        <div className="lg:flex md:flex">
            <div className="lg:m-5 px-6 p-5 lg:2/3 rounded-lg">
                <div className="mb-3">
                    <h1 className="lg:text-3xl md:text-lg font-semibold">{post && post.title}</h1>
                    <span className="text-sm text-gray">Author's Email: <span className="text-primary">{post && post.author.email}</span></span><br />
                    <span className="text-xs text-secondary">{post && post.published_at}</span>
                </div>
                <div>
                    <img src={post && post.imgUrl} alt="" className="rounded-lg md:w-10/12 lg:w-10/12"/>
                    <div dangerouslySetInnerHTML={{ __html: post && post.content }} className="my-5 p-2"></div>
                </div>
            </div>
            <div className="sm:hidden md:w-10/12 lg:w-7/12">
                <AdsSpace1 />
            </div>
        </div>
    </div>
  )
}

export default Post
