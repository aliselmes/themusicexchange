import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const HomeJumbotron = (props) => {
    return (
      <div>
        <Jumbotron id="jumbotron">
            <div id="jumbotron-container">
                <h1 className="display-3">Buy. Sell. Trade.</h1>
                <p className="lead">With The Music Exchange, YOU are in control.</p>
                <hr className="my-2" />
                <p>Shop thousands of used instruments, pro audio equipment, parts &amp; more. </p>
                <p>Easily post a listing and start selling your items today! </p>
                <p>View trade-in options and negotiate with the seller. </p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </div>
        </Jumbotron>
      </div>
    );
  };

  
function Home(props) {
    return (
        <div className="container">
            <HomeJumbotron />
        </div>
    );
}

export default Home;   