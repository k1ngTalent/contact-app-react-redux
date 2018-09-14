import React, { Component } from 'react';
import {Button, ButtonToolbar, ControlLabel, Form, FormGroup, FormControl} from 'react-bootstrap';
class ContactForm extends Component {
    
    state = {
        fields: {
            id: this.props._id || "",
            fname: this.props.fname || "",
            lname: this.props.lname || "",
            email: this.props.email || "",
            pnumber: this.props.phonenumber || "",
        }
    };
    handleChange = (e) => {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields })
    }
    handleSubmit = (e) => {
        this.props.onFormSubmit(this.state.fields);
        this.setState({
            fields: {
                id: "",
                fname: "",
                lname: "",
                email: "",
                pnumber: "",
            }
        })
        e.preventDefault();
    }
    handleCancel = (e) => {
        e.preventDefault();
        this.props.onFormCancel();
        this.setState({
            fields: {
                fname: "",
                lname: "",
                email: "",
                pnumber: "",
            }
        })

    }
    render() {
        const submitText = this.props.id ? 'Update' : 'Add'
        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formInlineFirstName">
                        <ControlLabel>FirstName</ControlLabel>{' '}
                        <FormControl type='text' value={this.state.fields.fname} onChange={this.handleChange} name='fname' placeholder='Firstname' required='true' />
                    </FormGroup><br />
                    <FormGroup>

                        <ControlLabel>LastName</ControlLabel>
                        <FormControl type='text' value={this.state.fields.lname} onChange={this.handleChange} name='lname' placeholder='Lastname' required='true' /><br />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>
                            Email
                     </ControlLabel>
                        <FormControl type='text' value={this.state.fields.email} onChange={this.handleChange} name='email' placeholder='Email' required='true' /><br />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>
                            Phonenumber
                        </ControlLabel>
                        <FormControl type='text' value={this.state.fields.pnumber} onChange={this.handleChange} name='pnumber' placeholder='Phonenumber' required='true' /><br />

                    </FormGroup>
                    <ButtonToolbar>
                        <Button type='submit' bsStyle="success" >{submitText}</Button>
                        <Button bsStyle='warning' bsSize='xsmall' onClick={this.handleCancel}>Cancel</Button>
                    </ButtonToolbar>
                </Form>
            </div>
        )
    }
}
export default ContactForm;