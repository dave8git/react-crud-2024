import { useParams } from 'react-router-dom/dist';

const EditPost = props => {
    const { listId } = useParams();
    
    return (
        <>
            <h1>EditPost `${listId}`</h1>
        </>
    );
};

export default EditPost; 