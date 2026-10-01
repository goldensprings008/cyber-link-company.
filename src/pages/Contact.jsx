// Contact.jsx
// ---------------------------------------------------------
// Contact page for Cyber Link Company.
// ---------------------------------------------------------

import { motion } from 'framer-motion'

import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'

function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your questions, ideas, or project requirements.',
      value: 'hello@goldensprings.com',
      href: 'mailto:hello@goldensprings.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with us directly about your next project.',
      value: '+256 700 000 000',
      href: 'tel:+256700000000',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Reach us quickly through WhatsApp.',
      value: 'Chat with Cyber Link Company',
      href: 'https://wa.me/256700000000',
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#009090]/10 blur-[140px]" />

      {/* Hero */}
      <section className="relative px-6 pb-16 pt-28 sm:px-10 lg:px-16 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
              Get in Touch
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Let&apos;s start a
              <span className="block text-[#009090]">
                conversation.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              Have a project in mind, a question about our services,
              or simply want to connect? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact methods */}
      <section className="relative px-6 pb-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {contactMethods.map((method, index) => {
              const Icon = method.icon

              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={
                    method.href.startsWith('https://')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    method.href.startsWith('https://')
                      ? 'noreferrer'
                      : undefined
                  }
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-white/10 bg-neutral-950 p-7 transition-colors hover:border-[#009090]/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#009090]/20 bg-[#009090]/5 text-[#009090]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-white/20 transition-colors group-hover:text-[#009090]"
                    />
                  </div>

                  <h2 className="mt-7 text-xl font-semibold text-white">
                    {method.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {method.description}
                  </p>

                  <p className="mt-5 text-sm font-medium text-[#009090]">
                    {method.value}
                  </p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Location / response section */}
      <section className="relative border-y border-white/10 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
              Cyber Link Company
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Your idea starts with a conversation.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
              Whether you are looking for technology, media production,
              or event services, our team is ready to understand your
              needs and explore the right way forward.
            </p>

            <a
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#009090] px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-[#00a0a0]"
            >
              Request a Quote
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-neutral-950 p-8 sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#009090]/20 bg-[#009090]/5 text-[#009090]">
              <MapPin size={21} strokeWidth={1.7} />
            </div>

            <h3 className="mt-7 text-xl font-semibold text-white">
              Our Location
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/40">
              Cyber Link Company
              <br />
              Kampala, Uganda
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
                Response
              </p>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Send us a message and we&apos;ll get back to you
                as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#009090]">
            Cyber Link Company
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Technology is
            <span className="text-[#009090]">
              {' '}
              a necessity.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40">
            Digital. Media. Events. One group bringing ideas
            and experiences together.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact