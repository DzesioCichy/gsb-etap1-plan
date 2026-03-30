import React, { useState } from 'react';

export default function Nutrition() {
  const [activeEtap, setActiveEtap] = useState('etap1');
  const [selectedDay, setSelectedDay] = useState('saturday');

  const nutritionData = {
    etap1: {
      friday: {
        title: 'Piątek, 20 Marca – Przygotowanie w Ustroniu',
        meals: [
          {
            time: '03:30',
            name: 'Śniadanie (Parking)',
            items: [
              '1x Puszka żołnierska (bigos, gulasz lub racja żołnierska)',
              '1x Kawa instant lub herbata',
              '1x Baton energetyczny',
              '1x Jabłko lub banan'
            ],
            calories: 800,
            prep: 'Kuchenka gazowa + krzesiwo (10 min)',
            notes: 'Ciepły posiłek przed startem – regeneracja po nocy w aucie'
          }
        ]
      },
      saturday: {
        title: 'Sobota, 21 Marca – Główny Etap (53 km)',
        meals: [
          {
            time: '04:00',
            name: 'Start – Energetyka',
            items: [
              '2x Baton energetyczny (np. Clif Bar)',
              '1x Żel energetyczny',
              '500 ml wody'
            ],
            calories: 400,
            prep: 'Bez przygotowania – zabrać z autu',
            notes: 'Lekka energetyka na start, zanim będzie jasno'
          },
          {
            time: '08:00-09:00',
            name: 'Przerwa 1 (Rejon Czantorii, ~12 km)',
            items: [
              '1x Baton energetyczny',
              '1x Żel energetyczny',
              '1x Suszona wołowina (jerky)',
              '500 ml wody',
              '1x Elektrolit (tabletka rozpuszczalna)'
            ],
            calories: 500,
            prep: 'Bez przygotowania',
            notes: 'Szybka regeneracja – nie rozpakowywać całego ekwipunku'
          },
          {
            time: '12:00-13:00',
            name: 'Obiad (Rejon Stożka, ~21 km)',
            items: [
              '1x Liofilizat obiadowy (np. danie mięsne z ryżem)',
              '1x Kawa instant lub herbata',
              '1x Baton energetyczny',
              '1x Czekolada lub słodycze',
              '750 ml wody'
            ],
            calories: 900,
            prep: 'Kuchenka gazowa + krzesiwo (15-20 min)',
            notes: 'Główny posiłek – regeneracja przed podejściem pod Baranią Górę'
          },
          {
            time: '16:00-17:00',
            name: 'Przerwa 2 (Rejon Baraniej Góry, ~41 km)',
            items: [
              '1x Baton energetyczny',
              '1x Żel energetyczny',
              '1x Orzechy (migdały, orzeszki ziemne)',
              '500 ml wody',
              '1x Elektrolit'
            ],
            calories: 600,
            prep: 'Bez przygotowania',
            notes: 'Ostatnia przerwa przed zmrokiem – zmrok o ~18:00'
          },
          {
            time: '20:00-22:00',
            name: 'Kolacja (Schronisko Hala Boracza)',
            items: [
              '1x Liofilizat kolacyjny (np. zupa mięsna)',
              '1x Chleb lub bułka (jeśli dostępna w schronisku)',
              '1x Herbata lub kakao',
              '1x Deser (czekolada, cukierki)',
              '750 ml wody'
            ],
            calories: 800,
            prep: 'Kuchenka gazowa w jadalni schroniska (15 min)',
            notes: 'Regeneracja po 53 km – ciepły posiłek w schronisku'
          }
        ]
      },
      sunday: {
        title: 'Niedziela, 22 Marca – Odpoczynek/Powrót',
        meals: [
          {
            time: '08:00-09:00',
            name: 'Śniadanie (Schronisko)',
            items: [
              '1x Śniadanie schroniskowe (jeśli dostępne)',
              'lub 1x Liofilizat śniadaniowy',
              '1x Kawa/herbata',
              '1x Baton energetyczny'
            ],
            calories: 700,
            prep: 'Kuchenka gazowa (10 min)',
            notes: 'Regeneracja po pierwszym etapie – przygotowanie do dalszych planów'
          }
        ]
      }
    },
    etap2: {
      friday: {
        title: 'Piątek, 22 Maja – Przygotowanie w Węgierskiej Górce',
        meals: [
          {
            time: '23:00',
            name: 'Lekka Przekąska (Parking)',
            items: [
              '1x Baton energetyczny',
              '1x Suszone owoce',
              '500 ml wody'
            ],
            calories: 180,
            prep: 'Bez przygotowania',
            notes: 'Lekki posiłek, hydratacja przed snem'
          }
        ]
      },
      saturday: {
        title: 'Sobota, 23 Maja – Główny Etap (114 km)',
        meals: [
          {
            time: '02:00',
            name: 'Start – Nocna Energetyka',
            items: [
              '1x Żel energetyczny',
              '500 ml wody'
            ],
            calories: 100,
            prep: 'Bez przygotowania',
            notes: 'Szybka energia na początek nocnej wędrówki'
          },
          {
            time: '04:30',
            name: 'Przerwa na Baranii Górze (~8 km)',
            items: [
              '1x Baton energetyczny',
              '1x Orzechy mieszane (50g)',
              '500 ml wody'
            ],
            calories: 480,
            prep: 'Bez przygotowania',
            notes: 'Energia, białko, tłuszcze'
          },
          {
            time: '08:00',
            name: 'Śniadanie na Babiej Górze (~23 km)',
            items: [
              '1x Kanapka (chleb, ser, szynka)',
              '1x Suszone owoce (50g)',
              '500 ml wody'
            ],
            calories: 730,
            prep: 'Bez przygotowania',
            notes: 'Pełne śniadanie, energia na cały dzień'
          },
          {
            time: '11:00',
            name: 'Drugie Śniadanie na Pilsku (~35 km)',
            items: [
              '1x Baton energetyczny',
              '1x Żel energetyczny',
              '500 ml wody'
            ],
            calories: 280,
            prep: 'Bez przygotowania',
            notes: 'Szybka energia, hydratacja'
          },
          {
            time: '13:00',
            name: 'Obiad w Schronisku Rysianka (~42 km)',
            items: [
              '1x Żurek (schronisko)',
              '1x Chleb',
              '1x Kompot (300ml)'
            ],
            calories: 670,
            prep: 'Schronisko (bez przygotowania)',
            notes: 'Pełny obiad, regeneracja'
          },
          {
            time: '16:00',
            name: 'Przerwa na Beskidzie Krzyżowskim (~49 km)',
            items: [
              '1x Baton energetyczny',
              '1x Orzechy (30g)',
              '500 ml wody'
            ],
            calories: 360,
            prep: 'Bez przygotowania',
            notes: 'Energia, białko'
          },
          {
            time: '18:00',
            name: 'Kolacja na Mędralowej Zachodniej (~71 km)',
            items: [
              '1x Kanapka (chleb, ser, szynka)',
              '1x Suszone owoce (50g)',
              '500 ml wody'
            ],
            calories: 730,
            prep: 'Bez przygotowania',
            notes: 'Energia na noc'
          },
          {
            time: '20:00',
            name: 'Przerwa na Okrąglicy (~81 km)',
            items: [
              '1x Žel energetyczny',
              '500 ml wody'
            ],
            calories: 100,
            prep: 'Bez przygotowania',
            notes: 'Szybka energia na finisz'
          },
          {
            time: '22:30',
            name: 'Przerwa na Turbaczu (~91 km)',
            items: [
              '1x Baton energetyczny',
              '1x Orzechy (30g)',
              '500 ml wody'
            ],
            calories: 360,
            prep: 'Bez przygotowania',
            notes: 'Energia na ostatki'
          },
          {
            time: '23:30',
            name: 'Przerwa na Starych Wierchach (~101 km)',
            items: [
              '1x Baton energetyczny',
              '1x Orzechy (30g)',
              '500 ml wody'
            ],
            calories: 360,
            prep: 'Bez przygotowania',
            notes: 'Energia na ostatni odcinek'
          },
          {
            time: '00:30',
            name: 'Przerwa na Obidowcu (~103 km)',
            items: [
              '1x Žel energetyczny',
              '500 ml wody'
            ],
            calories: 100,
            prep: 'Bez przygotowania',
            notes: 'Ostatnia energia przed schroniskiem'
          }
        ]
      },
      sunday: {
        title: 'Niedziela, 24 Maja – Regeneracja w Schronisku',
        meals: [
          {
            time: '08:00',
            name: 'Śniadanie (Schronisko)',
            items: [
              '1x Jajecznica (2 jaja)',
              '1x Chleb z masłem i dżemem',
              '1x Kawa/herbata'
            ],
            calories: 660,
            prep: 'Schronisko',
            notes: 'Pełne śniadanie, regeneracja'
          },
          {
            time: '14:00',
            name: 'Obiad (Schronisko)',
            items: [
              '1x Bigos (400g)',
              '1x Chleb',
              '1x Kompot',
              '1x Sernik (150g)'
            ],
            calories: 1070,
            prep: 'Schronisko',
            notes: 'Pełny obiad, regeneracja'
          },
          {
            time: '18:00',
            name: 'Kolacja (Schronisko)',
            items: [
              '1x Kotlety mielone (200g)',
              '1x Ziemniaki (200g)',
              '1x Surówka',
              '1x Kompot'
            ],
            calories: 730,
            prep: 'Schronisko',
            notes: 'Pełna kolacja, regeneracja'
          }
        ]
      }
    }
  };

  const etapData = nutritionData[activeEtap];
  const dayOptions = Object.keys(etapData);
  
  // Ustaw domyślny dzień na sobotę jeśli istnieje
  const validDay = dayOptions.includes(selectedDay) ? selectedDay : dayOptions[0];
  const selectedPlan = etapData[validDay];

  return (
    <div className="space-y-6">
      {/* Selektor etapów */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveEtap('etap1')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeEtap === 'etap1'
              ? 'bg-green-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          📍 Etap 1: Ustroń → Hala Boracza
        </button>
        <button
          onClick={() => setActiveEtap('etap2')}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeEtap === 'etap2'
              ? 'bg-green-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          📍 Etap 2: Barania Góra → Turbacz
        </button>
      </div>

      {/* Selektor dni */}
      <div className="flex gap-2 flex-wrap">
        {dayOptions.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              validDay === day
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {day === 'friday' && '🍽️ Piątek'}
            {day === 'saturday' && '🍽️ Sobota (Główny Etap)'}
            {day === 'sunday' && '🍽️ Niedziela'}
          </button>
        ))}
      </div>

      {/* Plan wybranego dnia */}
      <div className="section-card">
        <h3 className="text-xl font-bold text-green-400 mb-6">{selectedPlan.title}</h3>

        <div className="space-y-6">
          {selectedPlan.meals.map((meal, idx) => (
            <div key={idx} className="bg-black bg-opacity-40 p-4 rounded-lg border border-gray-700">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-yellow-400">{meal.time}</p>
                  <p className="text-lg font-bold text-white mt-1">{meal.name}</p>
                </div>
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">
                  {meal.calories} kcal
                </span>
              </div>

              {/* Składniki */}
              <div className="mb-3">
                <p className="text-sm text-gray-400 mb-2"><strong>Składniki:</strong></p>
                <ul className="text-sm text-gray-300 space-y-1 ml-4">
                  {meal.items.map((item, itemIdx) => (
                    <li key={itemIdx}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Przygotowanie */}
              <div className="mb-3">
                <p className="text-sm text-gray-400"><strong>Przygotowanie:</strong> {meal.prep}</p>
              </div>

              {/* Notatki */}
              <div className="bg-blue-900 bg-opacity-30 p-2 rounded text-sm text-blue-300">
                <strong>💡 Notatka:</strong> {meal.notes}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Podsumowanie kaloryczne */}
      <div className="section-card">
        <h3 className="text-lg font-bold text-orange-400 mb-4">📊 Podsumowanie Kaloryczne</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activeEtap === 'etap1' ? (
            <>
              <div className="bg-black bg-opacity-40 p-4 rounded">
                <p className="text-gray-400 text-sm">Piątek</p>
                <p className="text-2xl font-bold text-green-400">800 kcal</p>
              </div>
              <div className="bg-black bg-opacity-40 p-4 rounded">
                <p className="text-gray-400 text-sm">Sobota (53 km)</p>
                <p className="text-2xl font-bold text-red-400">3200 kcal</p>
                <p className="text-xs text-gray-500 mt-1">~60 kcal/km</p>
              </div>
              <div className="bg-black bg-opacity-40 p-4 rounded">
                <p className="text-gray-400 text-sm">Niedziela</p>
                <p className="text-2xl font-bold text-blue-400">700 kcal</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-black bg-opacity-40 p-4 rounded">
                <p className="text-gray-400 text-sm">Piątek</p>
                <p className="text-2xl font-bold text-green-400">180 kcal</p>
              </div>
              <div className="bg-black bg-opacity-40 p-4 rounded">
                <p className="text-gray-400 text-sm">Sobota (60 km)</p>
                <p className="text-2xl font-bold text-red-400">3810 kcal</p>
                <p className="text-xs text-gray-500 mt-1">~64 kcal/km</p>
              </div>
              <div className="bg-black bg-opacity-40 p-4 rounded">
                <p className="text-gray-400 text-sm">Niedziela</p>
                <p className="text-2xl font-bold text-blue-400">2460 kcal</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Porady */}
      <div className="section-card">
        <h3 className="text-lg font-bold text-purple-400 mb-4">⚠️ Eksperckie Porady Żywieniowe</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>✓ <strong>Hydratacja:</strong> Pij regularnie – co 30-45 minut po 200-300 ml wody.</li>
          <li>✓ <strong>Elektrolity:</strong> Weź tabletki elektrolitowe (sól, potas) – pomogą w regeneracji.</li>
          <li>✓ <strong>Kuchenka gazowa:</strong> Weź zapasowe kartridże. Jedna kartridża wystarczy na 2-3 posiłki.</li>
          <li>✓ <strong>Krzesiwo:</strong> Idealne do szybkiego rozgrzania wody. Weź zapasowe.</li>
          <li>✓ <strong>Liofilizaty:</strong> Leciutkie, trwałe, szybkie w przygotowaniu. Idealne dla trekkera.</li>
          <li>✓ <strong>Puszki:</strong> Cięższe, ale bardziej sycące. Zabrać 2-3 na cały etap.</li>
          <li>✓ <strong>Batony energetyczne:</strong> Weź co najmniej 6-8 sztuk na cały dzień.</li>
          <li>✓ <strong>Żele energetyczne:</strong> Szybka energia – idealne na ostatnie kilometry.</li>
        </ul>
      </div>
    </div>
  );
}
