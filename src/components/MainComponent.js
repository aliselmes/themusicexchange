import React, { Component } from 'react';
import GearDirectory from './GearDirectoryComponent';
import GearItemInfo from './GearInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Musicians from './FindMusiciansComponent';
import Instructors from './InstructorsComponent';
import InstructorInfo from './InstructorInfoComponent';
import Gigs from './FindGigsComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMusicians, addGig, loginUser, logoutUser, postMusician, deleteMusician } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return{
        items: state.Items,
        musicians: state.musicians,
        instructors: state.Instructors,
        gigs: state.Gigs,
        auth: state.auth
    };
};

const mapDispatchToProps = {
    postMusician: (title, location, email, message) => (postMusician(title, location, email, message)),
    fetchMusicians: () => (fetchMusicians()),
    deleteMusician: (musicianId) => deleteMusician(musicianId),
    addGig,
    loginUser: creds => (loginUser(creds)),
    logoutUser: () => (logoutUser())
}


class Main extends Component {

    componentDidMount() {
        this.props.fetchMusicians();
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        const GearItemWithId = ({match}) => {
            return (
                <GearItemInfo item={this.props.items.items.filter(item => item.id === +match.params.itemId)[0]}/>
            );
        };

        const InstructorWithId = ({match}) => {
            return (
                <InstructorInfo instructor={this.props.instructors.instructors.filter(instructor => instructor.id === +match.params.instructorId)[0]} />
            );
        };

        return(
            <div>
                <Header auth={this.props.auth} 
                    loginUser={this.props.loginUser} 
                    logoutUser={this.props.logoutUser} 
                />

                     <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/geardirectory' render={() => <GearDirectory items={this.props.items}/>}/>
                        <Route path='/geardirectory/:itemId' component={GearItemWithId} />
                        <Route exact path='/musicians' render={() => <Musicians musicians={this.props.musicians} postMusician={this.props.postMusician} deleteMusician={this.props.deleteMusician} auth={this.props.auth}/>} />
                        <Route exact path='/instructors' render={() => <Instructors instructors={this.props.instructors}/>} />
                        <Route exact path='/gigs' render={() => <Gigs gigs={this.props.gigs} addGig={this.props.addGig} />} />
                        <Route path='/instructors/:instructorId' component={InstructorWithId} />
                        <Route path='/aboutus' component={About} />
                        <Route path='/contactus' component={Contact} />  
                        <Redirect to='/home' />
                    </Switch>

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));