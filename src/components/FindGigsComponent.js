import React, { Component } from 'react';
import { Button, Label, Card, CardText, CardTitle, UncontrolledCollapse } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Gigs extends Component {
    constructor(props) {
        super(props);

        this.state={
            venue: '',
            yourLocation: '',
            date: '',
            time: '',
            yourEmail: '',
            details: '',
            search: ''
        };
    }

    handleSubmit() {
        if (this.state.venue.length > 0 && this.state.yourLocation.length > 0 && this.state.date.length > 0 && this.state.time.length > 0 && this.state.yourEmail.length > 0 && this.state.details.length > 0) {
            this.props.addGig(this.state.venue, this.state.yourLocation, this.state.date, this.state.time, this.state.yourEmail, this.state.details);
            this.setState({venue: '', yourLocation: '', date: '', time: '', yourEmail: '', details: ''})
        }
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }


    render() {
        console.log(this.props.gigs);

        let filteredItems = this.props.gigs.gigs.filter(
            (item) => {
                return item.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1 ;
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
                    <div className="col-12 col-md-6">
                        <Button id="addgigtoggler">Click here to add a gig</Button>
                        <UncontrolledCollapse toggler="#addgigtoggler">
                        <LocalForm className="mt-3">
                            <div className="form-group">
                                <Label htmlFor="title">Venue</Label>
                                <Control.text id="venue" name="venue"
                                    model=".venue"
                                    className="form-control"
                                    placeholder="Venue Name"
                                    onChange={(e) => this.setState({ venue: e.target.value })}
                                    value={this.state.venue}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="location">Location</Label>
                                <Control.text id="location" name="location"
                                    model=".location"
                                    className="form-control"
                                    placeholder="e.g. New York, NY"
                                    onChange={(e) => this.setState({ yourLocation: e.target.value })}
                                    value={this.state.yourLocation}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="gigdate">Date</Label>
                                <Control.text id="gigdate" name="gigdate"
                                    model=".gigdate"
                                    className="form-control"
                                    placeholder="e.g. 5/4/21"
                                    onChange={(e) => this.setState({ date: e.target.value })}
                                    value={this.state.date}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="gigtime">Time</Label>
                                <Control.text id="gigtime" name="gigtime"
                                    model=".gigtime"
                                    className="form-control"
                                    placeholder="e.g. 19:30"
                                    onChange={(e) => this.setState({ time: e.target.value })}
                                    value={this.state.time}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="email">Venue Email</Label>
                                <Control.text id="email" name="email"
                                    model=".email"
                                    className="form-control"
                                    placeholder="e.g. example@example.com"
                                    onChange={(e) => this.setState({ yourEmail: e.target.value })}
                                    value={this.state.yourEmail}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="details">Details</Label>
                                <Control.textarea id="details" name="details"
                                    model=".details"
                                    className="form-control"
                                    placeholder="Provide details"
                                    rows="5"
                                    onChange={(e) => this.setState({ details: e.target.value })}
                                    value={this.state.details}
                                />
                            </div>
                            <Button onClick={() => this.handleSubmit()} type="submit" value="submit">Add Gig</Button>
                        </LocalForm>
                        </UncontrolledCollapse>
                    </div>
                    <div className="col col-md-2">

                    </div>
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
                        {filteredItems.map( item =>
                        <div className="row my-3">
                            <div className="col">
                                <Card body id="gig-card">
                                    <CardTitle tag="h4">{item.venue}</CardTitle>
                                    <CardText><strong>{item.location}</strong> - {item.date} - {item.time}</CardText> 
                                    <CardText>{item.email}</CardText>    
                                    <CardText>{item.details}</CardText>
                                </Card>
                            </div>
                        </div>
                        )}                
            </div>
        );
    }

}

export default Gigs;