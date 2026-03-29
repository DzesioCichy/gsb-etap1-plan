import React, { useState } from 'react';

export default function Schedule() {
  const [expandedDay, setExpandedDay] = useState(null);
  const [activeEtap, setActiveEtap] = useState('etap1');

  const scheduleData = {
    etap1: [
      {
        day: 'Piątek, 20 Marca',
        title: 'Logistyka w Ustroniu',
        events: [
          { time: '21:00 - 22:00', activity: 'Przyjazd do Ustronia z Opola', location: 'Parking ul. Grażyńskiego' },
          { time: '22:00 - 03:15', activity: 'Odpoczynek/sen w samochodzie', location: 'Parking Darmowy' },
          { time: '03:15 - 04:00', activity: 'Przygotowanie: kuchenka, posiłek, pakowanie', location: 'Parking' },
        ]
      },
      {
        day: 'Sobota, 21 Marca',
        title: 'Główny Etap: Ustroń - Hala Boracza',
        events: [
          { time: '04:00', activity: 'START GSB - Dworzec PKP Ustroń Zdrój', location: 'Ustroń (0 km)', km: 0 },
          { time: '08:00 - 09:00', activity: 'Przerwa na baton energetyczny/żel', location: 'Rejon Czantorii', km: 12 },
          { time: '12:00 - 13:00', activity: 'Dłuższa przerwa - liofilizat na kuchence', location: 'Rejon Stożka', km: 21 },
          { time: '16:00 - 17:00', activity: 'Krótka przerwa przed zmrokiem', location: 'Rejon Baraniej Góry', km: 41 },
          { time: '20:00 - 22:00', activity: 'Przybycie do Schroniska na Hali Boraczej', location: 'Hala Boracza (53 km)', km: 53 },
        ]
      },
      {
        day: 'Niedziela, 22 Marca',
        title: 'Powrót / Odpoczynek',
        events: [
          { time: 'Rano', activity: 'Śniadanie w schronisku', location: 'Hala Boracza' },
          { time: 'Przed południem', activity: 'Powrót do Opola lub dalsze etapy GSB', location: 'Opcjonalnie' },
        ]
      }
    ],
    etap2: [
      {
        day: 'Piątek, 22 Maja',
        title: 'Logistyka w Węgierskiej Górce',
        events: [
          { time: '20:00', activity: 'Przygotowanie sprzętu', location: 'Dom' },
          { time: '22:00', activity: 'Wyjazd samochodem', location: 'Dom' },
          { time: '~23:00', activity: 'Przyjazd na parking', location: 'Parking przy Kościele Węgierska Górka (GPS: 49.613925, 19.128516)' },
          { time: '23:00-02:00', activity: 'Odpoczynek, sen, przygotowanie', location: 'Samochód na parkingu' },
        ]
      },
      {
        day: 'Sobota, 23 Maja',
        title: 'Główny Etap: Barania Góra - Schronisko PTTK Turbacz',
        events: [
          { time: '02:00', activity: 'START ETAP 2 - Wyjazd z parkingu', location: 'Węgierska Górka (0 km)', km: 0 },
          { time: '02:00-04:30', activity: 'Nocna wędrówka do Baranii Góry', location: 'Węgierska Górka → Barania Góra', km: 8 },
          { time: '04:30-05:00', activity: 'Odpoczynek, krótka przerwa', location: 'Barania Góra', km: 8 },
          { time: '05:00-08:00', activity: 'Wędrówka do Babiej Góry', location: 'Barania Góra → Babia Góra', km: 23 },
          { time: '08:00-08:30', activity: 'Śniadanie, woda', location: 'Babia Góra (1725 m)', km: 23 },
          { time: '08:30-11:00', activity: 'Wędrówka do Pilska', location: 'Babia Góra → Pilsko', km: 35 },
          { time: '11:00-11:30', activity: 'Drugie śniadanie', location: 'Pilsko (1557 m)', km: 35 },
          { time: '11:30-13:00', activity: 'Wędrówka do Schroniska Rysianka', location: 'Pilsko → Schronisko Rysianka', km: 42 },
          { time: '13:00-14:00', activity: 'Obiad, odpoczynek', location: 'Schronisko Rysianka (1290 m)', km: 42 },
          { time: '14:00-16:00', activity: 'Wędrówka przez Beskid Krzyżowski', location: 'Rysianka → Beskid Krzyżowski', km: 49 },
          { time: '16:00-16:30', activity: 'Przerwa, woda', location: 'Beskid Krzyżowski (923 m)', km: 49 },
          { time: '16:30-18:00', activity: 'Wędrówka do Mędralowej Zachodniej', location: 'Beskid Krzyżowski → Mędralowa Zachodnia', km: 54 },
          { time: '18:00-18:30', activity: 'Kolacja, woda', location: 'Mędralowa Zachodnia (1026 m)', km: 54 },
          { time: '18:30-20:00', activity: 'Wędrówka do Okrąglicy', location: 'Mędralowa → Okrąglica', km: 64 },
          { time: '20:00-20:30', activity: 'Przerwa', location: 'Okrąglica (1239 m)', km: 64 },
          { time: '20:30-22:00', activity: 'Wędrówka przez Turbacz', location: 'Okrąglica → Turbacz', km: 74 },
          { time: '22:00-22:30', activity: 'Krótka przerwa', location: 'Turbacz (1310 m)', km: 74 },
          { time: '22:30-23:30', activity: 'Nocna wędrówka do Starych Wierch', location: 'Turbacz → Schronisko Stare Wierchy', km: 81 },
          { time: '23:30-00:30', activity: 'Nocna wędrówka przez Obidowiec', location: 'Stare Wierchy → Obidowiec', km: 83 },
          { time: '00:30-01:30', activity: 'Finalna wędrówka do Schroniska', location: 'Obidowiec → Schronisko PTTK Turbacz', km: 85 },
          { time: '01:30+', activity: 'KONIEC ETAPU 2 - Nocleg w schronisku', location: 'Schronisko PTTK Turbacz (1050 m)', km: 85 },
        ]
      },
      {
        day: 'Niedziela, 24 Maja',
        title: 'Regeneracja w Schronisku',
        events: [
          { time: '08:00+', activity: 'Śniadanie', location: 'Schronisko PTTK Turbacz' },
          { time: '09:00+', activity: 'Odpoczynek, czyszczenie', location: 'Schronisko PTTK Turbacz' },
          { time: '14:00+', activity: 'Obiad', location: 'Schronisko PTTK Turbacz' },
          { time: '18:00+', activity: 'Kolacja', location: 'Schronisko PTTK Turbacz' },
        ]
      }
    ]
  };

  const schedule = scheduleData[activeEtap];

  return (
    <div className="space-y-4">
      {/* Selektor etapów */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveEtap('etap1')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeEtap === 'etap1'
              ? 'bg-red-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          📍 Etap 1: Ustroń → Hala Boracza
        </button>
        <button
          onClick={() => setActiveEtap('etap2')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeEtap === 'etap2'
              ? 'bg-red-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          📍 Etap 2: Barania Góra → Turbacz
        </button>
      </div>

      {/* Harmonogram */}
      {schedule.map((day, idx) => (
        <div key={idx} className="section-card cursor-pointer hover:bg-opacity-10 transition" onClick={() => setExpandedDay(expandedDay === idx ? null : idx)}>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-red-500">{day.day}</h3>
              <p className="text-sm text-gray-400">{day.title}</p>
            </div>
            <span className="text-2xl">{expandedDay === idx ? '▼' : '▶'}</span>
          </div>
          
          {expandedDay === idx && (
            <div className="mt-4 space-y-3 border-t border-gray-600 pt-4">
              {day.events.map((event, eventIdx) => (
                <div key={eventIdx} className="bg-black bg-opacity-30 p-3 rounded">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-bold text-yellow-400">{event.time}</p>
                      <p className="text-white mt-1">{event.activity}</p>
                      <p className="text-sm text-gray-400 mt-1">📍 {event.location}</p>
                    </div>
                    {event.km !== undefined && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold ml-2">{event.km} km</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
