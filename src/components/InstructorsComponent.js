import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function RenderInstructor({item}) {
    return(
        <Card id="instructor-card">
            <CardBody>
                <CardTitle tag="h4" style={{color: "#D77A61"}}>{item.name}</CardTitle>
                <CardSubtitle className="mb-1"><strong>{item.instrument}</strong></CardSubtitle>
                <CardSubtitle>{item.location}</CardSubtitle>
            </CardBody>
            <img width="100%" src={item.image} alt={item.name} img-fluid></img>
            <CardBody>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}


class Instructors extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h2>Find Instructors</h2>
                    </div>
                </div>
                <hr />
                <div className="row">
                    {this.props.instructors.instructors.map(item => 
                    <div className="col-12 col-md-6 col-lg-3 mb-2">
                        <RenderInstructor item={item} key={item.id}/>
                    </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Instructors;