import { useParams } from 'react-router-dom/dist';

const Post = props => {
    const { id } = useParams();
    console.log(id);

    return (
        <>
            <h1>Post `${id}`</h1>
        </>
    );
};

export default Post; 