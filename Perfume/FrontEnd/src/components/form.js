import React, { Component } from 'react';
import axios from 'axios';
import './form.css';


class Orderform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perId: '',
      perfumebrands: '',
      perfumeedition: '',
      available: '',
      price: '',
      perfumeflavours: ''
     
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleperIdChange = (event) => {
  //   this.setState({ perId: event.target.value });
  // }
  // handleBookNameChange = (event) => {
  //   this.setState({perfumebrands: event.target.value });
  // }
  // handleAuthorNameChange = (event) => {
  //   this.setState({ perfumeedition: event.target.value });
  // }
  // handleAvailableChange = (event) => {
  //   this.setState({ available: event.target.value });
  // }
  // handlePriceChange = (event) => {
  //   this.setState({ price: event.target.value });
  // }
  // handleperfumeflavoursChange = (event) => {
  //   this.setState({ perfumeflavours: event.target.value });
  // }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }); 
}
  
  handleSubmit(event) {
    event.preventDefault();
    const orderData = {
      perId: parseInt(this.state.bookId),
      perfumebrands: this.statperfumeedition,
      perfumeedition: this.state.perfumeedition,
      available: this.state.available,
      price: this.state.price,
     perfumeflavours:this.state.perfumeflavours
    };
    
    console.log(orderData)
    axios.post('http://127.0.0.1:8080/save', orderData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>PERFUME</h2>
        <input
          placeholder='perId'
          type="text"
          name="bookId"
         
          onChange={this.handleChange}
        />
        <input
          placeholder="perfumebrands"
          type="text"
          name="perfumeedition"
          
          onChange={this.handleChange}
        />
        <input
          placeholder='perfumeedition'
          type="text"
          name="perfumeedition"
         
          onChange={this.handleChange}
        />
        <input
          placeholder='available'
          type="text"
          name="available"
       
          onChange={this.handleChange}
        />
       

        <input
          placeholder='price'
          type="text"
          name="price"
       
          onChange={this.handleChange}
        />
        <input
          placeholder='perfumeflavours'
          type="text"
          name="perfumeflavours"
         
          onChange={this.handleChange}
        />

       
                <button>SUBMIT</button>
            </form>
        );
    }
}
export default Orderform;