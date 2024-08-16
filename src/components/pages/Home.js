import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import MiniPost from "./MiniPost";


const Home = props => {
    const posts = useSelector(getAllPosts);
    
    return (
        <>
            <h1>Home</h1>
            {posts.map(post => <MiniPost {...post} />)}
        </>
    );
};

export default Home; 