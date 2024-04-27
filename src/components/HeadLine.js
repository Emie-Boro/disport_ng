import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, orderBy, limit} from "firebase/firestore";
import app from "../config/firebase";
import { Link } from "react-router-dom";
import handleViews from "../utilties/handleViews";

const db = getFirestore(app)

const HeadLine = () => {
    const [headLine, setHeadLine] = useState()
    const [hottest, setHottest] = useState()
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const q = query(collection(db, "blogPosts"), orderBy("published_at", "asc"), limit(4))
            const querySnapshot = await getDocs(q);

            const formattedPosts = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
              
            setHeadLine(formattedPosts);
            setHottest(formattedPosts[0])
          } catch (error) {
            console.error(error.message);
          }
        };
    
        fetchPosts();
      }, []);
      
      
    return (
        <div>
            <div className="my-4">
            </div>
            <div className="flex md:flex-col">
                <div className="rounded-sm w-2/3" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${hottest && hottest.imgUrl})`,backgroundSize: 'cover', height: '300px'}}>
                    <div className="py-28 px-10 text-light">
                        <h1 className="text-4xl font-bold">{hottest && hottest.title}</h1>
                        <div className="my-5">
                            <Link to={`/blog/${hottest && hottest.id}`} className="bg-semi_light p-2 hover:bg-dark hover:text-light text-dark">Read More</Link>
                        </div>
                    </div>
                </div>
                <div className="mx-5 w-1/2">
                    {headLine?.map(head =>(
                        <div key={head.id} className="my-3">
                            <Link to={`/blog/${head.id}`}>
                                <h1 className="font-semibold uppercase text-1xl">{head.title}</h1>
                                <div className="flex justify-between">
                                    <span className="text-secondary">{head.published_at}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default HeadLine
