import React, { Component } from 'react';
import Contact from './Contact';
import AddContact from './AddContact';
import {connect} from 'react-redux';
import ContactActionCreators from '../contactActions';
class XContactList extends Component {
    componentDidMount(){
        this.props.getContacts();
       }
    render() {
        return (
            <div>
                 <Contact 
                contacts = {this.props.contacts}
                onFormSubmit={this.props.onFormSubmit}
                handleDelete={this.props.handleDelete}/>
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