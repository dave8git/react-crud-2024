import { useParams, Navigate } from 'react-router-dom/dist';
import { useSelector, useDispatch } from 'react-redux';
import { getPostById } from '../../redux/postsRedux';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom/dist';
import AppModal from '../views/AppModal';
import { useState } from 'react';
import { deletePost } from '../../redux/store';

const Post = props => {
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));
    //sconsole.log(post)
    const handleShow = () => setModalShow(true);
    const handleClose = () => setModalShow(false);

    const onEdit = () => {
        console.log('onEdit');
    }

    const handleDelete = () => {
        dispatch(deletePost(id));
    }

    // const onDelete = () => {
    //     console.log('onDelete');
    // }

    if(!post) return <Navigate to="/" />
    else return (
        <>
            <Card className="mb-3 rounded-3 shadow-sm">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col xs={8}>
                            <Card.Title className="d-inline">{post.title}</Card.Title>
                        </Col>
                        <Col xs={4} className="text-end">
                        <Link to={`/post/edit/${id}`}>
                            <Button variant="outline-primary" onClick={onEdit} className="me-2">Edit</Button>
                        </Link>
                            <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
                        </Col>

                        <AppModal show={modalShow} handleClose={handleClose} handleDelete={handleDelete} />

                        <Link to={`/post/${id}`}>
                        <Button variant="primary">Read More</Button>
                    </Link>


                    </Row>
                    <Card.Subtitle className="mb-2 text-muted">{post.author} | {post.publishedDate}</Card.Subtitle>
                    <Card.Text dangerouslySetInnerHTML={{ __html: post.content }}>{post.description}</Card.Text>
                </Card.Body>
            </Card>
        </>

    );
};

export default Post; 