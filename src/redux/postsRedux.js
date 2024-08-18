import shortid from 'shortid';

//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);

//actions
const createActionName = actionName => `app/posts/${actionName}`;
// const DELETE_POST = createActionName('DELETE_POST');
// const ADD_POST = createActionName('ADD_POST');


//action creators
const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case 'DELETE_POST': 
            return statePart.filter(post => post.id !== action.payload);
        case 'ADD_POST': 
            return [...statePart, {...action.payload, id: shortid()}];
        case 'EDIT_POST':
        console.log('action.payload.id', action.payload);
         return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
        default: 
            return statePart;
    };
};

export default postsReducer;