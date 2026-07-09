export default function Controls({ speaking, paused, speak, speakSelection, pause, resume, stop }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4">
      {/* Кнопка Play */}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        {/* Кнопка Play */}
        <button
          onClick={speak}
          disabled={speaking && !paused}
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600 
                     hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed
                     text-white transition-all duration-200 transform hover:scale-105 active:scale-95
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                     focus:ring-offset-gray-900"
          title="Читать весь текст"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 sm:w-8 sm:h-8 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Кнопка Pause/Resume */}
        {speaking && (
          <button
            onClick={paused ? resume : pause}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-700 
                       hover:bg-gray-600 text-white transition-all duration-200 active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 
                       focus:ring-offset-gray-900"
            title={paused ? 'Продолжить' : 'Пауза'}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {paused ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>
        )}

        {/* Кнопка Stop */}
        {speaking && (
          <button
            onClick={stop}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600 
                       hover:bg-red-700 text-white transition-all duration-200 active:scale-95
                       focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 
                       focus:ring-offset-gray-900"
            title="Остановить"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6h12v12H6z" />
            </svg>
          </button>
        )}
      </div>

      {/* Кнопка "Читать выделенное" */}
      <button
        onClick={speakSelection}
        className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-700 
                   text-white rounded-lg transition-all duration-200 text-sm font-medium active:scale-95
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                   focus:ring-offset-gray-900 min-h-[44px]"
        title="Читать выделенный текст"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        <span className="truncate">Читать выделенное</span>
      </button>

      {/* Подсказка */}
      <p className="text-xs text-gray-500 text-center">
        Выдели текст мышкой и нажми кнопку выше
      </p>
    </div>
  )
}
