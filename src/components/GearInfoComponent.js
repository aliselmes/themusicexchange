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

class GearItemInfo extends Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isModalOpen: false,
            yourname: '',
            youremail: '',
            yourmessage: '',
            touched: {
                yourname: false,
                youremail: false,
                yourmessage: false
            },
            isSubmitted: false
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

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        console.log(this.state.isModalOpen)
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
                                             
                                <Button onClick={this.toggleModal} id="message-seller-btn" className="mx-2"><i class="fa fa-envelope" ></i> Message Seller</Button>
                               
                                {this.props.item.trade ?        
                                <Button className="mt-3 mt-sm-0" id="trade-btn"><i class="fa fa-exchange"></i> Trade</Button>  
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

            </React.Fragment>
        );
    }
}

export default GearItemInfo;