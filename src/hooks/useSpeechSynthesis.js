import { useState, useEffect, useRef } from 'react'

export function useSpeechSynthesis() {
  const [voices, setVoices] = useState([])
  const [speaking, setSpeaking] = useState(false)
  const [paused, setPaused] = useState(false)
  const [selectedVoice, setSelectedVoice] = useState(null)
  const [rate, setRate] = useState(1)
  const [pitch, setPitch] = useState(1)
  const [text, setText] = useState('')
  const [selection, setSelection] = useState(null)
  const utteranceRef = useRef(null)

  useEffect(() => {
    function loadVoices() {
      const availableVoices = window.speechSynthesis.getVoices()
      setVoices(availableVoices)
      
      // Выбираем русский голос по умолчанию
      const russianVoice = availableVoices.find(v => v.lang.startsWith('ru'))
      if (russianVoice) {
        setSelectedVoice(russianVoice)
      }
    }

    loadVoices()
    window.speechSynthesis.onvoiceschanged = loadVoices
  }, [])

  const speak = () => {
    if (!text.trim()) return

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    if (selectedVoice) {
      utterance.voice = selectedVoice
    }
    utterance.rate = rate
    utterance.pitch = pitch
    utterance.lang = selectedVoice?.lang || 'ru-RU'

    utterance.onstart = () => {
      setSpeaking(true)
      setPaused(false)
    }
    utterance.onend = () => {
      setSpeaking(false)
      setPaused(false)
    }
    utterance.onerror = () => {
      setSpeaking(false)
      setPaused(false)
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  const speakRange = (start, end) => {
    if (!text.trim()) return
    if (start < 0) start = 0
    if (end > text.length) end = text.length
    if (start >= end) return

    window.speechSynthesis.cancel()

    const rangeText = text.substring(start, end)
    const utterance = new SpeechSynthesisUtterance(rangeText)
    if (selectedVoice) {
      utterance.voice = selectedVoice
    }
    utterance.rate = rate
    utterance.pitch = pitch
    utterance.lang = selectedVoice?.lang || 'ru-RU'

    utterance.onstart = () => {
      setSpeaking(true)
      setPaused(false)
    }
    utterance.onend = () => {
      setSpeaking(false)
      setPaused(false)
    }
    utterance.onerror = () => {
      setSpeaking(false)
      setPaused(false)
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  const speakSelection = () => {
    const textarea = document.querySelector('textarea')
    if (!textarea || !text) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    setSelection({ start, end })

    if (start === end) {
      // Нет выделения — читаем весь текст
      speak()
    } else {
      speakRange(start, end)
    }
  }

  const pause = () => {
    window.speechSynthesis.pause()
    setPaused(true)
  }

  const resume = () => {
    window.speechSynthesis.resume()
    setPaused(false)
  }

  const stop = () => {
    window.speechSynthesis.cancel()
    setSpeaking(false)
    setPaused(false)
  }

  return {
    text,
    setText,
    voices,
    selectedVoice,
    setSelectedVoice,
    rate,
    setRate,
    pitch,
    setPitch,
    selection,
    setSelection,
    speaking,
    paused,
    speak,
    speakRange,
    speakSelection,
    pause,
    resume,
    stop,
  }
}
