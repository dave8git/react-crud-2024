import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories, getUniqueObjects } from '../../redux/postsRedux';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CategoryPage = (props) => {
    const categories = useSelector(getAllCategories); 

    console.log('categories', categories);

    return (
        <>
             {categories.map(category => <NavLink to={`/post/category/${category}`}>{category}</NavLink>)}
        </>
       
      
    );
}

export default CategoryPage;