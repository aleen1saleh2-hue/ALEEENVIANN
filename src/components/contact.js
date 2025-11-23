import React from "react";
import '../style/Contact.css';

function Contact() {
  const prisons = [
    {
      name: "سجن رومية",
      phones: ["+961 01 234567", "+961 01 234568"],
      emails: ["roumieh@lb.gov", "info@roumieh.lb"]
    },
    {
      name: "سجن يارزة",
      phones: ["+961 01 345678"],
      emails: ["yarze@lb.gov"]
    },
    {
      name: "سجن القبة (طرابلس)",
      phones: ["+961 06 765432"],
      emails: ["qubba@lb.gov"]
    },
    {
      name: "سجن زحلة",
      phones: ["+961 08 987654"],
      emails: ["zahle@lb.gov"]
    }
  ];

  return (
    <div className="contact-container">
      <h1>Contact Information of Prisons in Lebanon</h1>
      {prisons.map((prison, index) => (
        <div className="contact-card" key={index}>
          <h2>{prison.name}</h2>
          {prison.phones.map((phone, i) => (
            <p key={i}><strong>Phone:</strong> {phone}</p>
          ))}
          {prison.emails.map((email, i) => (
            <p key={i}><strong>Email:</strong> {email}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Contact;