import { MapContainer, TileLayer } from 'react-leaflet';
import type { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMemo } from 'react';
import type { MapProps } from './types';
import { MapResizer } from './MapResizer';
import { MapMarkers } from './MapMarkers';

export const Map = ({ locations, center, mapHeight = '500px' }: MapProps) => {
  const defaultCenter: LatLngTuple = useMemo(() => {
    if (locations.length === 0) return [51.505, -0.09];

    const sumLat = locations.reduce((sum, loc) => sum + loc.latitude, 0);
    const sumLng = locations.reduce((sum, loc) => sum + loc.longitude, 0);

    return [sumLat / locations.length, sumLng / locations.length];
  }, [locations]);

  return (
    <MapContainer
      center={center || defaultCenter}
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: mapHeight, width: '100%' }}
    >
      <MapResizer />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapMarkers locations={locations} />
    </MapContainer>
  );
};
