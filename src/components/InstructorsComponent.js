import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardImgOverlay, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderInstructor({item}) {
    return(
        <Card id="instructor-card">
            <Link to={`/instructors/${item.id}`}>
                <CardImg width="100%" src={item.image} alt={item.name} img-fluid className="instructor-img"></CardImg>
                <CardBody>
                    <CardTitle tag="h4" style={{color: "#D77A61"}}>{item.name}</CardTitle>
                    <CardSubtitle className="mb-1"><strong>{item.instrument}</strong></CardSubtitle>
                    <CardSubtitle>{item.location}</CardSubtitle>
                </CardBody>
            </Link>
        </Card>
    );
}


class Instructors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }


        

    render() {

        console.log(this.props.instructors)
        let filteredItems = this.props.instructors.instructors.filter(
            (item) => {
                return item.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1 ;
            }
        ) ;

        return(
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h2>Find Instructors</h2>
                    </div>
                </div>
                <hr />
                <div className="row mb-3">
                    <div className="col-md-4">
                        <Form>
                            <FormGroup>
                                <Label htmlFor="location">Search your community:</Label>
                                <Input type="text" placeholder="Enter town/city"
                                    value={this.state.search}
                                    onChange={this.updateSearch.bind(this)}
                                />
                            </FormGroup>   
                        </Form>
                    </div>
                </div>
                <div className="row">
                    {filteredItems.map(item => 
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