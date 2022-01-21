import React from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wrru4gk",
        "template_0n853qs",
        e.target,
        "user_Efr64ejrjGHpufYer9AqW"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  }

  return (
    <div
      id="contact"
      className="pt-5"
      style={{
        marginTop: "50px",
        width: "100%",
        backgroundImage: `url('https://wallpaperforu.com/wp-content/uploads/2019/10/daniil-silantev-F6Da4r2x5to-unsplash-scaled.jpg')`,
        backgroundPasition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form action="#" className="contact-form" onSubmit={sendEmail}>
              <div className="contact-title">
                <h3 className="text-center mb-4 text-white">CONTACT</h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" name="name" placeholder="Full Name" />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-md-6">
                  <input type="text" name="text" placeholder="Your Address" />
                </div>
                <div className="col-md-6">
                  <input type="text" name="phone" placeholder="Phone Number" />
                </div>
                <div className="col-md-12">
                  <textarea name="message" placeholder="Message Here" />
                </div>
                <div className="col-md-12">
                  <div className="contact-btn mb-5 text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
