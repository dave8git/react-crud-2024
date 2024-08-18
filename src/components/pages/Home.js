import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import MiniPost from "./MiniPost";
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';


const Home = props => {
    const posts = useSelector(getAllPosts);
    
    return (
        <>
            <Row className="align-items-center mb-4">
                <Col>
                    <h1>Home</h1>
                </Col>
                <Col className="text-end">
                    <Link to={`/post/add`}>
                        <Button variant="primary">Add Post</Button>
                    </Link>
                </Col>
            </Row>
            {posts.map(post => <MiniPost {...post} />)}
        </>
    );
};

export default Home; 