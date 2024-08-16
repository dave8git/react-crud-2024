import { Card, Button } from 'react-bootstrap';

const MiniPost = ({title, author, publishedDate, shortDescription}) => {


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
                    <Button variant="primary">Read More</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default MiniPost; 