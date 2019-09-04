import React, { Component } from 'react';
import {
  injectStripe,
  PaymentRequestButtonElement
} from 'react-stripe-elements';

class PaymentRequestForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // For full documentation of the available paymentRequest options, see:
    // https://stripe.com/docs/stripe.js#the-payment-request-object
    const paymentRequest = props.stripe.paymentRequest({
      country: 'US',
      currency: 'usd',
      total: {
        label: 'Demo total',
        amount: 1000
      }
    });

    paymentRequest.on('token', ({ complete, token, ...data }) => {
      console.log('Received Stripe token: ', token);
      console.log('Received customer information: ', data);
      complete('success');
    });

    paymentRequest.canMakePayment().then(result => {
      this.setState({ canMakePayment: !!result });
    });

    this.state = {
      canMakePayment: true,
      paymentRequest
    };
  }

  render() {
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        paymentRequest={this.state.paymentRequest}
        className="PaymentRequestButton34567"
        style={{
          paymentRequestButton: {
            theme: 'light',
            height: '64px'
          }
        }}
      ></PaymentRequestButtonElement>
    ) : null;
  }
}
export default injectStripe(PaymentRequestForm);
