import React from 'react'
import ContactUs from '../ContactUs/ContactUs'

const ContactBlock = () => {
    return (
        <div className='contact-area'>
            <div className='container'>
                <div className='two-blocks-contact'>
                    <div className='contact-us-block'>
                        <ContactUs />
                    </div>
                    <div className='contact-details'>
                        <div className='contact-text'>
                            <h2>Contact Us</h2>
                            <p>We are always eager to connect with those who share our vision for the future of healthcare. Whether you&apos;re a healthcare professional interested in our products, a potential partner, or just want to learn more about what we do, we&apos;d love to hear from you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBlock