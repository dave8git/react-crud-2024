import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, getPostsByCategory, getUniqueObjects } from '../../redux/postsRedux';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom';
import MiniPost from './MiniPost';

const CategoryPosts = (props) => {
    const { category }  = useParams();

    const posts = useSelector((state) => getPostsByCategory(state, category));

    console.log("posts", posts);

    return (
        <>
             {posts.map(post => <MiniPost {...post} />)}
        </>
       
      
    );
}

export default CategoryPosts;