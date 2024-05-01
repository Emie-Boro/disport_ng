import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from "./components/Signup";
import Login from "./components/Login";
import PostForm from "./components/PostForm";
import Dashboard from './components/Dashboard';
import { AuthProvider } from "./config/MyContext";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Post from './components/Post';
import UserPost from './components/UserPost';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/newPost' element={<PostForm />} />
              <Route path='/blog/:id' element={<Post />} />
              <Route path='/userPost' element={<UserPost />} />
            </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App;
