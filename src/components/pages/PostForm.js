import { useParams, Navigate, useNavigate } from 'react-router-dom/dist';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const PostForm = props => {
    console.log(123, props);
    const { listId } = useParams();
    const [title, setTItle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || ''); 
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.description || '');
    const [content, setContent] = useState(props.content || '');

    const handleTitleChange = (e) => setTItle(e.target.value); // title
    const handleAuthorChange = (e) => setAuthor(e.target.value);
    const handlePublishedDateChange = (e) => setPublishedDate(e.target.value);
    const handleShortDescriptionChange = (e) => setShortDescription(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const handleAction = e => {
        e.preventDefault();
        props.action({ title, author, publishedDate, shortDescription, content });
    }
    

    return (
        <>
            <h1>PostForm `${listId}`</h1>
            <h2 className="my-4">Create a New Post</h2>
            <Form onSubmit={handleAction}>
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
                    <Form.Control type="text" value={publishedDate} onChange={handlePublishedDateChange} />
                </Form.Group>

                {/* Short Description Field */}
                <Form.Group controlId="formShortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter a short description" value={shortDescription} onChange={handleShortDescriptionChange}/>
                </Form.Group>

                {/* Main Content Field */}
                <Form.Group controlId="formMainContent">
                    <Form.Label>Main Content</Form.Label>
                    <Form.Control as="textarea" rows={20} placeholder="Enter the main content" value={content} onChange={handleContentChange} />
                </Form.Group>

                {/* Add Post Button */}
                <Button variant="primary" type="submit">
                    {props.actionText}
                </Button>
            </Form>
        </>
    );
};

// PostForm.propTypes = {
//     action: propTypes.func.isRequired, 
//     actionText: propTypes.string,
// }

export default PostForm; 