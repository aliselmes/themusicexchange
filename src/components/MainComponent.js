import React, { Component } from 'react';
import GearDirectory from './GearDirectoryComponent';
import GearItemInfo from './GearInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ITEMS } from '../shared/items';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ITEMS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        const GearItemWithId = ({match}) => {
            return (
                <GearItemInfo item={this.state.items.filter(item => item.id === +match.params.itemId)[0]}/>
            );
        };

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/geardirectory' render={() => <GearDirectory items={this.state.items}/>}/>
                    <Route path='/geardirectory/:itemId' component={GearItemWithId} />
                    <Route path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;