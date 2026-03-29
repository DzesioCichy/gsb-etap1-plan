import React, { useState } from 'react';

export default function Logistics() {
  const [activeEtap, setActiveEtap] = useState('etap1');

  const logisticsData = {
    etap1: {
      parking: {
        title: '🅿️ Parking Darmowy w Ustroniu',
        location: 'ul. Grażyńskiego / Dworcowa 1, Ustroń',
        description: 'Tuż obok stacji PKP Ustroń Zdrój',
        gps: '49.7210, 18.8155',
        features: 'Publiczny, oświetlony, bezpieczny',
        advantages: 'Darmowy, blisko startu GSB, możliwość spania w aucie, oświetlony.'
      },
      shelter: {
        title: '🏔️ Schronisko PTTK na Hali Boraczej',
        address: 'Żabnica, ul. Boracza 22, 34-350 Węgierska Górka',
        phone1: '+48 33 862 67 32',
        phone2: '+48 601 284 064 (Komórkowy)',
        email: 'baca.boracza@gmail.com',
        warning: 'Zarezerwuj nocleg z wyprzedzeniem! Poinformuj o późnym przybyciu (ok. 20:00-22:00). Marzec to sezon zimowy.'
      },
      route: [
        { from: 'Ustroń Zdrój', to: '0 km' },
        { from: '→ Równica', to: '4.5 km' },
        { from: '→ Czantoria Wielka', to: '12 km' },
        { from: '→ Schronisko Stożek', to: '21 km' },
        { from: '→ Przełęcz Kubalonka', to: '29 km' },
        { from: '→ Barania Góra', to: '41 km' },
        { from: '→ Węgierska Górka', to: '48 km' },
        { from: '→ Hala Boracza (NOCLEG)', to: '53 km', highlight: true },
      ],
      conditions: [
        'Spodziewaj się śniegu i oblodzeń',
        'Raczki turystyczne/raki - OBOWIĄZKOWE',
        'Stuptuty i czołówka - niezbędne',
        'Zmrok o ok. 18:00 - przygotuj oświetlenie',
        'Woda może być zamarznięta - weź 2-3 litry',
        'Temperatury mogą spaść poniżej 0°C'
      ]
    },
    etap2: {
      parking: {
        title: '🅿️ Parking Darmowy w Węgierskiej Górce',
        location: 'Przy Kościele Węgierska Górka',
        description: 'Spokojne miejsce do odpoczynku',
        gps: '49.613925, 19.128516',
        features: 'Utwardzony, ~10 miejsc, dobry sygnał GSM',
        advantages: 'Darmowy parking, blisko szlaku, spokojny, dobry sygnał. ⚠️ Dzwony o 6:00'
      },
      shelter: {
        title: '🏔️ Schronisko PTTK im. Władysława Orkana na Turbaczu',
        address: '34-400 Nowy Targ, skr. pocztowa 102',
        phone1: '+48 602 118 889 (GŁÓWNY)',
        phone2: '+48 666 726 893 (Alternatywny)',
        phone3: '+48 18 266 77 80 (Stacjonarny)',
        email: 'schroniskoturbacz.pttk@gmail.com',
        warning: 'Zarezerwuj nocleg z wyprzedzeniem! Poinformuj o przybyciu wieczorem/nocą (ok. 01:30). Pojemność: 110 miejsc + apartament 3-pokojowy.'
      },
      route: [
        { from: 'Węgierska Górka (Parking)', to: '0 km' },
        { from: '→ Barania Góra', to: '8 km' },
        { from: '→ Babia Góra', to: '23 km' },
        { from: '→ Pilsko', to: '35 km' },
        { from: '→ Schronisko Rysianka', to: '42 km' },
        { from: '→ Beskid Krzyżowski', to: '49 km' },
        { from: '→ Mędralowa Zachodnia', to: '54 km' },
        { from: '→ Okrąglica', to: '64 km' },
        { from: '→ Turbacz', to: '74 km' },
        { from: '→ Stare Wierchy', to: '81 km' },
        { from: '→ Obidowiec', to: '83 km' },
        { from: '→ Schronisko PTTK Turbacz (NOCLEG)', to: '85 km', highlight: true },
      ],
      conditions: [
        'Wiosna - możliwe opady deszczu i śniegu',
        'Nocna wędrówka - latarka czołowa OBOWIĄZKOWA',
        'Mapa i GPS - niezbędne do nawigacji',
        'Zmrok o ok. 19:30 - przygotuj oświetlenie',
        'Woda: 2-3 litry dziennie',
        'Temperatury: 0-10°C (zależy od pogody)'
      ]
    }
  };

  const data = logisticsData[activeEtap];

  return (
    <div className="space-y-6">
      {/* Selektor etapów */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveEtap('etap1')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeEtap === 'etap1'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          📍 Etap 1: Ustroń → Hala Boracza
        </button>
        <button
          onClick={() => setActiveEtap('etap2')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeEtap === 'etap2'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          📍 Etap 2: Barania Góra → Turbacz
        </button>
      </div>

      {/* Parking */}
      <div className="section-card">
        <h3 className="text-xl font-bold text-blue-400 mb-4">{data.parking.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400 mb-2">Lokalizacja:</p>
            <p className="font-bold">{data.parking.location}</p>
            <p className="text-sm text-gray-300 mt-2">{data.parking.description}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Współrzędne GPS:</p>
            <p className="font-bold text-green-400">{data.parking.gps}</p>
            <p className="text-sm text-gray-300 mt-2">{data.parking.features}</p>
          </div>
        </div>
        <div className="mt-4 bg-black bg-opacity-40 p-3 rounded">
          <p className="text-sm"><strong>✓ Zalety:</strong> {data.parking.advantages}</p>
        </div>
      </div>

      {/* Schronisko */}
      <div className="section-card">
        <h3 className="text-xl font-bold text-red-400 mb-4">{data.shelter.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-400 mb-2">Adres:</p>
            <p className="font-bold">{data.shelter.address}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-2">Kontakt:</p>
            <p className="font-bold text-green-400">{data.shelter.phone1}</p>
            <p className="text-sm text-gray-300">{data.shelter.phone2}</p>
            {data.shelter.phone3 && <p className="text-sm text-gray-300">{data.shelter.phone3}</p>}
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-400 mb-2">Email:</p>
          <p className="font-bold text-blue-400">{data.shelter.email}</p>
        </div>
        <div className="mt-4 bg-black bg-opacity-40 p-3 rounded">
          <p className="text-sm"><strong>⚠️ Ważne:</strong> {data.shelter.warning}</p>
        </div>
      </div>

      {/* Trasa */}
      <div className="section-card">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">🗺️ Przebieg Trasy</h3>
        <div className="space-y-2 text-sm">
          {data.route.map((point, idx) => (
            <div key={idx} className={`flex justify-between ${point.highlight ? 'border-t border-gray-600 pt-2 mt-2 font-bold' : ''}`}>
              <span>{point.from}</span>
              <span className={point.highlight ? 'text-red-500 font-bold' : 'font-bold'}>{point.to}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Warunki */}
      <div className="section-card">
        <h3 className="text-xl font-bold text-orange-400 mb-4">⚠️ Warunki Pogodowe</h3>
        <ul className="space-y-2 text-sm">
          {data.conditions.map((condition, idx) => (
            <li key={idx}>✓ {condition}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
