import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ROUTE_COORDINATES } from '../data/routeData';

// Force rebuild: 2026-03-26 10:40 - Fixed marker coordinates to match GPS trail waypoints

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

    // Dodanie rzeczywistej trasy na mapę (dane osadzone w komponencie)
    L.polyline(ROUTE_COORDINATES, {
      color: '#dc2626',
      weight: 3,
      opacity: 0.8,
      dashArray: '5, 5'
    }).addTo(map);
    
    console.log(`✓ Załadowano trasę GSB Etap 1 z ${ROUTE_COORDINATES.length} punktami GPS`);

    // Punkty kluczowe - współrzędne z GPX i Maptons
    const keyPoints = [
      { lat: 49.7210, lon: 18.8155, name: 'Ustroń Zdrój (Start)', icon: startIcon, km: 0 },
      { lat: 49.683, lon: 18.833, name: 'Równica', icon: peakIcon, km: 4.5 },
      { lat: 49.613, lon: 18.843, name: 'Czantoria Wielka', icon: peakIcon, km: 12 },
      { lat: 49.605, lon: 18.824, name: 'Schronisko Stożek', icon: shelterIcon, km: 21 },
      { lat: 49.573, lon: 19.529, name: 'Babia Góra (Diablak)', icon: peakIcon, km: 35 },
      { lat: 49.527, lon: 19.284, name: 'Pilsko (Hala Miziowa)', icon: peakIcon, km: 41 },
      { lat: 49.549, lon: 20.111, name: 'Turbacz', icon: peakIcon, km: 45 },
      { lat: 49.5421407, lon: 19.1697676, name: 'Schronisko PTTK Hala Boracza', icon: shelterIcon, km: 53 },
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
