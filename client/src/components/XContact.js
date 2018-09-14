import React,{Component} from 'react';
import ContactForm from './ContactForm';
import Contact from './Contact'
class XContact extends Component{
    state={
        _id:-1,
        editOpen:false
    };
    handleEdit=(x)=>{
            console.log(x)
            this.setState({
                _id:-1,
                editOpen:false
            })
            this.setState({
            _id:x,
                editOpen:!this.state.editOpen
            })
        }
        
    
    handleCancel=()=>{
        this.setState({
            _id:-1,
            editOpen:false
        })
    }
    handleSubmit=(fields)=>{
     console.log(fields);
     this.props.onFormSubmit(fields);
     this.setState({
        _id:-1,
         editOpen:false
     })
    }
    // handleDelete=(id)=>{console.log(id)
    //     this.props.handleDelete(id)
    // }
    render(){
            return( 
            this.state._id==this.props.id && this.state.editOpen==true ?
            <ContactForm
            id={this.props.id}
            fname={this.props.fname}
            lname={this.props.lname}
            pnumber={this.props.pnumber}
            email={this.props.email}
            onFormCancel={this.handleCancel}
            onFormSubmit={this.handleSubmit}
            />
        
        : <Contact 
           id={this.props.id}
           fname={this.props.fname}
           lname={this.props.lname}
           pnumber={this.props.pnumber}
           email={this.props.email}
           onFormEdit={this.handleEdit}
           handleDelete={this.props.handleDelete}
           />
            )  

};
}
export default XContact;