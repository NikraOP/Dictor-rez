export default function VoiceSettings({ voices, selectedVoice, setSelectedVoice, rate, setRate, pitch, setPitch }) {
  return (
    <div className="w-full space-y-4 sm:space-y-5">
      {/* Выбор голоса */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Голос
        </label>
        <select
          value={selectedVoice?.name || ''}
          onChange={(e) => {
            const voice = voices.find(v => v.name === e.target.value)
            setSelectedVoice(voice)
          }}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-xl 
                     text-sm sm:text-base text-white
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     transition-all duration-200 min-h-[44px]
                     appearance-none cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem' }}
        >
          {voices.length === 0 && (
            <option value="">Загрузка голосов...</option>
          )}
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </div>

      {/* Скорость речи */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-300">Скорость</label>
          <span className="text-sm text-gray-400 tabular-nums">{rate.toFixed(1)}x</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                     accent-blue-500 touch-manipulation"
          style={{ minHeight: '44px', padding: '0' }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Медленно</span>
          <span>Быстро</span>
        </div>
      </div>

      {/* Высота тона */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-300">Высота тона</label>
          <span className="text-sm text-gray-400 tabular-nums">{pitch.toFixed(1)}</span>
        </div>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={pitch}
          onChange={(e) => setPitch(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                     accent-purple-500 touch-manipulation"
          style={{ minHeight: '44px', padding: '0' }}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Низкий</span>
          <span>Высокий</span>
        </div>
      </div>
    </div>
  )
}
