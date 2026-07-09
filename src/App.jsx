import TextEditor from './components/TextEditor'
import Controls from './components/Controls'
import VoiceSettings from './components/VoiceSettings'
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis'

export default function App() {
  const {
    text, setText,
    voices, selectedVoice, setSelectedVoice,
    rate, setRate, pitch, setPitch,
    selection,
    speaking, paused,
    speak, speakSelection, pause, resume, stop,
  } = useSpeechSynthesis()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-700 sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 
                          flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-white truncate">Dictor</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Левая колонка — Текст и управление */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Редактор текста */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700">
              <TextEditor text={text} setText={setText} selection={selection} />
            </div>

            {/* Управление */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700">
              <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Управление</h2>
              <Controls
                speaking={speaking}
                paused={paused}
                speak={speak}
                speakSelection={speakSelection}
                pause={pause}
                resume={resume}
                stop={stop}
              />
            </div>
          </div>

          {/* Правая колонка — Настройки голоса */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700 lg:sticky lg:top-20">
              <h2 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Настройки голоса</h2>
              <VoiceSettings
                voices={voices}
                selectedVoice={selectedVoice}
                setSelectedVoice={setSelectedVoice}
                rate={rate}
                setRate={setRate}
                pitch={pitch}
                setPitch={setPitch}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-gray-500">
          Dictor — Озвучка текста с помощью Web Speech API
        </div>
      </footer>
    </div>
  )
}
