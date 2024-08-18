import { useParams, useNavigate } from 'react-router-dom/dist';
import PostForm from './PostForm';
import { getPostById } from '../../redux/postsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { editPost } from '../../redux/store';

const EditPost = props => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log('!', id);
    const postData = useSelector(state => getPostById(state, id));

    console.log('postData', postData);

    const handleSubmit = post => {
        console.log('post', post);
        console.log('{...post, listId}', {...post, id: id});
        dispatch(editPost({...post, id}));
        //dispatch()
        navigate('/');
    }

    console.log('postData', postData);
    return (
        <>
            <h1>EditPost `${id}`</h1>
            <h2 className="my-4">Create a New Post</h2>
            <PostForm {...postData} action={handleSubmit} actionText={"Edit Post"} />
        </>
    );
};

export default EditPost; 