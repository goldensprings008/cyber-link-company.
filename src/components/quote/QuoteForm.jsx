// QuoteForm.jsx
// ---------------------------------------------------------
// Main quote form for Cyber Link Company.
//
// This component collects information from a customer who
// wants to start a project.
//
// The form currently works on the frontend only.
// Later, we can connect it to a backend, database, email
// service, or another submission system.
// ---------------------------------------------------------

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Mail,
  Phone,
  User,
  FileText,
  Loader2,
} from 'lucide-react'
import ServiceSelector from './ServiceSelector'
import QuoteSuccess from './QuoteSuccess'

const initialFormData = {
  service: '',
  specificService: '',
  name: '',
  email: '',
  phone: '',
  projectDetails: '',
  budget: '',
  timeline: '',
}

function QuoteForm() {
  const [formData, setFormData] = useState(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  function handleServiceChange(service) {
    setFormData((previous) => ({ ...previous, service, specificService: '' }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    // Simulate processing delay then show success
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1800)
  }

  function handleReset() {
    setFormData(initialFormData)
    setSubmitted(false)
  }

  if (submitted) {
    return <QuoteSuccess onReset={handleReset} />
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Step 1 */}
      <ServiceSelector
        activeService={formData.service}
        onServiceChange={handleServiceChange}
      />

      {/* Step 2 */}
      <section>
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
            Step 2
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            Tell us about your project
          </h2>

          <p className="mt-2 text-sm leading-6 text-white/45">
            Give us enough information to understand what
            you want to create.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Specific service */}
          <div className="md:col-span-2">
            <label
              htmlFor="specificService"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Specific service
            </label>

            <input
              id="specificService"
              name="specificService"
              type="text"
              value={formData.specificService}
              onChange={handleChange}
              placeholder="e.g. Website development, networking, electronic repair, photography, event production"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#009090]/50"
            />
          </div>

          {/* Project details */}
          <div className="md:col-span-2">
            <label
              htmlFor="projectDetails"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Project details
            </label>

            <div className="relative">
              <FileText
                size={18}
                className="pointer-events-none absolute left-5 top-5 text-white/25"
              />

              <textarea
                id="projectDetails"
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}
                required
                rows={7}
                placeholder="Tell us about your idea, what you need, your goals, and any important details."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-12 py-4 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#009090]/50"
              />
            </div>
          </div>

          {/* Budget */}
          <div>
            <label
              htmlFor="budget"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Estimated budget
            </label>

            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none transition-colors focus:border-[#009090]/50"
            >
              <option value="" className="bg-neutral-950">
                Select a range
              </option>

              <option
                value="Under UGX 500,000"
                className="bg-neutral-950"
              >
                Under UGX 500,000
              </option>

              <option
                value="UGX 500,000 - 1,000,000"
                className="bg-neutral-950"
              >
                UGX 500,000 - 1,000,000
              </option>

              <option
                value="UGX 1,000,000 - 5,000,000"
                className="bg-neutral-950"
              >
                UGX 1,000,000 - 5,000,000
              </option>

              <option
                value="UGX 5,000,000+"
                className="bg-neutral-950"
              >
                UGX 5,000,000+
              </option>

              <option
                value="Not sure yet"
                className="bg-neutral-950"
              >
                Not sure yet
              </option>
            </select>
          </div>

          {/* Timeline */}
          <div>
            <label
              htmlFor="timeline"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Desired timeline
            </label>

            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none transition-colors focus:border-[#009090]/50"
            >
              <option value="" className="bg-neutral-950">
                Select a timeline
              </option>

              <option
                value="As soon as possible"
                className="bg-neutral-950"
              >
                As soon as possible
              </option>

              <option
                value="Within 1 month"
                className="bg-neutral-950"
              >
                Within 1 month
              </option>

              <option
                value="1 - 3 months"
                className="bg-neutral-950"
              >
                1 - 3 months
              </option>

              <option
                value="3+ months"
                className="bg-neutral-950"
              >
                3+ months
              </option>

              <option
                value="Flexible"
                className="bg-neutral-950"
              >
                Flexible
              </option>
            </select>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section>
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
            Step 3
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-white">
            How can we reach you?
          </h2>

          <p className="mt-2 text-sm leading-6 text-white/45">
            Give us your contact details so we can respond
            to your project request.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Full name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Full name
            </label>

            <div className="relative">
              <User
                size={18}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-12 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#009090]/50"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Email address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-12 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#009090]/50"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="md:col-span-2">
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Phone / WhatsApp
            </label>

            <div className="relative">
              <Phone
                size={18}
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/25"
              />

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+256 ..."
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-12 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-[#009090]/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Submit */}
      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-5 text-white/30">
            By submitting this form, you are asking Cyber Link Company
            to review your project requirements and contact you
            about the next steps.
          </p>

          <motion.button
            type="submit"
            disabled={submitting}
            whileHover={submitting ? {} : { y: -2 }}
            whileTap={submitting ? {} : { scale: 0.97 }}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#f07000] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(240,112,0,0.35)] transition-all hover:bg-[#d96400] disabled:cursor-not-allowed disabled:opacity-80"
          >
            {submitting ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Submit Request
                <ArrowRight size={17} />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </form>
  )
}

export default QuoteForm