import React, { useState } from 'react';

export default function Schedule() {
  const [expandedDay, setExpandedDay] = useState(null);

  const schedule = [
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
  ];

  return (
    <div className="space-y-4">
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
