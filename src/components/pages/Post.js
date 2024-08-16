import { useParams } from 'react-router-dom/dist';
import { useSelector } from 'react-redux';
import { getPostById } from '../../redux/postsRedux';
import { Card, Row, Col, Button } from 'react-bootstrap';
const Post = props => {
    const { id } = useParams();
    const posts = useSelector(state => getPostById(state, id));
    //sconsole.log(post);


    const onEdit = () => {
        console.log('onEdit');
    }

    const onDelete = () => {
        console.log('onDelete');
    }

    return (
        <>
            {posts.map(post => <Card className="mb-3 rounded-3 shadow-sm">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col xs={8}>
                            <Card.Title className="d-inline">{post.title}</Card.Title>
                        </Col>
                        <Col xs={4} className="text-end">
                            <Button variant="outline-primary" onClick={onEdit} className="me-2">Edit</Button>
                            <Button variant="outline-danger" onClick={onDelete}>Delete</Button>
                        </Col>
                    </Row>
                    <Card.Subtitle className="mb-2 text-muted">{post.author} | {post.publishedDate}</Card.Subtitle>
                    <Card.Text>{post.description}</Card.Text>
                </Card.Body>
            </Card>)}
        </>

    );
};

export default Post; 