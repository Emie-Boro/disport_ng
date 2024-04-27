import { useState, useEffect } from "react"
import { getFirestore, collection, where, getDocs, query, orderBy, limit } from "firebase/firestore"
import app from "../../config/firebase"
import PostList from "../PostList"
const db = getFirestore(app)

const Technology = () => {
    const [queryContent, setQueryContent] = useState()
    useEffect(()=>{
        const searchQuery = async () =>{
            try {
                const q = query(collection(db, 'blogPosts'), where('category', '==', 'technology'), orderBy("views", "desc"), limit(4))
                const querySnapshot = await getDocs(q);
                const formattedPosts = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setQueryContent(formattedPosts)
            } catch (error) {
                console.log(error.message)
            }
        };

        searchQuery()
    }, [])
    
    return (
        <div className="my-5 p-5 bg-semi_light rounded-2xl">
            <h5 className="ml-5 text-2xl uppercase font-bold">Technology</h5>
            <PostList posts={queryContent}/>
        </div>
    )
}

export default Technology
