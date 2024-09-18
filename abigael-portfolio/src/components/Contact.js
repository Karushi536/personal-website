// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-4">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <input type="text" name="name" placeholder="Your Name" required className="w-full mb-4 p-2 border rounded"/>
          <input type="email" name="email" placeholder="Your Email" required className="w-full mb-4 p-2 border rounded"/>
          <textarea name="message" placeholder="Your Message" required className="w-full mb-4 p-2 border rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
