import React, { Component } from 'react';
import XContact from './XContact';
import AddContact from './AddContact';
import {connect} from 'react-redux';
import ContactActionCreators from '../contactActions';
class XContactList extends Component {
    componentDidMount(){
        this.props.getContacts();
       }
    render() {
        const contactList = this.props.contacts.map((contact, index) => (
            <XContact key={index}
                id={contact._id}
                fname={contact.fname}
                lname={contact.lname}
                pnumber={contact.pnumber}
                email={contact.email} 
                onFormSubmit={this.props.onFormSubmit}
                handleDelete={this.props.handleDelete}/>
        ));
        return (
            <div>
                {contactList}
                <AddContact />
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return {
      contacts:state,
    }
  }
  const mapDispatchToProps=(dispatch)=>({
    getContacts:()=>dispatch(ContactActionCreators.getContacts())
  }
  )
  const contactCont = connect(mapStateToProps,mapDispatchToProps)(XContactList);
  export default contactCont;