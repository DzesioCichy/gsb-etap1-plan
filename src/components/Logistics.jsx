import React from 'react';

export default function Logistics() {
  return (
    <div className="space-y-6">
      {/* Parking */}
      <div className="section-card">
        <h3 className="text-xl font-bold text-blue-400 mb-4">🅿️ Parking Darmowy w Ustroniu</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400 mb-2">Lokalizacja:</p>
            <p className="font-bold">ul. Grażyńskiego / Dworcowa 1, Ustroń</p>
            <p className="text-sm text-gray-300 mt-2">Tuż obok stacji PKP Ustroń Zdrój</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Współrzędne GPS:</p>
            <p className="font-bold text-green-400">49.7210, 18.8155</p>
            <p className="text-sm text-gray-300 mt-2">Publiczny, oświetlony, bezpieczny</p>
          </div>
        </div>
        <div className="mt-4 bg-black bg-opacity-40 p-3 rounded">
          <p className="text-sm"><strong>✓ Zalety:</strong> Darmowy, blisko startu GSB, możliwość spania w aucie, oświetlony.</p>
        </div>
      </div>

      {/* Schronisko */}
      <div className="section-card">
        <h3 className="text-xl font-bold text-red-400 mb-4">🏔️ Schronisko PTTK na Hali Boraczej</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400 mb-2">Adres:</p>
            <p className="font-bold">Żabnica, ul. Boracza 22</p>
            <p className="text-sm text-gray-300">34-350 Węgierska Górka</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Kontakt:</p>
            <p className="font-bold text-green-400">+48 33 862 67 32</p>
            <p className="text-sm text-gray-300">+48 601 284 064 (Komórkowy)</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-400 mb-2">Email:</p>
          <p className="font-bold text-blue-400">baca.boracza@gmail.com</p>
        </div>
        <div className="mt-4 bg-black bg-opacity-40 p-3 rounded">
          <p className="text-sm"><strong>⚠️ Ważne:</strong> Zarezerwuj nocleg z wyprzedzeniem! Poinformuj o późnym przybyciu (ok. 20:00-22:00). Marzec to sezon zimowy.</p>
        </div>
      </div>

      {/* Trasa */}
      <div className="section-card">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">🗺️ Przebieg Trasy</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Ustroń Zdrój</span>
            <span className="font-bold">0 km</span>
          </div>
          <div className="flex justify-between">
            <span>→ Równica</span>
            <span className="font-bold">4.5 km</span>
          </div>
          <div className="flex justify-between">
            <span>→ Czantoria Wielka</span>
            <span className="font-bold">12 km</span>
          </div>
          <div className="flex justify-between">
            <span>→ Schronisko Stożek</span>
            <span className="font-bold">21 km</span>
          </div>
          <div className="flex justify-between">
            <span>→ Przełęcz Kubalonka</span>
            <span className="font-bold">29 km</span>
          </div>
          <div className="flex justify-between">
            <span>→ Barania Góra</span>
            <span className="font-bold">41 km</span>
          </div>
          <div className="flex justify-between">
            <span>→ Węgierska Górka</span>
            <span className="font-bold">48 km</span>
          </div>
          <div className="flex justify-between border-t border-gray-600 pt-2 mt-2">
            <span className="font-bold">→ Hala Boracza (NOCLEG)</span>
            <span className="font-bold text-red-500">53 km</span>
          </div>
        </div>
      </div>

      {/* Warunki */}
      <div className="section-card">
        <h3 className="text-xl font-bold text-orange-400 mb-4">⚠️ Warunki Zimowe (Marzec)</h3>
        <ul className="space-y-2 text-sm">
          <li>✓ Spodziewaj się śniegu i oblodzeń</li>
          <li>✓ Raczki turystyczne/raki - OBOWIĄZKOWE</li>
          <li>✓ Stuptuty i czołówka - niezbędne</li>
          <li>✓ Zmrok o ok. 18:00 - przygotuj oświetlenie</li>
          <li>✓ Woda może być zamarznięta - weź 2-3 litry</li>
          <li>✓ Temperatury mogą spaść poniżej 0°C</li>
        </ul>
      </div>
    </div>
  );
}
