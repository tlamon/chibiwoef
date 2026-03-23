import { useState } from 'react'
import { Link } from 'react-router-dom'

const serviceOptions = [
  'Full Grooming – Dog',
  'Shampoo Bath & Blowout – Dog',
  'Cat Grooming',
  'Boarding / Daycare',
  'Add-On Service Only',
  'Other / Not sure yet',
]

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  petName: '',
  petType: '',
  service: '',
  date: '',
  notes: '',
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const handle = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const minDate = new Date().toISOString().split('T')[0]

  return (
    <main>
      <div className="page-hero">
        <span className="badge">Get in Touch</span>
        <h1 className="page-hero__title">Book a Visit</h1>
        <p className="page-hero__sub">
          Fill in the form and we'll confirm your appointment within 24 hours.
        </p>
      </div>

      <section className="contact">
        <div className="container">
          <div className="contact__grid">

            {/* ── Info column ── */}
            <div>
              <h2 className="contact__info-heading">Come say hello 👋</h2>
              <p className="contact__info-sub">
                We'd love to meet your furry family member. Drop by, give us a
                call, or send a message any day of the week.
              </p>

              <div className="contact-info-cards">
                <div className="info-card">
                  <span className="info-card__icon">📍</span>
                  <div>
                    <p className="info-card__label">Address</p>
                    <p className="info-card__value">
                      123 Maple Street
                      <small>Portland, OR 97201</small>
                    </p>
                  </div>
                </div>

                <div className="info-card">
                  <span className="info-card__icon">📞</span>
                  <div>
                    <p className="info-card__label">Phone</p>
                    <a href="tel:+15551234567" className="info-card__value">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="info-card">
                  <span className="info-card__icon">✉️</span>
                  <div>
                    <p className="info-card__label">Email</p>
                    <a
                      href="mailto:hello@pawsandwhiskers.com"
                      className="info-card__value"
                    >
                      hello@pawsandwhiskers.com
                    </a>
                  </div>
                </div>
              </div>

              <p className="hours-heading">Opening Hours</p>
              <dl className="hours-grid">
                <dt>Mon – Fri</dt>    <dd>8:00 am – 7:00 pm</dd>
                <dt>Saturday</dt>     <dd>9:00 am – 6:00 pm</dd>
                <dt>Sunday</dt>       <dd>10:00 am – 4:00 pm</dd>
                <dt>Public Holidays</dt><dd>Closed</dd>
              </dl>
            </div>

            {/* ── Booking form ── */}
            <div className="book-form-card">
              <h2 className="book-form-card__title">Book an appointment</h2>
              <p className="book-form-card__sub">
                We'll reach out to confirm within 24 hours.
              </p>

              {submitted ? (
                <div className="form-success">
                  <span>✅</span>
                  <span>
                    Thanks, <strong>{form.name}</strong>! We've received your
                    booking request and will be in touch shortly to confirm your
                    appointment.
                  </span>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="form-input"
                        required
                        value={form.name}
                        onChange={handle}
                        placeholder="Jane Smith"
                        autoComplete="name"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-input"
                        required
                        value={form.phone}
                        onChange={handle}
                        placeholder="(555) 000-0000"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="form-group form-full">
                      <label className="form-label" htmlFor="email">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input"
                        required
                        value={form.email}
                        onChange={handle}
                        placeholder="jane@example.com"
                        autoComplete="email"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="petName">
                        Pet's Name *
                      </label>
                      <input
                        id="petName"
                        name="petName"
                        className="form-input"
                        required
                        value={form.petName}
                        onChange={handle}
                        placeholder="Biscuit"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="petType">
                        Pet Type *
                      </label>
                      <select
                        id="petType"
                        name="petType"
                        className="form-select"
                        required
                        value={form.petType}
                        onChange={handle}
                      >
                        <option value="">Select…</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Rabbit</option>
                        <option>Bird</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="form-group form-full">
                      <label className="form-label" htmlFor="service">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="form-select"
                        required
                        value={form.service}
                        onChange={handle}
                      >
                        <option value="">Select a service…</option>
                        {serviceOptions.map(s => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group form-full">
                      <label className="form-label" htmlFor="date">
                        Preferred Date
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        className="form-input"
                        value={form.date}
                        onChange={handle}
                        min={minDate}
                      />
                    </div>

                    <div className="form-group form-full">
                      <label className="form-label" htmlFor="notes">
                        Additional Notes
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        className="form-textarea"
                        value={form.notes}
                        onChange={handle}
                        placeholder="Tell us about your pet's breed, coat, temperament, or any special needs…"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary form-submit">
                    Request Appointment →
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
