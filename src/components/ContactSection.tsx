"use client";

import React from "react";
import {
    Phone,
    Mail,
    MapPin
} from "lucide-react";
import "@/styles/contact.css";

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-info">
                <h2 className="contact-title">Contact</h2>

                <p className="contact-line">
                    <Phone className="contact-icon" />
                    086-7809746
                </p>

                <p className="contact-line">
                    <Mail className="contact-icon" />
                    mervynclyne@gmail.com
                </p>

                <p className="contact-line">
                    <MapPin className="contact-icon" />
                    Moore Street, Kilrush, County Clare, Ireland
                </p>
            </div>

            <div className="contact-map">
                <iframe
                    title="Google Maps - V15 VE08"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952.470642917784!2d-9.486083!3d52.638972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b57ec066e62d9%3A0xb3be22d319d3a9b3!2sV15%20VE08!5e0!3m2!1sen!2sie!4v1692152548761!5m2!1sen!2sie"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default ContactSection;
