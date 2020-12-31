import React, { Component } from 'react';
import { Form, FormGroup, Input, Label,  } from 'reactstrap';
import RenderDirectoryItem from './RenderDirectoryItem';


class GearDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
    }

    render() {
        console.log(this.props.items)
        let filteredItems = this.props.items.items.filter(
            (item) => {
                return item.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1 ;
            }
        ) ;

        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h2>Browse Items</h2>
                        <hr />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <Form>
                            <FormGroup>
                                <Label htmlFor="location">Search your community:</Label>
                                <Input type="text" placeholder="Enter town/city"
                                    value={this.state.search}
                                    onChange={this.updateSearch.bind(this)}
                                />
                            </FormGroup>   
                        </Form>
                    </div>
                </div>
                <div className="row">
                    {filteredItems.map(item => {
                        return <div className="col-12 col-md-3 mb-2"><RenderDirectoryItem item={item} key={item.id} /></div>
                    })}    
                </div>
            </div>
        );
    }
}

export default GearDirectory;