import { useState } from 'react'
import './App.css'
import RouteMap from './components/RouteMap'
import Schedule from './components/Schedule'
import Logistics from './components/Logistics'
import Nutrition from './components/Nutrition'
import { ETAP1_TITLE, ETAP1_SUBTITLE, ETAP1_DATE, ETAP1_DISTANCE, ETAP1_ELEVATION, ETAP1_TIME } from './data/routeData_metadata'
import { Analytics } from '@vercel/analytics/react'

// Etap 2 data inline - avoid import issues
const ETAP2_DATA = {
  title: 'GSB Etap 2 - Barania Góra → Schronisko PTTK Turbacz',
  subtitle: 'Barania Góra → Schronisko PTTK Turbacz',
  date: '20-21 Maja 2026',
  startTime: '2:00 nad ranem (sobota)',
  endTime: 'wieczorem (niedziela)',
  distance: 114,
  elevation: 1313,
  time: '~20-22 godzin'
}

// Etap 3 data inline
const ETAP3_DATA = {
  title: 'GSB Etap 3 - Schronisko PTTK Turbacz → Wołosate',
  subtitle: 'Schronisko PTTK Turbacz → Wołosate',
  date: '25-28 Maja 2026',
  startTime: 'poniedziałek rano',
  endTime: 'czwartek wieczorem',
  distance: '322.1 km',
  elevation: '+6500 m wzniesienia',
  time: '~85 godzin (3-4 dni)'
}

function App() {
  const [activeTab, setActiveTab] = useState('map')
  const [activeEtap, setActiveEtap] = useState('etap1')

  const tabs = [
    { id: 'map', label: '🗺️ Mapa', icon: '🗺️' },
    { id: 'schedule', label: '📅 Harmonogram', icon: '📅' },
    { id: 'logistics', label: '🎒 Logistyka', icon: '🎒' },
    { id: 'nutrition', label: '🍲 Żywienie', icon: '🍲' },
  ]

  const etapData = activeEtap === 'etap1' 
    ? { title: ETAP1_TITLE, subtitle: ETAP1_SUBTITLE, date: ETAP1_DATE, distance: ETAP1_DISTANCE, elevation: ETAP1_ELEVATION, time: ETAP1_TIME }
    : activeEtap === 'etap2'
    ? { title: ETAP2_DATA.title, subtitle: ETAP2_DATA.subtitle, date: ETAP2_DATA.date, distance: `${ETAP2_DATA.distance} km`, elevation: `+${ETAP2_DATA.elevation} m wzniesienia`, time: ETAP2_DATA.time }
    : { title: ETAP3_DATA.title, subtitle: ETAP3_DATA.subtitle, date: ETAP3_DATA.date, distance: ETAP3_DATA.distance, elevation: ETAP3_DATA.elevation, time: ETAP3_DATA.time }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-black bg-opacity-50 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
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
        {/* Selektor Etapu - WIDOCZNY W GŁÓWNEJ ZAWARTOŚCI */}
        <div className="mb-6 flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveEtap('etap1')}
            className={`px-6 py-3 rounded-lg font-bold transition ${
              activeEtap === 'etap1'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            📍 Etap 1: Ustroń → Hala Boracza
          </button>
          <button
            onClick={() => setActiveEtap('etap2')}
            className={`px-6 py-3 rounded-lg font-bold transition ${
              activeEtap === 'etap2'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            📍 Etap 2: Barania Góra → Turbacz
          </button>
          <button
            onClick={() => setActiveEtap('etap3')}
            className={`px-6 py-3 rounded-lg font-bold transition ${
              activeEtap === 'etap3'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            📍 Etap 3: Turbacz → Wołosate
          </button>
        </div>

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
      <Analytics />
    </div>
  )
}

export default App
// Rebuild: 1774734431557985216
// Force rebuild - 1774944469
