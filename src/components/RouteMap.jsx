import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

    // Trasa z Ustronia na Halę Boraczą
    const routeCoordinates = [
      [49.7210, 18.8155], // Ustroń Zdrój (start)
      [49.7185, 18.8175],
      [49.7150, 18.8200],
      [49.7100, 18.8250],
      [49.7050, 18.8300],
      [49.6950, 18.8400],
      [49.6850, 18.8450],
      [49.6750, 18.8500],
      [49.6650, 18.8550],
      [49.6550, 18.8600],
      [49.6450, 18.8700],
      [49.6350, 18.8800],
      [49.6250, 18.8900],
      [49.6150, 18.9000],
      [49.6050, 18.9100],
      [49.5950, 18.9200],
      [49.5850, 18.9300],
      [49.5750, 18.9400],
      [49.5650, 18.9500],
      [49.5550, 18.9600],
      [49.5450, 18.9700],
      [49.5350, 18.9800],
      [49.5250, 18.9900],
      [49.5150, 19.0000],
      [49.5050, 19.0100],
      [49.4950, 19.0200],
      [49.4850, 19.0300],
      [49.4750, 19.0400],
      [49.4650, 19.0500],
      [49.4550, 19.0600],
      [49.4450, 19.0700],
      [49.4350, 19.0800],
      [49.4250, 19.0900],
      [49.4150, 19.1000],
      [49.4050, 19.1100],
      [49.3950, 19.1200],
      [49.3850, 19.1300],
      [49.3750, 19.1400],
      [49.3650, 19.1500],
      [49.3550, 19.1600],
      [49.3450, 19.1700],
      [49.3350, 19.1800],
      [49.3250, 19.1900],
      [49.3150, 19.2000],
      [49.3050, 19.2100],
      [49.2950, 19.2200],
      [49.2850, 19.2300],
      [49.2750, 19.2400],
      [49.2650, 19.2500],
      [49.2550, 19.2600],
    ];

    // Dodanie trasy na mapę
    L.polyline(routeCoordinates, {
      color: '#dc2626',
      weight: 3,
      opacity: 0.8,
      dashArray: '5, 5'
    }).addTo(map);

    // Punkty kluczowe
    const keyPoints = [
      { lat: 49.7210, lon: 18.8155, name: 'Ustroń Zdrój (Start)', icon: startIcon, km: 0 },
      { lat: 49.6850, lon: 18.8450, name: 'Równica', icon: peakIcon, km: 4.5 },
      { lat: 49.6350, lon: 18.8800, name: 'Czantoria Wielka', icon: peakIcon, km: 12 },
      { lat: 49.5750, lon: 18.9400, name: 'Schronisko Stożek', icon: shelterIcon, km: 21 },
      { lat: 49.4950, lon: 19.0200, name: 'Przełęcz Kubalonka', icon: peakIcon, km: 29 },
      { lat: 49.4050, lon: 19.1100, name: 'Barania Góra', icon: peakIcon, km: 41 },
      { lat: 49.3050, lon: 19.2100, name: 'Węgierska Górka', icon: peakIcon, km: 48 },
      { lat: 49.2550, lon: 19.2600, name: 'Hala Boracza (Nocleg)', icon: shelterIcon, km: 53 },
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

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, []);

  return <div ref={mapRef} className="map-container" />;
}
