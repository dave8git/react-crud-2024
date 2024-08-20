import shortid from 'shortid';

//selectors
export const getAllPosts = (state) => state.posts;
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);
export const getAllCategories = (state) => [...new Set(state.posts.map(post => post.category))];
export const getPostsByCategory = ({ posts }, category) => [posts.find(post => post.category === category)];
export const getUniqueObjects = ({posts}) => { // wyciąga unikalne obiekty 
    const results = [];
    posts.forEach(obj => {
        const index = results.findIndex((item) => item.id === obj.id);
        console.log(index);
        if(index < 0) {
            results.push(obj);
        }
    })

    return results; 
};
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
         return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
         default: 
            return statePart;
    };
};

export default postsReducer;