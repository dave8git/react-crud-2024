import { useParams } from 'react-router-dom/dist';

const AddPost = props => {
    const { listId } = useParams();
    
    return (
        <>
            <h1>AddPost `${listId}`</h1>
        </>
    );
};

export default AddPost; 