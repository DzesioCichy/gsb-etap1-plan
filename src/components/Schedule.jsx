import { useState } from 'react'

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
        title: 'Główny Etap: Węgierska Górka - Schronisko Rysianka',
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
          { time: '16:30-18:00', activity: 'Wędrówka do Mędralowej Zachodniej', location: 'Beskid Krzyżowski → Mędralowa Zachodnia', km: 71 },
          { time: '18:00-18:30', activity: 'Kolacja, woda', location: 'Mędralowa Zachodnia (1026 m)', km: 71 },
          { time: '18:30-20:30', activity: 'Wędrówka do Schroniska Rysianka', location: 'Mędralowa → Schronisko Rysianka', km: 55 },
          { time: '20:30+', activity: 'NOCLEG SOBOTA - Schronisko Rysianka', location: 'Schronisko Rysianka (1290 m)', km: 55 },
        ]
      },
      {
        day: 'Niedziela, 24 Maja',
        title: 'Główny Etap: Schronisko Rysianka - Schronisko PTTK Turbacz',
        events: [
          { time: '08:00', activity: 'Śniadanie w schronisku', location: 'Schronisko Rysianka' },
          { time: '09:00', activity: 'START - Wyjazd ze schroniska', location: 'Schronisko Rysianka (0 km)', km: 0 },
          { time: '09:00-11:00', activity: 'Wędrówka do Okrąglicy', location: 'Schronisko Rysianka → Okrąglica', km: 26 },
          { time: '11:00-11:30', activity: 'Przerwa, woda', location: 'Okrąglica (1239 m)', km: 26 },
          { time: '11:30-13:30', activity: 'Wędrówka przez Turbacz', location: 'Okrąglica → Turbacz', km: 36 },
          { time: '13:30-14:30', activity: 'Obiad, odpoczynek', location: 'Turbacz (1310 m)', km: 36 },
          { time: '14:30-16:00', activity: 'Wędrówka do Starych Wierch', location: 'Turbacz → Schronisko Stare Wierchy', km: 46 },
          { time: '16:00-16:30', activity: 'Przerwa, woda', location: 'Schronisko Stare Wierchy (968 m)', km: 46 },
          { time: '16:30-17:30', activity: 'Wędrówka przez Obidowiec', location: 'Stare Wierchy → Obidowiec', km: 48 },
          { time: '17:30-18:30', activity: 'Finalna wędrówka do Schroniska', location: 'Obidowiec → Schronisko PTTK Turbacz', km: 59 },
          { time: '18:30+', activity: 'KONIEC ETAPU 2 - Nocleg w schronisku', location: 'Schronisko PTTK Turbacz (1310 m)', km: 59 },
        ]
      }
    ]
  };

  const schedule = scheduleData[activeEtap];

  return (
    <div className="space-y-6">
      {/* Selektor Etapu */}
      <div className="flex gap-2 flex-wrap">
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

      {/* Harmonogram Wyprawy */}
      <div className="section-card">
        <h2 className="section-title">Harmonogram Wyprawy</h2>
        <p className="text-gray-400 text-sm mb-6">Kliknij na dzień, aby rozwinąć szczegóły</p>

        <div className="space-y-3">
          {schedule.map((day, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg overflow-hidden bg-gray-800 bg-opacity-50"
            >
              <button
                onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700 transition"
              >
                <div className="text-left">
                  <h3 className="text-lg font-bold text-red-400">{day.day}</h3>
                  <p className="text-gray-300 text-sm">{day.title}</p>
                </div>
                <span className="text-2xl">
                  {expandedDay === index ? '▼' : '▶'}
                </span>
              </button>

              {expandedDay === index && (
                <div className="px-6 py-4 bg-gray-900 bg-opacity-50 border-t border-gray-600">
                  <div className="space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="pb-3 border-b border-gray-700 last:border-b-0">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-yellow-400">{event.time}</span>
                          {event.km !== undefined && (
                            <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                              {event.km} km
                            </span>
                          )}
                        </div>
                        <p className="text-gray-200 font-semibold">{event.activity}</p>
                        <p className="text-gray-400 text-sm">📍 {event.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
