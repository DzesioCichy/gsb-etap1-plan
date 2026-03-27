import { useState } from 'react'
import './App.css'
import RouteMap from './components/RouteMap'
import Schedule from './components/Schedule'
import Logistics from './components/Logistics'
import Nutrition from './components/Nutrition'
import { ETAP1_TITLE, ETAP1_SUBTITLE, ETAP1_DATE, ETAP1_DISTANCE, ETAP1_ELEVATION, ETAP1_TIME } from './data/routeData'
import { ETAP2_TITLE, ETAP2_SUBTITLE, ETAP2_DATE, ETAP2_DISTANCE, ETAP2_ELEVATION, ETAP2_TIME } from './data/etap2Data'

function App() {
  const [activeTab, setActiveTab] = useState('map')
  const [activeEtap, setActiveEtap] = useState('etap1')

  const etaps = [
    { id: 'etap1', label: 'Etap 1: Ustroń → Hala Boracza' },
    { id: 'etap2', label: 'Etap 2: Barania Góra → Turbacz' },
  ]

  const tabs = [
    { id: 'map', label: '🗺️ Mapa', icon: '🗺️' },
    { id: 'schedule', label: '📅 Harmonogram', icon: '📅' },
    { id: 'logistics', label: '🎒 Logistyka', icon: '🎒' },
    { id: 'nutrition', label: '🍲 Żywienie', icon: '🍲' },
  ]

  const etapData = activeEtap === 'etap1' 
    ? { title: ETAP1_TITLE, subtitle: ETAP1_SUBTITLE, date: ETAP1_DATE, distance: ETAP1_DISTANCE, elevation: ETAP1_ELEVATION, time: ETAP1_TIME }
    : { title: ETAP2_TITLE, subtitle: ETAP2_SUBTITLE, date: ETAP2_DATE, distance: ETAP2_DISTANCE, elevation: ETAP2_ELEVATION, time: ETAP2_TIME }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-black bg-opacity-50 border-b border-gray-700 sticky top-0 z-[9999]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Selektor Etapu */}
          <div className="mb-4 flex gap-2">
            {etaps.map(etap => (
              <button
                key={etap.id}
                onClick={() => setActiveEtap(etap.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                  activeEtap === etap.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {etap.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-red-500">{etapData.title}</h1>
              <p className="text-gray-400 text-sm mt-1">{etapData.subtitle}</p>
              <p className="text-gray-500 text-xs mt-1">{etapData.date} | {etapData.distance} | {etapData.elevation}</p>
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
              <RouteMap activeEtap={activeEtap} />
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
          <p>GSB Plan | Przygotowany przez Manus AI | Marzec 2026</p>
          <p className="mt-2">Powodzenia na szlaku! 🏔️</p>
        </div>
      </footer>
    </div>
  )
}

export default App
// Force rebuild: Fri Mar 27 09:20:58 EDT 2026
