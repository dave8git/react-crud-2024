import { useParams, Navigate, useNavigate } from 'react-router-dom/dist';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { addPost } from '../../redux/store';
import { useDispatch } from 'react-redux';

const AddPost = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { listId } = useParams();
    const [title, setTItle] = useState('');
    const [author, setAuthor] = useState(''); 
    const [publishedDate, setPublishedDate] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => setTItle(e.target.value);
    const handleAuthorChange = (e) => setAuthor(e.target.value);
    const handlePublishedDateChange = (e) => setPublishedDate(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addPost({title: title, author: author, publishedDate: publishedDate, content: content, shortDescription: description}));
        console.log({
            title,
            author, 
            publishedDate, 
            description, 
            content
        })
        navigate('/');
    }

    return (
        <>
            <h1>AddPost `${listId}`</h1>
            <h2 className="my-4">Create a New Post</h2>
            <Form onSubmit={handleSubmit}>
                {/* Title Field */}
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter post title" value={title} onChange={handleTitleChange}/>
                </Form.Group>

                {/* Author Field */}
                <Form.Group controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter author name" value={author} onChange={handleAuthorChange} />
                </Form.Group>

                {/* Published Date Field */}
                <Form.Group controlId="formPublished">
                    <Form.Label>Published Date</Form.Label>
                    <Form.Control type="date" value={publishedDate} onChange={handlePublishedDateChange} />
                </Form.Group>

                {/* Short Description Field */}
                <Form.Group controlId="formShortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter a short description" value={description} onChange={handleDescriptionChange}/>
                </Form.Group>

                {/* Main Content Field */}
                <Form.Group controlId="formMainContent">
                    <Form.Label>Main Content</Form.Label>
                    <Form.Control as="textarea" rows={20} placeholder="Enter the main content" value={content} onChange={handleContentChange} />
                </Form.Group>

                {/* Add Post Button */}
                <Button variant="primary" type="submit">
                    Add Post
                </Button>
            </Form>
        </>
    );
};

export default AddPost; 