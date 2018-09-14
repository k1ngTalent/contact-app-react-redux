import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ContactForm from './ContactForm';
class Contact extends Component {
    state = {
        _id: "",
        viewOpen: false,
        editOpen: false
    }
    handleEdit = (x) => {
        this.setState({
            _id: x,
            editOpen: true
        })
    }
    handleView = (x) => {
        this.setState({
            _id: x,
            viewOpen: !this.state.viewOpen,
        })
    }
    handleCancel = (x) => {
        this.setState({
            _id: "",
            editOpen: false,
        })
    }
    // handleDelete = ()=>{
    //     console.log(this.props.id);
    //     this.props.handleDelete(this.props.id)
    // }
    render() {
        return (
            this.props.contacts.map((contact, index) => (
                <div key={index}>
                    {this.state._id === contact._id && this.state.editOpen ?
                        <ContactForm
                            id={contact._id}
                            fname={contact.fname}
                            lname={contact.lname}
                            email={contact.email}
                            phonenumber={contact.phonenumber}
                            onFormCancel={this.handleCancel}
                        />
                        :
                        <div>
                            {this.state._id === contact._id && this.state.viewOpen ?
                                <div >
                                    <div onClick={this.handleView.bind(this, contact._id)}><span >{contact.fname}::{contact.lname}</span>
                                        <span>{contact.email}::{contact.phonenumber}</span>
                                    </div>
                                </div>
                                :
                                <div >
                                    <div onClick={this.handleView.bind(this, contact._id)}>{contact.fname}::{contact.lname}</div>
                                </div>
                            }

                            <Button bsStyle='warning' onClick={this.handleEdit.bind(this, contact._id)}>Edit</Button>
                            <Button bsStyle='danger' onClick={this.handleDelete}>Delete</Button>
                        </div>}

                    


                </div>




            ))
        )





    }
}
export default Contact;