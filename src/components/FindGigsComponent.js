import React, { Component } from 'react';
import { Button, Label, Card, CardText, CardTitle, UncontrolledCollapse } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Gigs extends Component {
    constructor(props) {
        super(props);

        this.state={
            //venue: '',
            //yourLocation: '',
            //date: '',
            //time: '',
            //yourEmail: '',
            //details: '',
            search: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postGig(values.venueName, values.location, values.date, values.time, values.pay, values.email, values.description);
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    handleDelete(gig) {
        this.props.deleteGig(gig._id);
    }


    render() {
        console.log(this.props.gigs);

        let filteredItems = this.props.gigs.gigs.filter(
            (gig) => {
                return gig.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1 ;
            }
        ) ;

        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h2>Find Gigs</h2>
                    </div>
                </div>
                <hr />
                <div className="row mb-5">
                {
                    this.props.auth.isAuthenticated
                    ?
                    <div className="col-12 col-md-6">
                        <Button id="addgigtoggler">Click here to add a gig</Button>
                        <UncontrolledCollapse toggler="#addgigtoggler">
                        <LocalForm className="mt-3" onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="venueName">Venue</Label>
                                <Control.text id="venueName" name="venueName"
                                    model=".venueName"
                                    className="form-control"
                                    placeholder="Venue Name"
                                    //onChange={(e) => this.setState({ venue: e.target.value })}
                                    //value={this.state.venue}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="location">Location</Label>
                                <Control.text id="location" name="location"
                                    model=".location"
                                    className="form-control"
                                    placeholder="e.g. New York, NY"
                                    //onChange={(e) => this.setState({ yourLocation: e.target.value })}
                                    //value={this.state.yourLocation}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="date">Date</Label>
                                <Control.text id="date" name="date"
                                    model=".date"
                                    className="form-control"
                                    placeholder="e.g. 5/4/21"
                                    //onChange={(e) => this.setState({ date: e.target.value })}
                                    //value={this.state.date}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="time">Time</Label>
                                <Control.text id="time" name="time"
                                    model=".time"
                                    className="form-control"
                                    placeholder="e.g. 19:30"
                                    //onChange={(e) => this.setState({ time: e.target.value })}
                                    //value={this.state.time}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="pay">Pay</Label>
                                <Control.text id="pay" name="pay"
                                    model=".pay"
                                    className="form-control"
                                    placeholder="e.g. $50"
                                    //onChange={(e) => this.setState({ time: e.target.value })}
                                    //value={this.state.time}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="email">Venue Email</Label>
                                <Control.text id="email" name="email"
                                    model=".email"
                                    className="form-control"
                                    placeholder="e.g. example@example.com"
                                    //onChange={(e) => this.setState({ yourEmail: e.target.value })}
                                    //value={this.state.yourEmail}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="description">Details</Label>
                                <Control.textarea id="description" name="description"
                                    model=".description"
                                    className="form-control"
                                    placeholder="Provide details"
                                    rows="5"
                                    //onChange={(e) => this.setState({ details: e.target.value })}
                                    //value={this.state.details}
                                />
                            </div>
                            <Button type="submit">Add Gig</Button>
                        </LocalForm>
                        </UncontrolledCollapse>
                    </div>
                    :
                    <div></div>
                }
                    {/*<div className="col col-md-2">

                    </div>*/}
                    <div className="col-12 col-md-4 text-md-right mt-5 mt-md-0">
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
                        {filteredItems.map( gig =>
                        <div className="row my-3">
                            <div className="col">
                                <Card body id="gig-card">
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <CardTitle tag="h4">{gig.venueName}</CardTitle>
                                            <CardText><strong>{gig.location}</strong> - {gig.date} - {gig.time}</CardText> 
                                            <CardText>${gig.pay}</CardText> 
                                            <CardText>{gig.email}</CardText>    
                                            <CardText>{gig.description}</CardText>
                                        </div>
                                        {
                                        this.props.auth.isAuthenticated /*&& log these to check they are equal musician.author.username === this.props.auth.user.username */
                                        ?
                                        <div className="col-12 col-md-6 mt-3 mt-md-0">
                                            <Button outline color='danger' onClick={() => this.handleDelete(gig)}>
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

export default Gigs;