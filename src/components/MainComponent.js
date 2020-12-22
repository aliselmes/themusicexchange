import React, { Component } from 'react';
import GearDirectory from './GearDirectoryComponent';
import GearItemInfo from './GearInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return{
        items: state.items
    };
};


class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        const GearItemWithId = ({match}) => {
            return (
                <GearItemInfo item={this.props.items.filter(item => item.id === +match.params.itemId)[0]}/>
            );
        };

        return(
            <div>
                <Header />

                     <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route exact path='/geardirectory' render={() => <GearDirectory items={this.props.items}/>}/>
                        <Route path='/geardirectory/:itemId' component={GearItemWithId} />
                        <Route path='/aboutus' component={About} />
                        <Route path='/contactus' component={Contact} />
                        <Redirect to='/home' />
                    </Switch>

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));