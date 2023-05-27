import React, { Component } from 'react';

import Mailchimp from 'react-mailchimp-form'
 
class NewsletterSubscribe extends Component {
  render() {
    return (
        <Mailchimp
        action="https://rakeoff.us21.list-manage.com/subscribe/post?u=ef0fad5ed1a6285ffe9c45838&amp;id=977ae0a44a&amp;f_id=00af50e1f0"
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}

        messages = {
          {
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!"
          }
        }
        
        />
    );
  }
}
 
export default NewsletterSubscribe;