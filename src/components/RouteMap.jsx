import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ROUTE_COORDINATES } from '../data/routeData';
import { ETAP2_ROUTE_COORDINATES, ETAP2_KEY_POINTS } from '../data/etap2Data';

// Force rebuild: 2026-03-27 - Dodanie Etap 2 (Barania Góra → Turbacz)

// Haversine distance calculator
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Find closest point on track to a given POI
const findClosestPointOnTrack = (poiLat, poiLon, trackCoordinates) => {
  let minDistance = Infinity;
  let closestPoint = null;
  let closestIndex = 0;

  trackCoordinates.forEach((point, index) => {
    const distance = haversineDistance(poiLat, poiLon, point[0], point[1]);
    if (distance < minDistance) {
      minDistance = distance;
      closestPoint = point;
      closestIndex = index;
    }
  });

  return { point: closestPoint, distance: minDistance, index: closestIndex };
};

export default function RouteMap({ activeEtap = 'etap1' }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Wyczyść poprzednią mapę
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
    }

    // Inicjalizacja mapy
    const map = L.map(mapRef.current).setView(
      activeEtap === 'etap1' ? [49.5, 19.0] : [49.57, 19.57],
      activeEtap === 'etap1' ? 11 : 10
    );

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

    // Wybór danych w zależności od etapu
    const routeCoordinates = activeEtap === 'etap1' ? ROUTE_COORDINATES : ETAP2_ROUTE_COORDINATES;
    const keyPointsData = activeEtap === 'etap1' 
      ? [
          { lat: 49.7210, lon: 18.8155, name: 'Ustroń Zdrój (Start)', icon: startIcon, km: 0 },
          { lat: 49.7247, lon: 18.8566, name: 'Równica', icon: peakIcon, km: 4.5 },
          { lat: 49.6788, lon: 18.8047, name: 'Czantoria Wielka', icon: peakIcon, km: 12 },
          { lat: 49.605, lon: 18.824, name: 'Schronisko Stożek', icon: shelterIcon, km: 21 },
          { lat: 49.611443, lon: 19.010590, name: 'Barania Góra', icon: peakIcon, km: 35 },
          { lat: 49.5421407, lon: 19.1697676, name: 'Schronisko PTTK Hala Boracza', icon: shelterIcon, km: 53 },
        ]
      : ETAP2_KEY_POINTS.map(point => ({
          ...point,
          icon: point.type === 'parking' ? parkingIcon : 
                 point.type === 'shelter' ? shelterIcon : 
                 point.type === 'peak' ? peakIcon : startIcon
        }));

    // Dodanie rzeczywistej trasy na mapę
    const polyline = L.polyline(routeCoordinates, {
      color: '#dc2626',
      weight: 3,
      opacity: 0.8,
      dashArray: '5, 5'
    }).addTo(map);
    
    console.log(`✓ Załadowano trasę GSB ${activeEtap === 'etap1' ? 'Etap 1' : 'Etap 2'} z ${routeCoordinates.length} punktami GPS`);

    // Snapuj każdy punkt do najbliższego punktu na trasie
    const keyPoints = keyPointsData.map(point => {
      // Punkty, które nie powinny być snapowane (parking, schroniska poza szlakiem)
      if (point.name.includes('Parking') || 
          point.name.includes('Hala Boracza') ||
          point.name.includes('Turbacz') && point.type === 'shelter') {
        return {
          ...point,
          distanceFromTrack: 'poza szlakiem'
        };
      }
      
      const { point: snappedPoint, distance } = findClosestPointOnTrack(
        point.lat,
        point.lon,
        routeCoordinates
      );
      return {
        ...point,
        lat: snappedPoint[0],
        lon: snappedPoint[1],
        originalLat: point.lat,
        originalLon: point.lon,
        distanceFromTrack: (distance * 1000).toFixed(0) // convert to meters
      };
    });

    console.log(`✓ Markery snapowane do trasy (${activeEtap === 'etap1' ? 'Etap 1' : 'Etap 2'}):`, keyPoints);

    // Dodanie markerów dla punktów kluczowych
    keyPoints.forEach(point => {
      L.marker([point.lat, point.lon], { icon: point.icon })
        .bindPopup(
          `<strong>${point.name}</strong><br/>` +
          `Dystans: ${point.km} km<br/>` +
          `Współrzędne: ${point.lat.toFixed(4)}, ${point.lon.toFixed(4)}<br/>` +
          `<small>${typeof point.distanceFromTrack === 'string' ? point.distanceFromTrack : `Oddalenie od szlaku: ${point.distanceFromTrack}m`}</small>`
        )
        .addTo(map);
    });

    // Fit map to polyline bounds
    map.fitBounds(polyline.getBounds(), { padding: [50, 50] });

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
  }, [activeEtap]);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map-wrapper" />
    </div>
  );
}
