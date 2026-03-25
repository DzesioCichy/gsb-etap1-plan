import { useState } from 'react'
import './App.css'
import RouteMap from './components/RouteMap'
import Schedule from './components/Schedule'
import Logistics from './components/Logistics'
import Nutrition from './components/Nutrition'

function App() {
  const [activeTab, setActiveTab] = useState('map')

  const tabs = [
    { id: 'map', label: '🗺️ Mapa', icon: '🗺️' },
    { id: 'schedule', label: '📅 Harmonogram', icon: '📅' },
    { id: 'logistics', label: '🎒 Logistyka', icon: '🎒' },
    { id: 'nutrition', label: '🍲 Żywienie', icon: '🍲' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-black bg-opacity-50 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-red-500">GSB Etap 1</h1>
              <p className="text-gray-400 text-sm mt-1">Główny Szlak Beskidzki: Ustroń → Hala Boracza</p>
              <p className="text-gray-500 text-xs mt-1">20–22 Marca 2026 | 53 km | +2300 m wzniesienia</p>
            </div>
            <div className="text-right">
              <div className="text-2xl">🏔️</div>
              <p className="text-xs text-gray-400 mt-2">Przygotowanie: E-Military Boss</p>
            </div>
          </div>

          {/* Nawigacja tabulacyjna */}
          <nav className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Główna zawartość */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'map' && (
          <div className="space-y-6">
            <div className="section-card">
              <h2 className="text-2xl font-bold text-red-500 mb-4">Interaktywna Mapa Trasy</h2>
              <RouteMap />
              <div className="mt-4 text-sm text-gray-400">
                <p><strong>Legenda:</strong> 🟢 Start | 🔴 Schroniska | 🟡 Szczyty | 🔵 Parking</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="section-card">
              <h2 className="text-2xl font-bold text-yellow-400 mb-4">Harmonogram Wyprawy</h2>
              <p className="text-gray-400 mb-6">Kliknij na dzień, aby rozwinąć szczegóły.</p>
              <Schedule />
            </div>
          </div>
        )}

        {activeTab === 'logistics' && (
          <div className="space-y-6">
            <div className="section-card">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Logistyka i Kontakty</h2>
              <Logistics />
            </div>
          </div>
        )}

        {activeTab === 'nutrition' && (
          <div className="space-y-6">
            <div className="section-card">
              <h2 className="text-2xl font-bold text-green-400 mb-4">Plan Żywieniowy</h2>
              <Nutrition />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 border-t border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>GSB Etap 1 Plan | Przygotowany przez Manus AI | Marzec 2026</p>
          <p className="mt-2">Powodzenia na szlaku! 🏔️</p>
        </div>
      </footer>
    </div>
  )
}

export default App
