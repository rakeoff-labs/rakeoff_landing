import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

const NewsletterSubscribe = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  const handleSubmit = (formData) => {
    console.log("Form data:", formData);
    // Perform any additional logic or API calls here
  };

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <Newsletter
          status={status}
          message={message}
          onValidated={handleSubmit}
          subscribe={subscribe}
        />
      )}
    />
  );
};

export default NewsletterSubscribe;
