import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

function RenderDirectoryItem({item}) {
    return (
        <Card>
            <CardImg width="50%" src={item.image} alt={item.name} fluid/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>
                    <p>Used: {item.used}</p>
                    <p>${item.price}</p>
                    <p>{item.location}</p>
                </CardText>
            </CardBody>
        </Card>
    );
}

function Directory(props) {

    const directory = props.items.map(item => {
        return (
            <div key={item.id} className="col-6 col-md-3">
                <RenderDirectoryItem item={item}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Browse Items</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                    {directory}
            </div>
        </div>
    );
}

export default Directory;