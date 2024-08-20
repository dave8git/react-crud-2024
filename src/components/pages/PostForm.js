import { useParams, Navigate, useNavigate } from 'react-router-dom/dist';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Category from './Category';
import { format } from 'date-fns';
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-quill/dist/quill.snow.css';

const PostForm = props => {
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    console.log(123, props);
    const [title, setTItle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || ''); 
    const [publishedDate, setPublishedDate] = useState(props.publishedDate ? new Date(props.publishedDate) : new Date());
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [category, setCategory] = useState(props.category);

    const handleTitleChange = (e) => setTItle(e.target.value); // title
    const handleAuthorChange = (e) => setAuthor(e.target.value);
    const handlePublishedDateChange = (date) => setPublishedDate(date);
    const handleShortDescriptionChange = (e) => setShortDescription(e.target.value);
    const handleContentChange = (value) => setContent(value); // React Quill wymaga żeby przekazywany był jeden argument, e.target.value nie zadziała (tak jest obsługiwane przez komponent ReactQuill)

    const handleCategoryChange = (value) => setCategory(value);

    const handleAction = e => {
        setContentError(!contentError);
        setDateError(!dateError);
        //e.preventDefault();
        if(content && publishedDate) {
            const formattedDate = format(publishedDate, 'MM-dd-yyyy');
            props.action({ title, author, publishedDate: formattedDate, shortDescription, content, category });
        }
        
    }
    

    return (
        <>
            <h2 className="my-4">Create a New Post</h2>
            <Form onSubmit={validate(handleAction)}>
                {/* Title Field */}
                <Form.Group controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        {...register("title", { required: true, minLength: 3 })}
                        type="text" 
                        placeholder="Enter post title" 
                        value={title} 
                        onChange={handleTitleChange}
                    />
                    {errors.title && <small className="d-block form-text tet-danger mt-2">This field is required</small>}
                </Form.Group>

                {/* Author Field */}
                <Form.Group controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control 
                        {...register("author", { required: true, minLength: 3})}
                        type="text" 
                        placeholder="Enter author name" 
                        value={author} 
                        onChange={handleAuthorChange} 
                    />
                    {errors.author && <small className="d-block form-text tet-danger mt-2">This field is required</small>}
                </Form.Group>

                {/* Published Date Field */}
                <Form.Group controlId="formPublished">
                    <Form.Label>Published Date</Form.Label>
                    {/* <Form.Control type="text" value={publishedDate} onChange={handlePublishedDateChange} /> */}
                    <DatePicker 
                        selected={publishedDate}
                        onChange={handlePublishedDateChange}
                        dateFormat="yyyy/MM/dd"
                        />
                {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
                </Form.Group>

                {/* Short Description Field */}
                <Form.Group controlId="formShortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control 
                        {...register("shortDescription", { required: true, minLength: 20})}
                        as="textarea" 
                        rows={3} 
                        placeholder="Enter a short description" 
                        value={shortDescription} 
                        onChange={handleShortDescriptionChange}
                    />
                    {errors.shortDescription && <small className="d-block form-text tet-danger mt-2">This field is required</small>}
                </Form.Group>

                {/* Main Content Field */}
                <Form.Group controlId="formMainContent">
                    <Form.Label>Main Content</Form.Label>
                    <ReactQuill theme="snow" value={content} onChange={handleContentChange} />
                    {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
                </Form.Group>

                <Category selected={category} action={handleCategoryChange} />
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