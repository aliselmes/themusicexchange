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
import { addMusician, addGig } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return{
        items: state.Items,
        musicians: state.Musicians,
        instructors: state.Instructors,
        gigs: state.Gigs
    };
};

const mapDispatchToProps = {
    addMusician,
    addGig
}


class Main extends Component {

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
                <Header />

                     <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/geardirectory' render={() => <GearDirectory items={this.props.items}/>}/>
                        <Route path='/geardirectory/:itemId' component={GearItemWithId} />
                        <Route exact path='/musicians' render={() => <Musicians musicians={this.props.musicians} addMusician={this.props.addMusician}/>} />
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