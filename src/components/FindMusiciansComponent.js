import React, { Component } from 'react';
import { Button, Label, Card, CardText, CardTitle, UncontrolledCollapse } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';


class Musicians extends Component {
    constructor(props) {
        super(props);

        this.state={
            //postTitle: '',
            //yourLocation: '',
            //yourEmail: '',
            //yourMessage: '',
            search: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /*handleSubmit() {
        if (this.state.postTitle.length > 0 && this.state.yourLocation.length > 0 && this.state.yourEmail.length > 0 && this.state.yourMessage.length > 0) {
            this.props.addMusician(this.state.postTitle, this.state.yourLocation, this.state.yourEmail, this.state.yourMessage);
            this.setState({postTitle: '', yourLocation: '', yourEmail: '', yourMessage: ''})
        }
    }*/

    handleSubmit(values) {
        this.props.postMusician(values.title, values.location, values.email, values.message);
    }

    updateSearch(event) {
        this.setState({search: event.target.value}); 
    }

    handleDelete(musician) {
        this.props.deleteMusician(musician._id);
    }


    render() {
        console.log(this.props.musicians);

        let filteredItems = this.props.musicians.musicians.filter(
            (musician) => {
                return musician.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1 ;
            }
        ) ;

        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h2>Find Musicians</h2>
                    </div>
                </div>
                <hr />
                <div className="row mb-5">
                    {
                    this.props.auth.isAuthenticated
                    ?
                    <div className="col-12 col-md-6">
                        <Button id="addmusiciantoggler">Click here to add a post</Button>
                        <UncontrolledCollapse toggler="#addmusiciantoggler">
                        <LocalForm className="mt-3" onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="title">Post Title</Label>
                                <Control.text id="title" name="title"
                                    model=".title"
                                    className="form-control"
                                    placeholder="Add a Title"
                                    //onChange={(e) => this.setState({ postTitle: e.target.value })}
                                    //value={this.state.postTitle}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="location">Your Location</Label>
                                <Control.text id="location" name="location"
                                    model=".location"
                                    className="form-control"
                                    placeholder="e.g. New York, NY"
                                    //onChange={(e) => this.setState({ yourLocation: e.target.value })}
                                    //value={this.state.yourLocation}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="email">Your Email</Label>
                                <Control.text id="email" name="email"
                                    model=".email"
                                    className="form-control"
                                    placeholder="e.g. example@example.com"
                                    //onChange={(e) => this.setState({ yourEmail: e.target.value })}
                                    //value={this.state.yourEmail}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="message">Your Message</Label>
                                <Control.textarea id="message" name="message"
                                    model=".message"
                                    className="form-control"
                                    placeholder="Type your Message"
                                    rows="5"
                                    //onChange={(e) => this.setState({ yourMessage: e.target.value })}
                                    //value={this.state.yourMessage}
                                />
                            </div>
                            <Button /*onClick={() => this.handleSubmit()}*/ type="submit" /*value="submit"*/>Add a Post</Button>
                        </LocalForm>
                        </UncontrolledCollapse>
                    </div>
                    :
                    <div></div>
                    }

                    {/*<div className="col col-md-2">

                </div>*/}
                    <div className="col-12 col-md-4 mt-5 mt-md-0">
                        <LocalForm>
                            <div className="form-group">
                                <Label htmlFor="location">Search your community:</Label>
                                <Control.text model=".search" id="search" name="search" placeholder="Enter town/city"
                                    className="form-control"
                                    value={this.state.search}
                                    onChange={this.updateSearch.bind(this)}
                                />
                            </div>   
                        </LocalForm>
                    </div>
                </div>                  
                        {filteredItems.map( musician =>
                        <div className="row my-3">
                            <div className="col">
                                <Card body id="musician-card">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <CardTitle tag="h4">{musician.title}</CardTitle>
                                            <CardText><strong>{musician.location}</strong> - {musician.email}</CardText>     
                                            <CardText>{musician.message}</CardText>
                                        </div>
                                        {
                                        this.props.auth.isAuthenticated
                                        ?
                                        <div className="col-12 col-md-6 mt-3 mt-md-0">
                                            <Button outline color='danger' onClick={() => this.handleDelete(musician)}>
                                                Delete <i className='fa fa-times' />
                                            </Button>
                                        </div>
                                        :
                                        <div></div>
                                        }
                                    </div>
                                </Card>
                            </div>
                        </div>
                        )}                
            </div>
        );
    }

}

export default Musicians;