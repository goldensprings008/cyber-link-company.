// HeroTyping.jsx
// ---------------------------------------------------------
// Typing effect for the home hero.
//
// Behaviour:
//   - "CYBER LINK COMPANY" types out once.
//   - Once the full phrase is visible the cursor fades away.
//   - The container reserves its full height up-front so the
//     hero layout never shifts or shakes.
// ---------------------------------------------------------

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PHRASE = 'CYBER LINK COMPANY'
const TYPING_SPEED_MS = 85 // ms per character

function HeroTyping() {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (displayed.length < PHRASE.length) {
      const t = setTimeout(() => {
        setDisplayed(PHRASE.slice(0, displayed.length + 1))
      }, TYPING_SPEED_MS)
      return () => clearTimeout(t)
    } else {
      // Give a brief moment, then hide the cursor
      const t = setTimeout(() => setDone(true), 600)
      return () => clearTimeout(t)
    }
  }, [displayed])

  // Split the displayed text into coloured word tokens.
  // "CYBER" → orange, "LINK" → teal, "COMPANY" → white
  const renderTokens = () => {
    const words = ['CYBER', 'LINK', 'COMPANY']
    let remaining = displayed
    const tokens = []

    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const separator = i < words.length - 1 ? ' ' : ''

      if (remaining.length === 0) break

      const chunk = remaining.slice(0, word.length)
      remaining = remaining.slice(word.length)
      if (separator) remaining = remaining.slice(1) // consume space

      const className =
        i === 0
          ? 'text-[#f07000]'
          : i === 1
          ? 'text-[#009090]'
          : 'text-white'

      tokens.push(
        <span key={word} className={className}>
          {i > 0 && '\u00A0'}
          {chunk}
        </span>
      )

      if (remaining.length === 0) break
    }

    return tokens
  }

  return (
    // min-h reserves the full line height so the hero content
    // below never jumps when the text animates in.
    <div className="relative min-h-[1.1em]">
      <div className="flex items-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          aria-label="CYBER LINK COMPANY"
        >
          {renderTokens()}
        </motion.span>

        {/* Blinking cursor — fades out once typing is complete */}
        <AnimatePresence>
          {!done && (
            <motion.span
              key="cursor"
              aria-hidden="true"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              exit={{ opacity: 0 }}
              transition={{
                animate: { duration: 0.9, repeat: Infinity, ease: 'easeInOut' },
                exit: { duration: 0.4 },
              }}
              className="ml-2 inline-block h-[0.9em] w-[3px] bg-[#f07000] sm:ml-3"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HeroTyping