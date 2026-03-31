import { useState } from 'react';

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
        title: 'Główny Etap: Barania Góra - Punkt B - Markowe Szczawiny',
        events: [
          { time: '02:00', activity: 'START ETAP 2 - Wyjazd z parkingu', location: 'Węgierska Górka (0 km)', km: 0 },
          { time: '02:00-04:30', activity: 'Nocna wędrówka do Baranii Góry', location: 'Węgierska Górka → Barania Góra', km: 8 },
          { time: '04:30-05:00', activity: 'Odpoczynek, krótka przerwa', location: 'Barania Góra', km: 8 },
          { time: '05:00-08:00', activity: 'Wędrówka do Babiej Góry', location: 'Barania Góra → Babia Góra', km: 23 },
          { time: '08:00-08:30', activity: 'Śniadanie, woda', location: 'Babia Góra (1725 m)', km: 23 },
          { time: '08:30-11:00', activity: 'Wędrówka do Pilska', location: 'Babia Góra → Pilsko', km: 35 },
          { time: '11:00-11:30', activity: 'Drugie śniadanie', location: 'Pilsko (1557 m)', km: 35 },
          { time: '11:30-13:30', activity: 'Wędrówka do Punktu B (zejście na Markowe Szczawiny)', location: 'Pilsko → Punkt B (szlak GSB)', km: 42 },
          { time: '13:30-14:30', activity: 'Obiad, odpoczynek', location: 'Punkt B (1063 m) - na szlaku GSB', km: 42 },
          { time: '14:30-16:15', activity: 'Zejście do Markowych Szczawin (0.30h)', location: 'Punkt B → Markowe Szczawiny', km: 42 },
          { time: '16:15+', activity: 'NOCLEG SOBOTA - Markowe Szczawiny', location: 'Schronisko PTTK Markowe Szczawiny (1180 m)', km: 42 },
        ]
      },
      {
        day: 'Niedziela, 24 Maja',
        title: 'Główny Etap: Markowe Szczawiny - Punkt B - Turbacz',
        events: [
          { time: '08:00', activity: 'Śniadanie w schronisku', location: 'Schronisko PTTK Markowe Szczawiny' },
          { time: '09:00', activity: 'START - Wyjazd ze schroniska', location: 'Markowe Szczawiny (0 km)', km: 0 },
          { time: '09:00-10:45', activity: 'Powrót na szlak GSB (0.30h)', location: 'Markowe Szczawiny → Punkt B', km: 0 },
          { time: '10:45-11:15', activity: 'Przerwa, woda', location: 'Punkt B (1063 m) - na szlaku GSB', km: 0 },
          { time: '11:15-13:45', activity: 'Wędrówka przez Beskid Krzyżowski', location: 'Punkt B → Beskid Krzyżowski', km: 7 },
          { time: '13:45-14:45', activity: 'Obiad, odpoczynek', location: 'Beskid Krzyżowski (923 m)', km: 7 },
          { time: '14:45-16:15', activity: 'Wędrówka do Mędralowej Zachodniej', location: 'Beskid Krzyżowski → Mędralowa Zachodnia', km: 29 },
          { time: '16:15-16:45', activity: 'Przerwa, woda', location: 'Mędralowa Zachodnia (1026 m)', km: 29 },
          { time: '16:45-17:45', activity: 'Wędrówka do Okrąglicy', location: 'Mędralowa → Okrąglica', km: 35 },
          { time: '17:45-18:15', activity: 'Przerwa przed finałem', location: 'Okrąglica (1239 m)', km: 35 },
          { time: '18:15-19:15', activity: 'Finalna wędrówka do Turbacza', location: 'Okrąglica → Turbacz', km: 45 },
          { time: '19:15+', activity: 'KONIEC ETAPU 2 - Nocleg w schronisku', location: 'Schronisko PTTK Turbacz (1310 m)', km: 45 },
        ]
      }
    ],
    etap3: [
      {
        day: 'Poniedziałek, 25 Maja',
        title: 'Logistyka w Turbaczu',
        events: [
          { time: '08:00', activity: 'Śniadanie w schronisku', location: 'Schronisko PTTK Turbacz' },
          { time: '09:00', activity: 'Przygotowanie sprzętu', location: 'Turbacz' },
          { time: '10:00', activity: 'Ostatnia weryfikacja ekwipunku', location: 'Turbacz' },
        ]
      },
      {
        day: 'Wtorek, 26 Maja',
        title: 'Główny Etap: Turbacz - Polonina Wetlińska (Bieszczady)',
        events: [
          { time: '11:00', activity: 'START ETAP 3 - Wyjazd ze schroniska', location: 'Schronisko PTTK Turbacz (0 km)', km: 0 },
          { time: '11:00-14:00', activity: 'Wędrówka przez Gorce', location: 'Turbacz → Polana Gabrowska → Kiczora', km: 12 },
          { time: '14:00-15:00', activity: 'Obiad, odpoczynek', location: 'Kiczora (1155 m)', km: 12 },
          { time: '15:00-18:00', activity: 'Wędrówka przez Beskid Sądecki', location: 'Kiczora → Przełęcz Krzyżowa', km: 76 },
          { time: '18:00-19:00', activity: 'Kolacja, przygotowanie do nocy', location: 'Schronisko PTTK Komańcza (218 km)', km: 218 },
          { time: '19:00+', activity: 'NOCLEG WTOREK - Schronisko PTTK Komańcza', location: 'Schronisko PTTK Komańcza (750 m)', km: 218 },
        ]
      },
      {
        day: 'Środa, 27 Maja',
        title: 'Główny Etap: Komańcza - Polonina Wetlińska',
        events: [
          { time: '08:00', activity: 'Śniadanie w schronisku', location: 'Schronisko PTTK Komańcza' },
          { time: '09:00', activity: 'START - Wyjazd ze schroniska', location: 'Komańcza (0 km)', km: 0 },
          { time: '09:00-13:00', activity: 'Wędrówka przez Beskid Niski', location: 'Komańcza → Przełęcz Żebrak', km: 65 },
          { time: '13:00-14:00', activity: 'Obiad, odpoczynek', location: 'Przełęcz Żebrak (850 m)', km: 65 },
          { time: '14:00-18:00', activity: 'Wędrówka do Bieszczad', location: 'Przełęcz Żebrak → Polonina Wetlińska', km: 100 },
          { time: '18:00+', activity: 'NOCLEG ŚRODA - Schronisko PTTK Polonina Wetlińska', location: 'Schronisko PTTK na Poloninie Wetlińskiej (1220 m)', km: 100 },
        ]
      },
      {
        day: 'Czwartek, 28 Maja',
        title: 'Finał: Polonina Wetlińska - Wołosate (KONIEC GSB)',
        events: [
          { time: '08:00', activity: 'Śniadanie w schronisku', location: 'Schronisko PTTK Polonina Wetlińska' },
          { time: '09:00', activity: 'START - Finalna wędrówka', location: 'Polonina Wetlińska (0 km)', km: 0 },
          { time: '09:00-12:00', activity: 'Wędrówka przez Poloninę Caryńską', location: 'Polonina Wetlińska → Ustryki Górne', km: 30 },
          { time: '12:00-13:00', activity: 'Obiad, ostatnia przerwa', location: 'Hotel PTTK Ustryki Górne (295 km)', km: 30 },
          { time: '13:00-17:00', activity: 'Finalna wędrówka do Wołosate', location: 'Ustryki Górne → Wołosate', km: 45 },
          { time: '17:00+', activity: '🎉 KONIEC GŁÓWNEGO SZLAKU BESKIDZKIEGO - Wołosate', location: 'Wołosate - koniec szlaku (724 m)', km: 45 },
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
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          📍 Etap 1: Ustroń → Hala Boracza
        </button>
        <button
          onClick={() => setActiveEtap('etap2')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeEtap === 'etap2'
              ? 'bg-red-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          📍 Etap 2: Barania Góra → Turbacz
        </button>
        <button
          onClick={() => setActiveEtap('etap3')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeEtap === 'etap3'
              ? 'bg-red-600 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          🏔️ Etap 3: Turbacz → Wołosate
        </button>
      </div>

      {/* Harmonogram */}
      <div className="space-y-4">
        {schedule.map((day, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedDay(expandedDay === index ? null : index)}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 text-left font-bold hover:from-blue-600 hover:to-blue-700 transition flex justify-between items-center"
            >
              <div>
                <div className="text-lg">{day.day}</div>
                <div className="text-sm opacity-90">{day.title}</div>
              </div>
              <span className="text-2xl">{expandedDay === index ? '▼' : '▶'}</span>
            </button>

            {expandedDay === index && (
              <div className="p-4 bg-gray-50 space-y-3">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="font-semibold text-blue-700">{event.time}</div>
                    <div className="text-gray-800">{event.activity}</div>
                    <div className="text-sm text-gray-600">{event.location}</div>
                    {event.km !== undefined && (
                      <div className="text-xs text-gray-500 mt-1">📍 {event.km} km</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
