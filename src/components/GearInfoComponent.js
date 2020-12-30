import React, { Component } from 'react';
import { Media, ButtonGroup, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from "react-redux-form";


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

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const isNumber = val => !isNaN(+val);

class GearItemInfo extends Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleTradeModal = this.toggleTradeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTradeSubmit = this.handleTradeSubmit.bind(this);

        this.state = {
            isModalOpen: false,
            isTradeModalOpen: false,
            yourname: '',
            youremail: '',
            yourmessage: '',
            tradeitem: '',
            tradevalue: '',
            tradeitemdescription: '',
            touched: {
                yourname: false,
                youremail: false,
                yourmessage: false,
                tradeitem: false,
                tradevalue: false,
                tradeitemdescription: false
            },
            isSubmitted: false,
        };

    }



    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        this.toggleModal();
        {/*alert("Current state is: " + JSON.stringify(this.state));*/}
        this.setState({
            isSubmitted: true
        });
    }

    handleTradeSubmit() {
        this.toggleTradeModal();
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        console.log(this.state.isModalOpen)
    }

    toggleTradeModal() {
        this.setState({
            isTradeModalOpen: !this.state.isTradeModalOpen
        });
        console.log(this.state.isTradeModalOpen)
    } 

   

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {
                    this.props.item
                    ?
                    <div className="row">
                        <RenderGearItem item={this.props.item} />
                    </div>  
                    :
                    <div></div>  
                    }
                    <div className="row">
                        <div className="col">
                                <Button id="buy-btn"><i class="fa fa-dollar"></i> Buy</Button>
                                             
                                <Button onClick={this.toggleModal} id="message-seller-btn" className="mx-2"><i className="fa fa-envelope" ></i> Message Seller</Button>
                               
                                {this.props.item.trade ?        
                                <Button onClick={this.toggleTradeModal} className="mt-3 mt-sm-0" id="trade-btn"><i className="fa fa-exchange"></i> Trade</Button>  
                                :
                                <div></div>
                                }   
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

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Message Seller</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <Label htmlFor="yourname">Your Name</Label>   
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(20)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 20 characters or less'
                                        }}    
                                    />   
                                </div>

                                <div className="form-group">
                                    <Label htmlFor="youremail">Your Email</Label>   
                                        <Control.text model=".youremail" id="youremail" name="youremail"
                                            placeholder="Your Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors  
                                        className="text-danger"
                                        model=".youremail"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}   
                                    />   
                                </div>

                                <div className="form-group">
                                    <Label htmlFor="yourmessage">Your Message</Label>
                                    <Control.textarea model=".yourmessage" id="yourmessage" name="yourmessage"
                                        rows="12"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(20),
                                            maxLength: maxLength(500)
                                        }}
                                    />
                                    <Errors  
                                        className="text-danger"
                                        model=".yourmessage"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 20 characters',
                                            maxLength: 'Must be 500 characters or less'
                                        }}   
                                    />  
                                </div>

                                <Button type="submit" value="submit" color="primary">Send</Button>
                            </LocalForm>
                            {this.state.isSubmitted ? <p className="mt-2 text-success">Message Sent!</p> : <div></div>}
                        </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isTradeModalOpen} toggle={this.toggleTradeModal}>
                        <ModalHeader toggle={this.toggleTradeModal}>Offer a Trade</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={this.handleTradeSubmit}>
                                <div className="form-group">
                                    <Label htmlFor="yourname">Your Name</Label>   
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(20)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 20 characters or less'
                                        }}    
                                    />   
                                </div>

                                <div className="form-group">
                                    <Label htmlFor="youremail">Your Email</Label>   
                                        <Control.text model=".youremail" id="youremail" name="youremail"
                                            placeholder="Your Email"
                                            className="form-control"
                                            validators={{
                                                required,
                                                validEmail
                                            }}
                                        />
                                        <Errors  
                                        className="text-danger"
                                        model=".youremail"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}   
                                    />   
                                </div>

                                <div className="form-group">
                                    <Label htmlFor="tradeitem">Trade Item</Label>
                                    <Control.text model=".tradeitem" id="tradeitem" name="tradeitem"
                                        className="form-control"
                                        placeholder="What item are you offering to trade?"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(20)
                                        }}
                                    />
                                    <Errors  
                                        className="text-danger"
                                        model=".tradeitem"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 20 characters or less'
                                        }}   
                                    />  
                                </div>

                                <div className="form-group">
                                    <Label htmlFor="tradevalue">Trade Item Estimated Value</Label>
                                    <Control.text model=".tradevalue" id="tradevalue" name="tradevalue"
                                        className="form-control"
                                        placeholder="Enter a USD ($) amount"
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />
                                    <Errors  
                                        className="text-danger"
                                        model=".tradevalue"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            isNumber: 'Must be a number'
                                        }}   
                                    />  
                                </div>

                                <div className="form-group">
                                    <Label htmlFor="tradeitemdescription">Trade Item Description</Label>
                                    <Control.textarea model=".tradeitemdescription" id="tradeitemdescription" name="tradeitemdescription"
                                        rows="12"
                                        placeholder="Please describe the item you are offering to trade: Age, Condition, etc."
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(20),
                                            maxLength: maxLength(500)
                                        }}
                                    />
                                    <Errors  
                                        className="text-danger"
                                        model=".tradeitemdescription"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 20 characters',
                                            maxLength: 'Must be 500 characters or less'
                                        }}   
                                    />  
                                </div>

                                <Button type="submit" value="submit" color="primary">Send</Button>
                            </LocalForm>
                            {this.state.isSubmitted ? <p className="mt-2 text-success">Message Sent!</p> : <div></div>}
                        </ModalBody>
                </Modal>



            </React.Fragment>
        );
    }
}

export default GearItemInfo;