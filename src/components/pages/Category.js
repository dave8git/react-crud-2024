import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { getAllCategories, getUniqueObjects } from '../../redux/postsRedux';

const Category = (props) => {
    const [selectedItem, setSelectedItem] = useState(props.selected);
    const categories = useSelector(getAllCategories); 
    const uniqueObjects = useSelector(getUniqueObjects);
    console.log('uniqueObjects', uniqueObjects);
    console.log('categories', categories);

    const handleSelect = useCallback((category) => {
        setSelectedItem(category);// <-- nie musimy używać tej funkcji ponieważ category przyjdzie od rodzica, i tam będzie zapisane w stanie lokalny i zmieniane
        props.action(category);
        console.log('handleSelect category', category);
    }, [setSelectedItem]);
    return (
        <DropdownButton
            id="dropdown-basic-button"
            title={selectedItem || "Proszę wybrać kategorię:"}
            onSelect={handleSelect}
        >
        {categories.map((category, index) => (<Dropdown.Item key={index} eventKey={category}>{category}</Dropdown.Item>))};
            
            
        </DropdownButton>
    );
}

export default Category;