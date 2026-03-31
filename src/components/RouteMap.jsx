import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ROUTE_COORDINATES } from '../data/routeData';
import { ETAP2_ROUTE_COORDINATES, ETAP2_KEY_POINTS } from '../data/etap2Data';
import { ETAP3_ROUTE, ETAP3_KEY_POINTS } from '../data/etap3Data';

// Haversine distance calculator
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
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
  if (!Array.isArray(trackCoordinates) || trackCoordinates.length === 0) {
    return { point: [poiLat, poiLon], distance: 0, index: 0 };
  }

  let minDistance = Infinity;
  let closestPoint = null;
  let closestIndex = 0;

  for (let i = 0; i < trackCoordinates.length; i++) {
    const [lat, lon] = trackCoordinates[i];
    const distance = haversineDistance(poiLat, poiLon, lat, lon);

    if (distance < minDistance) {
      minDistance = distance;
      closestPoint = [lat, lon];
      closestIndex = i;
    }
  }

  return { point: closestPoint || [poiLat, poiLon], distance: minDistance, index: closestIndex };
};

// Etap 1 key points (defined locally)
const ETAP1_KEY_POINTS = [
  { lat: 49.721079, lon: 18.815629, name: 'Ustroń (Start)', type: 'start', height: 300, km: 0 },
  { lat: 49.7247, lon: 18.8566, name: 'Równica', type: 'peak', km: 4.5 },
  { lat: 49.6788, lon: 18.8047, name: 'Czantoria Wielka', type: 'peak', km: 12 },
  { lat: 49.605, lon: 18.824, name: 'Schronisko Stożek', type: 'shelter', km: 21 },
  { lat: 49.611443, lon: 19.010590, name: 'Barania Góra', type: 'peak', km: 35 },
  { lat: 49.5421407, lon: 19.1697676, name: 'Schronisko PTTK Hala Boracza', type: 'shelter', km: 53 },
];

export default function RouteMap({ activeEtap = 'etap1' }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    try {
      // Wyczyść poprzednią mapę
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Wybór danych w zależności od etapu
      let routeCoordinates = [];
      let keyPointsData = [];
      let mapCenter = [49.5, 19.0];
      let mapZoom = 11;

      console.log(`🔍 RouteMap: activeEtap=${activeEtap}`);
      console.log(`🔍 ROUTE_COORDINATES: ${ROUTE_COORDINATES ? ROUTE_COORDINATES.length : 0} punktów`);
      console.log(`🔍 ETAP2_ROUTE_COORDINATES: ${ETAP2_ROUTE_COORDINATES ? ETAP2_ROUTE_COORDINATES.length : 0} punktów`);
      console.log(`🔍 ETAP2_KEY_POINTS: ${ETAP2_KEY_POINTS ? ETAP2_KEY_POINTS.length : 0} markerów`);

      if (activeEtap === 'etap1') {
        routeCoordinates = ROUTE_COORDINATES || [];
        mapCenter = [49.5, 19.0];
        mapZoom = 11;
        keyPointsData = ETAP1_KEY_POINTS;
        console.log(`📍 Etap 1: ${routeCoordinates.length} punktów GPS, ${keyPointsData.length} markerów`);
      } else if (activeEtap === 'etap2') {
        routeCoordinates = ETAP2_ROUTE_COORDINATES || [];
        mapCenter = [49.57, 19.57];
        mapZoom = 10;
        keyPointsData = ETAP2_KEY_POINTS || [];
        console.log(`📍 Etap 2: ${routeCoordinates.length} punktów GPS, ${keyPointsData.length} markerów`);
      } else if (activeEtap === 'etap3') {
        routeCoordinates = ETAP3_ROUTE || [];
        mapCenter = [49.3, 21.0];
        mapZoom = 9;
        keyPointsData = ETAP3_KEY_POINTS || [];
        console.log(`📍 Etap 3: ${routeCoordinates.length} punktów GPS, ${keyPointsData.length} markerów`);
      }

      // Inicjalizacja mapy
      const map = L.map(mapRef.current).setView(mapCenter, mapZoom);
      mapInstanceRef.current = map;

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

      // Mapowanie ikon
      const getIcon = (type) => {
        switch (type) {
          case 'parking': return parkingIcon;
          case 'shelter': return shelterIcon;
          case 'peak': return peakIcon;
          case 'start': return startIcon;
          default: return startIcon;
        }
      };

      // Dodanie rzeczywistej trasy na mapę
      if (Array.isArray(routeCoordinates) && routeCoordinates.length > 0) {
        const polyline = L.polyline(routeCoordinates, {
          color: '#dc2626',
          weight: 3,
          opacity: 0.8,
          dashArray: '5, 5'
        }).addTo(map);
        
        console.log(`✓ Załadowano trasę GSB ${activeEtap === 'etap1' ? 'Etap 1' : 'Etap 2'} z ${routeCoordinates.length} punktami GPS`);
      } else {
        console.warn(`⚠️ Brak danych trasy dla ${activeEtap}`);
      }

      // Snapuj każdy punkt do najbliższego punktu na trasie
      const keyPoints = keyPointsData.map(point => {
        // Punkty, które nie powinny być snapowane
        const noSnapConditions = 
          (point.type === 'parking') ||
          (point.name && point.name.includes('Hala Boracza')) ||
          (point.name && point.name.includes('Schronisko PTTK Turbacz'));

        if (noSnapConditions) {
          return {
            ...point,
            icon: getIcon(point.type),
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
          icon: getIcon(point.type),
          lat: snappedPoint[0],
          lon: snappedPoint[1],
          originalLat: point.lat,
          originalLon: point.lon,
          distanceFromTrack: (distance * 1000).toFixed(0)
        };
      });

      console.log(`✓ Markery snapowane (${activeEtap === 'etap1' ? 'Etap 1' : 'Etap 2'}): ${keyPoints.length}`);

      // Dodanie markerów dla punktów kluczowych
      keyPoints.forEach(point => {
        if (!point.lat || !point.lon) return;

        const marker = L.marker([point.lat, point.lon], { icon: point.icon }).addTo(map);
        
        const popupContent = `
          <div style="font-size: 12px;">
            <strong>${point.name}</strong><br/>
            Wysokość: ${point.height || 'N/A'} m<br/>
            Dystans: ${point.km || 0} km<br/>
            ${point.distanceFromTrack !== 'poza szlakiem' ? `Oddalenie od szlaku: ${point.distanceFromTrack}m<br/>` : ''}
            ${point.description ? `<em>${point.description}</em>` : ''}
          </div>
        `;
        
        marker.bindPopup(popupContent);
      });

      // Przybliż mapę do granic trasy
      if (Array.isArray(routeCoordinates) && routeCoordinates.length > 0) {
        const bounds = L.latLngBounds(routeCoordinates);
        map.fitBounds(bounds, { padding: [50, 50] });
      }

    } catch (error) {
      console.error('❌ Błąd w RouteMap:', error);
    }
  }, [activeEtap]);

  return (
    <div
      ref={mapRef}
      style={{
        width: '100%',
        height: '500px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '2px solid #dc2626'
      }}
    />
  );
}
