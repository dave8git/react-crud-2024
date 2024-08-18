import { useParams, Navigate, useNavigate } from 'react-router-dom/dist';
import { useState } from 'react';
import { addPost } from '../../redux/store';
import { useDispatch } from 'react-redux';
import PostForm from './PostForm';

const AddPost = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { listId } = useParams();

    const handleSubmit = post => {
        console.log('post', post);
        dispatch(addPost(post));
  
        navigate('/')
    }

    return (
        <>
            <h1>AddPost `${listId}`</h1>
            <h2 className="my-4">Create a New Post</h2>
            <PostForm action={handleSubmit} actionText="Add post" />
        </>
    );
};

export default AddPost; 