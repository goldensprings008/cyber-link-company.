import { useEffect, useState } from 'react'

function useTypingEffect(
  words = [],
 typingSpeed = 2000,
deletingSpeed = 70,
pauseDuration = 2500
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return

    const currentWord = words[wordIndex]
    let timeout

    if (words.length === 1 && !isDeleting && text === currentWord) return

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
    } else if (isDeleting && text === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((current) => (current + 1) % words.length)
      }, 0)
    } else {
      timeout = setTimeout(() => {
        setText((current) =>
          isDeleting
            ? current.slice(0, -1)
            : currentWord.slice(0, current.length + 1)
        )
      }, isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [
    words,
    wordIndex,
    text,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ])

  return {
    text,
    isDeleting,
    wordIndex,
  }
}

export default useTypingEffect