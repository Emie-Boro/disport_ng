import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../config/firebase";
import '../styles/index.css'
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
    <div className="flex">
        <div className="m-5 px-6 p-5 bg-semi_light rounded-xl">
            <h1 className="text-3xl font-semibold my-4">{post && post.title}</h1>
            <img src={post && post.imgUrl} alt="" className="w-2/3 rounded-xl"/>
            <div dangerouslySetInnerHTML={{ __html: post && post.content }} className="my-5 p-5"></div>
        </div>
    </div>
  )
}

export default Post
