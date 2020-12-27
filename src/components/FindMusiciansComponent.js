import React, { Component } from 'react';
import { Button, Label, Card, CardText, CardTitle } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Musicians extends Component {
    constructor(props) {
        super(props);

        this.state={
            postTitle: '',
            yourLocation: '',
            yourEmail: '',
            yourMessage: ''
        };
    }

    handleSubmit() {
        if (this.state.postTitle.length > 0 && this.state.yourLocation.length > 0 && this.state.yourEmail.length > 0 && this.state.yourMessage.length > 0) {
            this.props.addMusician(this.state.postTitle, this.state.yourLocation, this.state.yourEmail, this.state.yourMessage);
            this.setState({postTitle: '', yourLocation: '', yourEmail: '', yourMessage: ''})
        }
    }


    render() {
        console.log(this.props.musicians);
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h2>Find Musicians</h2>
                    </div>
                </div>
                <hr />
                <div className="row mb-5">
                    <div className="col col-md-6">
                        <LocalForm>
                            <div className="form-group">
                                <Label htmlFor="title">Post Title</Label>
                                <Control.text id="title" name="title"
                                    model=".title"
                                    className="form-control"
                                    onChange={(e) => this.setState({ postTitle: e.target.value })}
                                    value={this.state.postTitle}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="location">Your Location</Label>
                                <Control.text id="location" name="location"
                                    model=".location"
                                    className="form-control"
                                    onChange={(e) => this.setState({ yourLocation: e.target.value })}
                                    value={this.state.yourLocation}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="email">Your Email</Label>
                                <Control.text id="email" name="email"
                                    model=".email"
                                    className="form-control"
                                    onChange={(e) => this.setState({ yourEmail: e.target.value })}
                                    value={this.state.yourEmail}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="post">Your Message</Label>
                                <Control.textarea id="post" name="post"
                                    model=".post"
                                    className="form-control"
                                    rows="5"
                                    onChange={(e) => this.setState({ yourMessage: e.target.value })}
                                    value={this.state.yourMessage}
                                />
                            </div>
                            <Button onClick={() => this.handleSubmit()} type="submit" value="submit">Add a Post</Button>
                        </LocalForm>
                    </div>
                </div>

                
                    
                        {this.props.musicians.musicians.map( item =>
                        <div className="row my-3">
                            <div className="col">
                                <Card body>
                                    <CardTitle tag="h4">{item.title}</CardTitle>
                                    <CardText>{item.location}, {item.email}</CardText>
                                    <CardText>{item.message}</CardText>
                                </Card>
                            </div>
                        </div>
                        )}
                    
                
            </div>
        );
    }

}

export default Musicians;