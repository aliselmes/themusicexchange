import React, { Component } from 'react';
import { Media, Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from "react-redux-form";

function RenderInstructorInfo({instructor}) {
    return (
        <div className="col my-5">
            
            <Media>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <Media left >
                        <Media object width="100%" src={instructor.image} alt={instructor.name} />
                    </Media>
                </div>
                <div className="col-12 col-md-8">
                    <Media body>
                        <Media heading id="item-heading">
                            {instructor.name}
                        </Media>
                        <p><strong>{instructor.instrument}</strong></p>
                        <p className="text-muted">Location: {instructor.location}</p>
                        <p className="text-muted">Rate: ${instructor.rate}/hour</p>
                        {instructor.online === true ? <p className="text-success"><i className="fa fa-laptop"></i> Online Instruction Available</p> : <p className="text-danger">Online Instruction Unavailable</p>}
                        <h5>About {instructor.name}:</h5>
                        <p>{instructor.description}</p>
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



class InstructorInfo extends Component {
    constructor(props){
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
                yourmessage: false,
            },
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
                        this.props.instructor
                        ?
                        <div className="row">
                            <RenderInstructorInfo instructor={this.props.instructor} />
                        </div>  
                        :
                        <div></div>  
                    }
                    <div className="row">
                        <div className="col">
                            <Button onClick={this.toggleModal} id="message-instructor-btn" ><i className="fa fa-envelope" ></i> Message {this.props.instructor.name}</Button>
                        </div>
                    </div>
                    <div className="row">
                            <div className="col my-5">
                                <Link to="/instructors">
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
                        <ModalHeader toggle={this.toggleModal}>Message {this.props.instructor.name}</ModalHeader>
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
            </React.Fragment>
        );
    }
    
}

export default InstructorInfo;