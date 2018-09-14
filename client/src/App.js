import React, { Component } from 'react';
import XContactList from './components/XContactList';
import './App.css';
class App extends Component {
 
  // handleSubmit = (fields) => {
  //   console.log(fields)
  //   const field = {
  //     ...fields,
  //     id: uuid.v4()
  //   }
  //   const contacts = [...this.state.contacts, field];
  //   console.log(contacts);
  //   this.setState({ contacts });
  // }
  // handleEdit = (fields) => {
  //   this.setState({
  //     contacts: this.state.contacts.map((contact) => {
  //       if (contact.id === fields.id) {
  //         return Object.assign({}, contact,
  //           fields
  //         );
  //       } else {
  //         return contact;
  //       }
  //     })
  //   })
  // }
  // handleDelete = (id)=>{
  //   console.log(id);
  //   this.setState({
  //     contacts:this.state.contacts.filter(c=>c.id!==id)
  //   })
  //   }

    

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contact App</h1>
        </header>
        <div className="App-Body">
        <span className="content">
        <XContactList 
         />
        </span>
       </div>

      </div>
    );
  }
}
// const mapStateToProps=(state)=>{
//   return {
//     contacts:state
//   }
// }
// const mapDispatchToProps=(dispatch)=>({
//   getContacts:()=>dispatch(ContactActionCreators.getContacts())
// }
// )
// const contactCont = connect(mapStateToProps,mapDispatchToProps)(App);


export default App;
