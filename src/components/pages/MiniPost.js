import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MiniPost = ({id, title, author, publishedDate, shortDescription, category}) => {


    return (
        <>
            <Card className="rounded-3 shadow-sm">
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {author} 
                    </Card.Subtitle>
                    <Card.Text>
                        {publishedDate}
                    </Card.Text>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Card.Text>
                        <b>Category:</b> {category}
                    </Card.Text>
                    <Link to={`/post/${id}`}>
                        <Button variant="primary">Read More</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default MiniPost; 