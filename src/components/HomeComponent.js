import React from 'react';
import { Jumbotron, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

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

const HomeCards = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div className="col-12 col-md-4">
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div className="col-12 col-md-4">
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-4">
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div className="col-12 col-md-4">
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div className="col-12 col-md-4">
          <Card>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
  
function Home(props) {
    return (
        <div className="container">
            <HomeJumbotron />
            <HomeCards />
        </div>
    );
}

export default Home;   