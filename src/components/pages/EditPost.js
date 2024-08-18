import { useParams } from 'react-router-dom/dist';

const EditPost = props => {
    const { listId } = useParams();
    
    return (
        <>
            <h1>EditPost `${listId}`</h1>
            <h2 className="my-4">Create a New Post</h2>

        </>
    );
};

export default EditPost; 