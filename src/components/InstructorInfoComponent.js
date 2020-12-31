import React, { Component } from 'react';
import { Media, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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



class InstructorInfo extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return (
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
        );
    }
    
}

export default InstructorInfo;