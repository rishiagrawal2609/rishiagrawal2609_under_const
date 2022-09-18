import React from "react";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact">
      <div className="contentful">
        <span>{"What's Next?"}</span>
        <h2>{"Get in touch"}</h2>
        <p>
          {
            "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
          }
        </p>
        <button>Say Hello</button>
      </div>
      <footer>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          designmed by me
        </a>
      </footer>
    </section>
  );
}
