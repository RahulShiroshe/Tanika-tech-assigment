import React from 'react'
import "./contact.css"
import emailjs from "emailjs-com";

function Contact() {
    const formRef = React.useRef();
  
    const handleSubmit = (e) => {
                var params = {
            from_name : document.getElementById("user-name").value,
            email_id : document.getElementById("user-email").value,
            from_subject : document.getElementById("user-subject").value,
            message : document.getElementById("messege").value
        }
      e.preventDefault();
      emailjs.send('service_64v019g', 'template_19to9kz', params)
        .then(function(response) {
                    document.getElementById("f-root").innerHTML = 'SUCCESS!';
                 }, function(error) {
                    alert('FAILED...', error);
                 });
    };
  return (
    <>
        <section className="contact" id="contact">
        <div className="row">

            <div className="content">
                <h3 className="title">Contact info</h3>
                <div className="info">
                    <h3><i className="fa fa-envelope"></i> rahulphiroshe@gmail.com</h3>
                    <h3><i className="fa fa-phone"></i> (+91) 79722 05933</h3>
                    <h3><i className="fa fa-phone"></i> (+91) 94226 85155</h3>
                    <h3><i className="fa fa-map-marker-alt"></i> 70 Washington Square South, New York, NY 10012, United States</h3>
                </div>
            </div>

            <form id="myform" ref={formRef} onSubmit={handleSubmit} >
                <input type="text" minlength="4" maxlength="20" id="user-name" placeholder="name" className="box" required />
                <input type="email" id="user-email" placeholder="email" className="box" required />
                <input type="text" minlength="3" maxlength="20" id="user-subject" placeholder="subject" className="box" required />
                <textarea id="messege" cols="30" rows="10" placeholder="Messege" className="box messege" required></textarea>
                {/* <button className="c-btn btn" type="submit" >Send <i className="fa fa-paper-plane"></i></button> */}
                <button className="c-btn btn" >Submit <i className="fa fa-paper-plane"></i></button>
                {/* <button className="c-btn btn" type="submit" onSubmit={()=>sendMsg()} >Send <i className="fa fa-paper-plane"></i></button> */}
                <div id="f-root"></div>
            </form>
        </div>
    </section>
    </>
  )
}

export default Contact