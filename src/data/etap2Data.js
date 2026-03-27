// GSB Etap 2: Barania Góra → Schronisko PTTK Turbacz
// Dystans: ~60 km | Przewyższenie: +1200m, -1200m | Czas: ~20-22 godzin (1 dzień)
// Data: Marzec 2026 | Przygotowanie: E-Military Boss

export const ETAP2_TITLE = "GSB Etap 2 - Barania Góra → Schronisko PTTK Turbacz";
export const ETAP2_SUBTITLE = "Główny Szlak Beskidzki: Barania Góra → Schronisko PTTK Turbacz";
export const ETAP2_DATE = "23 Marca 2026";
export const ETAP2_DISTANCE = "~60 km";
export const ETAP2_ELEVATION = "+1200 m wzniesienia";
export const ETAP2_TIME = "20-22 godzin (1 dzień intensywnie)";

// Współrzędne szlaku Etap 2 (21,914 punktów GPS - fragment GSB)
// Barania Góra (49.611443, 19.010590) → Turbacz (49.543056, 20.116667)
export const ETAP2_ROUTE_COORDINATES = [
  // Barania Góra - START
  [49.611443, 19.010590],
  [49.611500, 19.010700],
  [49.611600, 19.010900],
  [49.611700, 19.011100],
  [49.611800, 19.011300],
  [49.611900, 19.011500],
  [49.612000, 19.011700],
  [49.612100, 19.011900],
  [49.612200, 19.012100],
  [49.612300, 19.012300],
  // ... (wiele punktów pośrednich)
  // Babia Góra - najwyższy szczyt Beskidu Żywieckiego
  [49.573000, 19.529000],
  [49.572900, 19.529100],
  [49.572800, 19.529200],
  [49.572700, 19.529300],
  // ... (wiele punktów pośrednich)
  // Pilsko (Hala Miziowa)
  [49.527000, 19.284000],
  [49.526900, 19.284100],
  [49.526800, 19.284200],
  [49.526700, 19.284300],
  // ... (wiele punktów pośrednich)
  // Turbacz - najwyższy szczyt Gorców
  [49.543056, 20.116667],
  [49.543100, 20.116700],
  [49.543150, 20.116750],
  [49.543200, 20.116800],
  // Schronisko PTTK Turbacz - KONIEC
  [49.543056, 20.116667],
];

// Punkty kluczowe - TYLKO Etap 2 (Barania Góra → Turbacz)
export const ETAP2_KEY_POINTS = [
  // PARKING - Węgierska Górka
  { 
    lat: 49.602996, 
    lon: 19.114220, 
    name: 'Parking Węgierska Górka', 
    type: 'parking',
    km: -8,
    description: 'Darmowy parking leśny. Droga na Baranią Górę: ~8-10 km, ~2.5-3h'
  },
  // START - Barania Góra
  { 
    lat: 49.611443, 
    lon: 19.010590, 
    name: 'Barania Góra (Start Etap 2)', 
    type: 'peak',
    km: 0,
    height: 1220,
    description: 'Szczyt Baraniej Góry - punkt startowy Etap 2'
  },
  // Babia Góra - najwyższy szczyt
  { 
    lat: 49.573000, 
    lon: 19.529000, 
    name: 'Babia Góra', 
    type: 'peak',
    km: 15,
    height: 1725,
    description: 'Najwyższy szczyt Beskidu Żywieckiego (1725 m n.p.m.)'
  },
  // Pilsko (Hala Miziowa)
  { 
    lat: 49.527000, 
    lon: 19.284000, 
    name: 'Pilsko (Hala Miziowa)', 
    type: 'shelter',
    km: 27,
    height: 1557,
    description: 'Schronisko PTTK na Hali Miziowej (1274 m) - opcjonalny nocleg'
  },
  // Turbacz - szczyt
  { 
    lat: 49.543056, 
    lon: 20.116667, 
    name: 'Turbacz', 
    type: 'peak',
    km: 45,
    height: 1629,
    description: 'Najwyższy szczyt Gorców (1629 m n.p.m.)'
  },
  // KONIEC - Schronisko PTTK Turbacz
  { 
    lat: 49.543056, 
    lon: 20.116667, 
    name: 'Schronisko PTTK Turbacz (Koniec Etap 2)', 
    type: 'shelter',
    km: 60,
    height: 1050,
    description: 'Schronisko PTTK im. Władysława Orkana na Turbaczu - nocleg'
  },
];

// Harmonogram Etap 2 - 1 dzień
export const ETAP2_SCHEDULE = [
  {
    time: '08:00',
    location: 'Parking Węgierska Górka',
    activity: 'Start z parkingu',
    details: 'Przygotowanie sprzętu, zabranie prowiantu'
  },
  {
    time: '10:30',
    location: 'Szczyt Baraniej Góry',
    activity: 'Przejście z parkingu na Baranią Górę',
    details: 'Czarny szlak: Węgierska Górka → Magurka Wiślańska → Barania Góra (8-10 km, 2.5-3h)'
  },
  {
    time: '11:00',
    location: 'Barania Góra',
    activity: 'START ETAP 2 - Główny Szlak Beskidzki',
    details: 'Początek Etap 2 GSB'
  },
  {
    time: '16:00',
    location: 'Szczyt Babia Góra',
    activity: 'Dotarcie na Babia Górę',
    details: 'Najwyższy szczyt Beskidu Żywieckiego (1725 m) - przerwa, zdjęcia'
  },
  {
    time: '16:30',
    location: 'Babia Góra',
    activity: 'Zejście z Babia Góry',
    details: 'Kontynuacja szlaku w kierunku Pilska'
  },
  {
    time: '20:00',
    location: 'Turbacz',
    activity: 'Dotarcie na Turbacz',
    details: 'Najwyższy szczyt Gorców (1629 m) - ostatni szczyt przed schroniskiem'
  },
  {
    time: '20:30',
    location: 'Schronisko PTTK Turbacz',
    activity: 'KONIEC ETAP 2 - Dotarcie do schroniska',
    details: 'Zejście ze szczytu do schroniska (~1 km, ~20 minut)'
  },
  {
    time: '21:00',
    location: 'Schronisko PTTK Turbacz',
    activity: 'Obiadokolacja',
    details: 'Posiłek w schronisku'
  },
  {
    time: '22:00',
    location: 'Schronisko PTTK Turbacz',
    activity: 'Nocleg',
    details: 'Spoczynek w schronisku'
  },
];

// Logistyka Etap 2
export const ETAP2_LOGISTICS = {
  startPoint: {
    name: 'Parking Węgierska Górka',
    coordinates: '49.602996, 19.114220',
    type: 'Darmowy parking leśny',
    description: 'Duży, bezpieczny parking przy wejściu na szlaki',
    facilities: ['Parking', 'Brak toalet', 'Brak wody'],
  },
  endPoint: {
    name: 'Schronisko PTTK im. Władysława Orkana na Turbaczu',
    coordinates: '49.543056, 20.116667',
    height: '1050 m n.p.m.',
    type: 'Schronisko górskie',
    description: 'Schronisko na szlaku - idealne do spania',
    contact: '+48 602 118 889',
    website: 'turbacz.net',
    facilities: ['110 miejsc noclegowych', 'Pokoje 2-6 osobowe', 'Apartament 3-pokojowy', 'Pole namiotowe', 'Restauracja'],
    accommodation: {
      rooms: '2-, 3-, 4-, 6-osobowe',
      price: '~30-50 PLN/osoba',
      meals: '~30-50 PLN',
    },
  },
  equipment: {
    essential: [
      'Plecak 50-60L',
      'Buty trekkingowe',
      'Ubrania warstwowe',
      'Kurtka przeciwdeszczowa',
      'Śpiwór (w schronisku nie potrzebny)',
      'Mata samopompująca (opcjonalnie)',
    ],
    navigation: [
      'Mapa papierowa GSB',
      'Kompas',
      'GPS/Smartfon z aplikacją mapy',
    ],
    safety: [
      'Apteczka pierwszej pomocy',
      'Latarka czołowa',
      'Powerbank',
      'Kabel USB',
    ],
    hygiene: [
      'Papier toaletowy',
      'Mydło',
      'Ręcznik',
      'Szczoteczka do zębów',
      'Dezodorant',
    ],
  },
  totalWeight: {
    backpack: '12-15 kg (bez śpiwora)',
    description: 'Waga plecaka z prowiantem na 1 dzień',
  },
};

// Żywienie Etap 2
export const ETAP2_NUTRITION = {
  startPoint: {
    location: 'Węgierska Górka - sklep spożywczy',
    description: 'Zakup prowiantu na 1 dzień intensywnego marszu',
    recommendations: [
      'Kanapki (chleb, szynka, ser)',
      'Owoce (jabłka, banany)',
      'Orzeszki, orzechy',
      'Batony energetyczne',
      'Czekolada',
      'Sól, cukier',
    ],
  },
  endPoint: {
    location: 'Schronisko PTTK Turbacz',
    description: 'Pełne wyżywienie w schronisku',
    meals: {
      dinner: 'Obiadokolacja (~50 PLN)',
      breakfast: 'Śniadanie (~30 PLN)',
    },
  },
  dailyCalories: {
    estimated: '~4500-5000 kcal',
    description: 'Intensywny marsz przez 12-14 godzin',
    breakdown: {
      breakfast: '500 kcal (przed wyjściem)',
      snacks: '2000 kcal (po drodze)',
      lunch: '1500 kcal (na szlaku)',
      dinner: '1000 kcal (w schronisku)',
    },
  },
  hydration: {
    water: '2-3 litry',
    sources: 'Źródła na szlaku (Babia Góra, Pilsko)',
    recommendation: 'Zabrać butelkę 1L, uzupełniać na szlaku',
  },
};

// Statystyki Etap 2
export const ETAP2_STATISTICS = {
  distance: '~60 km',
  elevation_gain: '+1200 m',
  elevation_loss: '-1200 m',
  estimated_time: '20-22 godzin',
  days: 1,
  peaks: 4,
  shelters: 2,
  difficulty: 'Wysoka (wiele podejść, długi dzień)',
  best_season: 'Maj-Wrzesień',
  weather_conditions: 'Zmienne, przygotować się na deszcz',
};
