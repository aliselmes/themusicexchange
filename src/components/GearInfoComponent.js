import React, { Component } from 'react';
import { Media, ButtonGroup, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
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

class GearItemInfo extends Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
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

    validate(yourname, youremail, yourmessage) {

        const errors = {
            yourname: '',
            youremail: '',
            yourmessage: ''
        };

        if (this.state.touched.yourname) {
            if (yourname.length < 2) {
                errors.yourname = 'Your name must be at least 2 characters.';
            } else if (yourname.length > 25) {
                errors.yourname = 'Your name must be 25 or less characters.';
            }
        }

        if (this.state.touched.youremail && !youremail.includes('@')) {
            errors.youremail = 'Email should contain a @';
        }

        if (this.state.touched.yourmessage) {
            if (yourmessage.length < 20) {
                errors.yourmessage = 'Message must be at least 20 characters.';
            } else if (yourmessage.length > 500) {
                errors.yourmessage = 'Message must be 500 or less characters.';
            }
        }

        return errors;

    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state));
        {/*alert("Current state is: " + JSON.stringify(this.state));*/}
        this.setState({
            isSubmitted: true
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {

        const errors = this.validate(this.state.yourname, this.state.youremail, this.state.yourmessage);

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
                            <ButtonGroup size="lg">
                                <Link to="/">
                                    <Button id="buy-btn"><i class="fa fa-dollar"></i> Buy</Button>
                                </Link>
                                <Link onClick={this.toggleModal}>
                                    <Button id="message-seller-btn" className="mx-2"><i class="fa fa-envelope" ></i> Message Seller</Button>
                                </Link>
                                {this.props.item.trade ? 
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

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Message Seller</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup >
                                    <Label htmlFor="yourname">Your Name</Label>   
                                    <Input type="text" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        value={this.state.yourname}
                                        invalid={errors.yourname}
                                        onBlur={this.handleBlur("yourname")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.yourname}</FormFeedback>    
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="youremail">Your Email</Label>   
                                        <Input type="text" id="youremail" name="youremail"
                                            placeholder="Your Email"
                                            value={this.state.youremail}
                                            invalid={errors.youremail}
                                            onBlur={this.handleBlur("youremail")}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.youremail}</FormFeedback>  
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="yourmessage">Your Message</Label>
                                    <Input type="textarea" id="yourmessage" name="yourmessage"
                                        rows="12"
                                        value={this.state.yourmessage}
                                        onChange={this.handleInputChange}
                                        value={this.state.yourmessage}
                                        invalid={errors.yourmessage}
                                        onBlur={this.handleBlur("yourmessage")}
                                        ></Input>
                                    <FormFeedback>{errors.yourmessage}</FormFeedback> 
                                </FormGroup>

                                <Button type="submit" value="submit" color="primary">Send</Button>
                            </Form>
                            {this.state.isSubmitted ? <p className="mt-2 text-success">Message Sent!</p> : <div></div>}
                        </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default GearItemInfo;