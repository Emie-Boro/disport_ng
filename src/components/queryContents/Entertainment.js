import { useState, useEffect } from "react"
import { getFirestore, collection, where, getDocs, query, orderBy, limit } from "firebase/firestore"
import app from "../../config/firebase"
import PostList from "../PostList"
const db = getFirestore(app)

const Entertainment = () => {
    const [queryContent, setQueryContent] = useState()
    const [heroPost, setHeroPost] = useState()
    useEffect(()=>{
        const searchQuery = async () =>{
            try {
                const q = query(collection(db, 'blogPosts'), where('category', '==', 'entertainment'), orderBy("views", "desc"), limit(4))
                const querySnapshot = await getDocs(q);
                const formattedPosts = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setQueryContent(formattedPosts)
                setHeroPost(formattedPosts[0])
            } catch (error) {
                console.log(error.message)
            }
        };

        searchQuery()
    }, [])
    
    return (
        <div className="my-5 p-5 bg-semi_light rounded-2xl">
            <h5 className="ml-5 text-2xl uppercase font-bold">Entertainment</h5>
            <PostList posts={queryContent}/>
        </div>
    )
}

export default Entertainment
