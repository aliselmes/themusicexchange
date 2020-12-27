import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const HomeJumbotron = (props) => {
    return (
      <div>
        <div>
          <Jumbotron fluid id="buyselltrade" className="my-4">
            <Container fluid>
              <h1 className="display-3">Buy. Sell. Trade. Locally.</h1>
              <p className="lead">Have gear you need to get off your hands? List an item for sale! Or, find musicians in your area with used gear to sell or trade.</p>
              <Link className="nav-link" to="/geardirectory">
                <Button>Browse</Button> 
              </Link>
            </Container>
          </Jumbotron>
        </div>
        <hr />
        <div>
          <Jumbotron fluid id="musiciansseeking" className="my-4">
            <Container fluid>
              <h1 className="display-3">Find Musicians Near You</h1>
              <p className="lead">Seeking musicians? Looking to join a band? Find like-minded people near you today.</p>
              <Link className="nav-link" to="/musicians">
                <Button>Search</Button> 
              </Link>
            </Container>
          </Jumbotron>
        </div>
        <hr />
        <div>
          <Jumbotron fluid id="gigs" className="my-4">
            <Container fluid>
              <h1 className="display-3">Play Local Venues</h1>
              <p className="lead">Looking for a gig? Local venues use US to search for musicians to hire!</p>
              <Link className="nav-link" to="/">
                <Button>Gigs</Button> 
              </Link>
            </Container>
          </Jumbotron>
        </div>
        <hr />
        <div>
          <Jumbotron fluid id="learn" className="my-4">
            <Container fluid>
              <h1 className="display-3">Learn With Local Instructors</h1>
              <p className="lead">Find an instructor near you and begin your musical journey!</p>
              <Link className="nav-link" to="/">
                <Button>Instructors</Button> 
              </Link>
            </Container>
          </Jumbotron>
        </div>
        <hr />



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