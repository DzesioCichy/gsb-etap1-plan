import { useState } from 'react'

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
        title: 'Sobota, 23 Maja – Barania Góra → Punkt B → Markowe Szczawiny (~42 km)',
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
            time: '13:30',
            name: 'Obiad na Punkcie B (~42 km)',
            items: [
              '1x Kanapka (chleb, ser, szynka)',
              '1x Suszone owoce (50g)',
              '500 ml wody'
            ],
            calories: 730,
            prep: 'Bez przygotowania',
            notes: 'Pełny obiad, regeneracja przed zejściem'
          },
          {
            time: '14:30',
            name: 'Zejście do Markowych Szczawin (0.30h - 16.85 km)',
            items: [
              '1x Baton energetyczny',
              '1x Żel energetyczny',
              '500 ml wody'
            ],
            calories: 280,
            prep: 'Bez przygotowania',
            notes: 'Energia na zejście'
          },
          {
            time: '16:15+',
            name: 'Nocleg w Schronisku Markowe Szczawiny',
            items: [
              '1x Kolacja schroniskowa',
              '1x Herbata/kawa',
              '1x Deser'
            ],
            calories: 600,
            prep: 'Schronisko',
            notes: 'Regeneracja po 42 km szlaku + 16.85 km zejścia'
          }
        ]
      },
      sunday: {
        title: 'Niedziela, 24 Maja – Markowe Szczawiny → Punkt B → Turbacz (~34 km)',
        meals: [
          {
            time: '08:00',
            name: 'Śniadanie (Schronisko Markowe Szczawiny)',
            items: [
              '1x Śniadanie schroniskowe',
              '1x Kawa/herbata',
              '1x Baton energetyczny'
            ],
            calories: 600,
            prep: 'Schronisko',
            notes: 'Pełne śniadanie, regeneracja'
          },
          {
            time: '09:00',
            name: 'Powrót na szlak (0.30h - 16.85 km)',
            items: [
              '1x Baton energetyczny',
              '1x Żel energetyczny',
              '500 ml wody'
            ],
            calories: 280,
            prep: 'Bez przygotowania',
            notes: 'Energia na powrót na szlak'
          },
          {
            time: '11:15',
            name: 'Przerwa na Punkcie B (~0 km)',
            items: [
              '1x Baton energetyczny',
              '1x Orzechy (30g)',
              '500 ml wody'
            ],
            calories: 360,
            prep: 'Bez przygotowania',
            notes: 'Energia, hydratacja'
          },
          {
            time: '13:45',
            name: 'Obiad na Beskidzie Krzyżowskim (~7 km)',
            items: [
              '1x Kanapka (chleb, ser, szynka)',
              '1x Suszone owoce (50g)',
              '500 ml wody'
            ],
            calories: 730,
            prep: 'Bez przygotowania',
            notes: 'Energia na drugą połowę'
          },
          {
            time: '16:15',
            name: 'Przerwa na Mędralowej Zachodniej (~29 km)',
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
            time: '17:45',
            name: 'Przerwa na Okrąglicy (~35 km)',
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
            time: '19:15+',
            name: 'Kolacja w Schronisku PTTK Turbacz (~45 km)',
            items: [
              '1x Kolacja schroniskowa',
              '1x Chleb',
              '1x Kompot',
              '1x Deser'
            ],
            calories: 800,
            prep: 'Schronisko',
            notes: 'Regeneracja po 34 km szlaku + 16.85 km powrotu – koniec Etap 2'
          }
        ]
      }
    }
  };

  const etapData = nutritionData[activeEtap];
  const dayOptions = Object.keys(etapData);
  
  // Ustaw domyślny dzień na sobotę jeśli istnieje
  const defaultDay = activeEtap === 'etap2' ? 'saturday' : 'friday';
  const validDay = dayOptions.includes(selectedDay) ? selectedDay : (dayOptions.includes(defaultDay) ? defaultDay : dayOptions[0]);
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
        {dayOptions.map(day => {
          const dayLabels = {
            friday: '🍽️ Piątek',
            saturday: '🍽️ Sobota (Główny Etap)',
            sunday: '🍽️ Niedziela'
          };
          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                validDay === day
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {dayLabels[day] || day}
            </button>
          );
        })}
      </div>

      {/* Plan żywienia */}
      <div className="section-card">
        <h2 className="section-title">{selectedPlan.title}</h2>
        
        <div className="space-y-4">
          {selectedPlan.meals.map((meal, idx) => (
            <div key={idx} className="border border-gray-600 rounded-lg p-4 bg-gray-800 bg-opacity-50">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-green-400">{meal.name}</h3>
                  <p className="text-sm text-gray-400">⏰ {meal.time}</p>
                </div>
                <span className="bg-green-600 text-white px-3 py-1 rounded font-bold text-sm">
                  {meal.calories} kcal
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400 mb-2 font-semibold">Składniki:</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {meal.items.map((item, itemIdx) => (
                      <li key={itemIdx}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-gray-400 mb-2 font-semibold">Przygotowanie:</p>
                  <p className="text-sm text-gray-300 mb-3">{meal.prep}</p>
                  <p className="text-sm text-gray-400 mb-2 font-semibold">Notatka:</p>
                  <p className="text-sm text-gray-300 italic">{meal.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Podsumowanie kaloryczne */}
        <div className="mt-6 bg-black bg-opacity-40 p-4 rounded-lg">
          <h3 className="font-bold text-green-400 mb-2">📊 Podsumowanie Kaloryczne</h3>
          <p className="text-sm text-gray-300">
            <strong>Razem:</strong> {selectedPlan.meals.reduce((sum, meal) => sum + meal.calories, 0)} kcal
          </p>
          <p className="text-sm text-gray-400 mt-2">
            💡 Dla dystansu ~{validDay === 'saturday' && activeEtap === 'etap2' ? '55' : validDay === 'sunday' && activeEtap === 'etap2' ? '59' : '53'} km zalecane jest 2500-3500 kcal dziennie
          </p>
        </div>
      </div>

      {/* Porady żywieniowe */}
      <div className="section-card">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">💡 Porady Żywieniowe</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li>✓ <strong>Hydratacja:</strong> Pij regularnie co 30-45 minut po 200-300 ml wody</li>
          <li>✓ <strong>Elektrolityka:</strong> Wzbogacaj wodę elektrolitami (sól, potas) – unikaj odwodnienia</li>
          <li>✓ <strong>Kuchenka gazowa:</strong> Wóż zapasowe kartridże. Jedna kartridża wystarczy na 2-3 posiłki</li>
          <li>✓ <strong>Proteiny:</strong> Suchą energię – idealne na ostatnie kilometry</li>
          <li>✓ <strong>Zele energetyczne:</strong> Szybka energia – idealne na ostatnie kilometry</li>
        </ul>
      </div>
    </div>
  );
}
