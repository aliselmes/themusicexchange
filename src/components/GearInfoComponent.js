import React from 'react';
import { Media, ButtonGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderGearItem({item}) {
    return (
        <div className="col my-5">
            
            <Media>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <Media left >
                        <Media object width="100%" src={item.image} alt={item.name} />
                    </Media>
                </div>
                <div className="col-12 col-md-8">
                    <Media body>
                        <Media heading id="item-heading">
                            {item.name}
                        </Media>
                        <p>$ {item.price}</p>
                        {item.trade ? <p className="text-success">Trades Accepted</p> : <p className="text-danger">No Trades</p> }
                        <p className="text-muted">Category: {item.category}</p>
                        <p className="text-muted">Location: {item.location}</p>
                        <p>{item.description}</p>
                    </Media>
                </div>
            </div>
            </Media>
        </div>
    );
}

function GearItemInfo(props) {
    return (
        <div className="container">
            {
            props.item
            ?
            <div className="row">
                <RenderGearItem item={props.item} />
            </div>  
            :
            <div></div>  
            }
            <div className="row">
                <div className="col">
                    <ButtonGroup size="lg">
                        <Link to="/">
                            <Button id="buy-btn"><i class="fa fa-dollar"></i> Buy</Button>
                        </Link>
                        <Link to="/">
                            <Button id="message-seller-btn" className="mx-2"><i class="fa fa-envelope"></i> Message Seller</Button>
                        </Link>
                        {props.item.trade ? 
                            <Link to="/">
                                <Button id="trade-btn"><i class="fa fa-exchange"></i> Trade</Button>
                            </Link>
                        :
                        <div></div>
                        }
                    </ButtonGroup>
                </div>
            </div>
            <div className="row">
                <div className="col my-5">
                    <Link to="/geardirectory">
                        <Button><i class="fa fa-chevron-left"></i> Back</Button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col mb-5">
                    <h4>Have questions or comments? <Link to="/contactus" className="text-info">Contact us!</Link></h4>
                </div>
            </div>
        </div>
    );
}

export default GearItemInfo;