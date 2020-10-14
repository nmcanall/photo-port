import React, {useState} from 'react';

function ContactForm() {

    // Hook to manage form data
    const [formState, setFormState] = useState({name: "", email: "", message: ""});
    const {name, email, message} = formState;

    // Function to manage the change of form data
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value}); // e.target.name refers to attribute, not value (i.e. name, email, or message)
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
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" defaultValue={email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;