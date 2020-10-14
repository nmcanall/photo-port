import React, {useState} from 'react';
import {validateEmail} from "../../utils/helpers"

function ContactForm() {

    // Hook to manage error messages
    const [errorMessage, setErrorMessage] = useState("");

    // Hook to manage form data
    const [formState, setFormState] = useState({name: "", email: "", message: ""});
    const {name, email, message} = formState;

    // Function to manage the change of form data
    function handleChange(e) {
        if(e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            // Error message for invalid email
            if(!isValid) {
                setErrorMessage("Your email is invalid");
            }
            // Email format is valid
            else {
                setErrorMessage("");
            }
        }
        else {
            // Require name and message properties
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            }
            // Name and message is included, so no error
            else {
                setErrorMessage("");
            }
        }

        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value}); // e.target.name refers to attribute, not value (i.e. name, email, or message)
        }
    }

    // Function to manage submission of form data
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;