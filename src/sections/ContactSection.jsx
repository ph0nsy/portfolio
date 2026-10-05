import { useState } from "react";
import { CONTACT_EMAIL, CONTACT_ENDPOINT } from "../config";

const MESSAGES = {
  sending: "Sending...",
  sent: "Message sent. I will get back to you at the address you gave.",
  error: `The message could not be sent. Try again, or write directly to ${CONTACT_EMAIL}.`,
};

function ContactSection() {
  /* 'idle' | 'sending' | 'sent' | 'error' */
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    /* Honeypot! Real people never see or fill this field, bots usually do. */
    if (data._gotcha) { return; }

    /* No backend configured, hand the message to the visitor's own mail client (for now). */
    if (!CONTACT_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
      const body = encodeURIComponent(
        `${data.message}\n\n${data.name} <${data.email}>`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    const date = new Date();
    const inputValue = {
      'Date': date.toLocaleString(),
      'Name': form.email.value,
      'Email': form.email.value,
      'Message': form.email.value,
    };
    const formData = new FormData();
    Object.keys(inputValue).forEach((key) => { 
      formData.append(key, inputValue[key])
    });

    setStatus("sending");
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        console.error('Request failed:', response);
        throw new Error(`HTTP ${response.status}`); 
      } 
      else{
        console.error('Request succeded:', response);
        form.reset();
        setStatus("sent");
      }
    } catch(err) {
      setStatus("error");
      console.error('Error during fetch:', err);
    }
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact__title">
        Get in touch
      </h2>

      <form className="contact__form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="field field--wide">
          <span>Message</span>
          <textarea name="message" rows={6} required />
        </label>
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          className="visually-hidden"
          aria-hidden="true"
        />

        <button
          type="submit"
          className="button cursor-target"
          disabled={status === "sending"}
        >
          Send message
        </button>
        <p className="contact__status" role="status">
          {status == 'sending' && <span className="contact__loader"></span>} {/* From https://cssLoaders.github.io/ */}
          {MESSAGES[status] ?? ""}
        </p>
      </form>
    </section>
  );
}

export default ContactSection;