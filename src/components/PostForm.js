import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useState, useRef } from 'react'
import {getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import app from '../config/firebase';
import { useAuth } from '../config/MyContext';
import { useNavigate } from 'react-router-dom';
import Noticeboard from './Noticeboard';

const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage();

const PostForm = () => {
    const [postImg, setPostImg] = useState()
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [category, setCategory] = useState()
    const fileInputRef = useRef(null)

    // Protect Page
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    if(!currentUser) {
      navigate('/')
    }
  
    const handleSubmit = async (e) =>{
      e.preventDefault();

      if(!postImg) {
        alert('Please select an Image')
        return
      }
      if(!category) {
        alert('Please choose a niche...')
        return
      }
      const storageRef = ref(storage, `blog-post-${category}-${new Date().getFullYear()}-${Date.now()}`);

      uploadBytes(storageRef, postImg).then(snapshot => {
        return getDownloadURL(snapshot.ref)
      }).then(async (downloadURL) =>{
        await addDoc(collection(db, 'blogPosts'), {
          imgUrl: downloadURL,
          title,
          content,
          category,
          author: {
            email: currentUser.email,
            id: currentUser.uid
          },
          views: 0,
          published_at: new Date().toLocaleString()
        })
        fileInputRef.current.value = null;
        setTitle('')
        setCategory('')
        setContent('')
      }).catch(err =>{
        console.log(err)
      })
    }
  
    return (
      <div className="m-5">
        <div className="flex md:flex-col">
          <form onSubmit={handleSubmit} className='flex flex-col w-2/3'>
            <div className='flex my-4'>
              <input type="file" className='my-3 block w-full text-sm text-dark file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0' id="" ref={fileInputRef} onChange={(e)=>setPostImg(e.target.files[0])}/>
              <input type="submit" value="Submit" className='bg-primary text-light px-5'/>
            </div>
            <input type="text" className='border border-dark focus:outline-none rounded-sm p-3' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Title"/>

            <select className='border border-dark focus:outline-none rounded-sm p-3' value={category} onChange={(e)=> setCategory(e.target.value)}>
              <option value="">Choose a Niche</option>
              <option value="entertainment">Entertainment</option>
              <option value="technology">Technology</option>
              <option value="health">Health and Fitness</option>
              <option value="education">Careers and Education</option>
              <option value="sports">Sports</option>
              <option value="world">World News</option>
              <option value="news">Local News</option>
            </select>
            {/* <input type="text" className='border border-dark focus:outline-none rounded-sm p-3' value={category} onChange={(e)=> setCategory(e.target.value)} placeholder="Category"/> */}

            {/* CkEditor Setup */}
            <CKEditor editor={ ClassicEditor } config={{ removePlugins: ["EasyImage","ImageUpload","MediaEmbed"]}}
            data={content}
            onReady={ ( editor ) => {
              console.log( "CKEditor5 React Component is ready to use!", editor );
            } }
            onChange={ ( event, editor ) => {
              const data = editor.getData();
              setContent(data)
            } }/>

          </form>
          <Noticeboard />
        </div>
      </div>
    );
}

export default PostForm