import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import Image from './ImageDisplay';

// This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  // Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  // Function which is called whenever the component is updated
  componentDidUpdate(prevProps) {

    // Get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  // Function to Load the customer details data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({ customerDetails: response.data })
    })
  };

  render() {
    const { customerDetails } = this.state;
    return (
      <Card>
        <Card.Header>Customer Details</Card.Header>
        <Card.Body>
          {customerDetails ? (
            <div>
              <p>Name: {customerDetails.name}</p>
              <p>Email: {customerDetails.email}</p>
              <p>Picture: {customerDetails.picture}</p>
              {/* Ajoutez d'autres détails du client ici */}
              <Image width='200' height='200' imageName={customerDetails.picture}></Image>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Card.Body>
      </Card>
    );
  }
}