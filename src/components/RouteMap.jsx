import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ROUTE_COORDINATES } from '../data/routeData';

// Force rebuild: 2026-03-26 10:45 - Snap markers to actual GPS trail using closest point algorithm

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
    const polyline = L.polyline(ROUTE_COORDINATES, {
      color: '#dc2626',
      weight: 3,
      opacity: 0.8,
      dashArray: '5, 5'
    }).addTo(map);
    
    console.log(`✓ Załadowano trasę GSB Etap 1 z ${ROUTE_COORDINATES.length} punktami GPS`);

    // Punkty kluczowe - TYLKO Etap 1 (Ustroń → Hala Boracza)
    const keyPointsOriginal = [
      { lat: 49.7210, lon: 18.8155, name: 'Ustroń Zdrój (Start)', icon: startIcon, km: 0 },
      { lat: 49.683, lon: 18.833, name: 'Równica', icon: peakIcon, km: 4.5 },
      { lat: 49.613, lon: 18.843, name: 'Czantoria Wielka', icon: peakIcon, km: 12 },
      { lat: 49.605, lon: 18.824, name: 'Schronisko Stożek', icon: shelterIcon, km: 21 },
      { lat: 49.405, lon: 19.11, name: 'Barania Góra', icon: peakIcon, km: 35 },
      { lat: 49.5421407, lon: 19.1697676, name: 'Schronisko PTTK Hala Boracza', icon: shelterIcon, km: 53 },
    ];

    // Snapuj każdy punkt do najbliższego punktu na trasie (OPRÓCZ Hali Boraczej)
    const keyPoints = keyPointsOriginal.map(point => {
      // Hala Boracza - nie snapuj, użyj dokładnych współrzędnych schroniska
      if (point.name.includes('Hala Boracza')) {
        return {
          ...point,
          distanceFromTrack: 'na schronisku'
        };
      }
      
      const { point: snappedPoint, distance } = findClosestPointOnTrack(
        point.lat,
        point.lon,
        ROUTE_COORDINATES
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

    console.log('✓ Markery snapowane do trasy (Hala Boracza na dokładnych współrzędnych):', keyPoints);

    // Dodanie markerów dla punktów kluczowych (teraz na trasie)
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

    // Parking
    const parkingPoint = { lat: 49.7210, lon: 18.8155, name: 'Parking Darmowy (ul. Grażyńskiego)' };
    L.marker([parkingPoint.lat, parkingPoint.lon], { icon: parkingIcon })
      .bindPopup(`<strong>${parkingPoint.name}</strong><br/>Współrzędne: ${parkingPoint.lat.toFixed(4)}, ${parkingPoint.lon.toFixed(4)}`)
      .addTo(map);

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
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map-wrapper" />
    </div>
  );
}
