import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({item}) {
    return (
        <Card id="directory-card">
            <Link to={`/geardirectory/${item.id}`}>
                <CardImg width="100%" src={item.image} alt={item.name} img-fluid/>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>
                        <p>Used: {item.used}</p>
                        <p>${item.price}</p>
                        <p>{item.location}</p>
                        {item.trade ? <p className="text-success">Trades Accepted</p> : <p className="text-danger">No Trades</p> }
                    </CardText>
                </CardBody>
            </Link>
        </Card>
    );
}

export default RenderDirectoryItem;