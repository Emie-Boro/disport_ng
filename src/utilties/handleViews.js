import { getFirestore, doc, updateDoc, increment } from "firebase/firestore";
import app from "../config/firebase";

const db = getFirestore(app)

const handleViews = (id) =>{
    updateDoc(doc(db, 'blogPosts', id), {
        views: increment(1)
    }).then(response => console.log('Views updated'))
    .catch(err => console.log(err.message))
}

export default handleViews