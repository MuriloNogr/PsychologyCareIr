"use client";

import React from "react";
import "@/styles/contact.css";

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-info">
                <h2 className="contact-title">Contact</h2>
                <p>📞 087-1164550</p>
                <p>📧 mervynclyne@gmail.com</p>
                <p>📍 Moore Street, Kilrush, County Clare, Ireland</p>
            </div>

            <div className="contact-map">
                <iframe
                    title="Google Maps - Kilrush"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2403.878031979698!2d-9.484779223304314!3d52.63908667202043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b57ee7a6d51e3%3A0x1dbd0f3de1b2cb54!2sMoore%20St%2C%20Kilrush%2C%20Co.%20Clare%2C%20Ireland!5e0!3m2!1sen!2sie!4v1692152548761!5m2!1sen!2sie"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default ContactSection;
