import {Route, Routes} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import About from './components/pages/About';
import AddPost from './components/pages/AddPost';
import EditPost from './components/pages/EditPost';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import CategoryPage from './components/pages/CategoryPage';
import CategoryPosts from './components/pages/CategoryPosts';


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/category/:category" element={<CategoryPosts />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
