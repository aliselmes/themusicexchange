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

function GearDirectory(props) {

    const directory = props.items.map(item => {
        return (
            <div key={item.id} className="col-12 col-md-3 mb-2">
                <RenderDirectoryItem item={item}/>
            </div>
        );
    });

    return (
        <div className="container my-5">
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

export default GearDirectory;