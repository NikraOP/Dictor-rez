import { useRef, useEffect } from 'react'

export default function TextEditor({ text, setText, selection }) {
  const textareaRef = useRef(null)

  const getSelection = () => {
    const textarea = textareaRef.current
    if (!textarea) return { start: 0, end: 0 }
    return { start: textarea.selectionStart, end: textarea.selectionEnd }
  }

  const handleSelect = () => {
    const { start, end } = getSelection()
    if (start !== end) {
      const selectedText = text.substring(start, end)
      console.log(`Выделено: символы ${start}-${end} (${selectedText.length} символов)`)
    }
  }

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Текст для озвучки
      </label>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onSelect={handleSelect}
        onKeyUp={handleSelect}
        onClick={handleSelect}
        placeholder="Введите или вставьте текст здесь..."
        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl 
                   text-sm sm:text-base text-white placeholder-gray-500
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   resize-y sm:resize-none
                   min-h-[120px]
                   transition-all duration-200 touch-manipulation"
        style={{ WebkitAppearance: 'none' }}
      />
      <div className="flex flex-wrap justify-between items-center mt-2 text-xs sm:text-sm gap-1 sm:gap-2">
        <div className="flex flex-wrap gap-2 sm:gap-4 text-gray-500">
          <span>{text.length} символов</span>
          <span>{text.split(/\s+/).filter(Boolean).length} слов</span>
        </div>
        {selection && selection.start !== selection.end && (
          <span className="text-blue-400 font-medium text-xs sm:text-sm bg-blue-500/10 px-2 py-0.5 rounded">
            {selection.start}–{selection.end}
          </span>
        )}
      </div>
    </div>
  )
}
