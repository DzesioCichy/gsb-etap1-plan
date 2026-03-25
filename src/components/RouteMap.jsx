import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Force rebuild: 2026-03-25 11:15 - Loading actual GSB trail from etap1_route.json

export default function RouteMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Inicjalizacja mapy
    const map = L.map(mapRef.current).setView([49.5, 19.0], 11);

    // Dodanie warstwy kafelków
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Ikony dla różnych typów punktów
    const parkingIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    const startIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    const shelterIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    const peakIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Ładowanie rzeczywistej trasy z pliku JSON
    fetch('/etap1_route.json')
      .then(response => response.json())
      .then(data => {
        // Dodanie rzeczywistej trasy na mapę
        L.polyline(data.coordinates, {
          color: '#dc2626',
          weight: 3,
          opacity: 0.8,
          dashArray: '5, 5'
        }).addTo(map);
      })
      .catch(error => {
        console.error('Błąd ładowania trasy:', error);
        // Fallback na starą trasę jeśli JSON nie załaduje się
        const routeCoordinates = [
          [49.7210, 18.8155], // Ustroń Zdrój (start)
          [49.3550, 19.1600], // Hala Boracza (koniec)
        ];
        L.polyline(routeCoordinates, {
          color: '#dc2626',
          weight: 3,
          opacity: 0.8,
          dashArray: '5, 5'
        }).addTo(map);
      });

    // Punkty kluczowe
    const keyPoints = [
      { lat: 49.7210, lon: 18.8155, name: 'Ustroń Zdrój (Start)', icon: startIcon, km: 0 },
      { lat: 49.6850, lon: 18.8450, name: 'Równica', icon: peakIcon, km: 4.5 },
      { lat: 49.6350, lon: 18.8800, name: 'Czantoria Wielka', icon: peakIcon, km: 12 },
      { lat: 49.5750, lon: 18.9400, name: 'Schronisko Stożek', icon: shelterIcon, km: 21 },
      { lat: 49.4950, lon: 19.0200, name: 'Przełęcz Kubalonka', icon: peakIcon, km: 29 },
      { lat: 49.4050, lon: 19.1100, name: 'Barania Góra', icon: peakIcon, km: 41 },
      { lat: 49.3050, lon: 19.2100, name: 'Węgierska Górka', icon: peakIcon, km: 48 },
      { lat: 49.3550, lon: 19.1600, name: 'Hala Boracza (Nocleg)', icon: shelterIcon, km: 53 },
    ];

    // Dodanie markerów dla punktów kluczowych
    keyPoints.forEach(point => {
      L.marker([point.lat, point.lon], { icon: point.icon })
        .bindPopup(`<strong>${point.name}</strong><br/>Dystans: ${point.km} km<br/>Współrzędne: ${point.lat.toFixed(4)}, ${point.lon.toFixed(4)}`)
        .addTo(map);
    });

    // Parking
    const parkingPoint = { lat: 49.7210, lon: 18.8155, name: 'Parking Darmowy (ul. Grażyńskiego)' };
    L.marker([parkingPoint.lat, parkingPoint.lon], { icon: parkingIcon })
      .bindPopup(`<strong>${parkingPoint.name}</strong><br/>Współrzędne: ${parkingPoint.lat.toFixed(4)}, ${parkingPoint.lon.toFixed(4)}`)
      .addTo(map);

    // Wymuszenie przeliczenia wymiarów
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map-wrapper" />
    </div>
  );
}
