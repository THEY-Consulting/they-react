import { MapContainer, TileLayer } from 'react-leaflet';
import type { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMemo } from 'react';
import type { MapProps } from './types';
import { MapResizer } from './MapResizer';
import { MapMarkers } from './MapMarkers';

const MAP_CONSTANTS = {
  MIN_DISTANCE_THRESHOLD: 0.001,
  FALLBACK_ZOOM_LEVEL: 12,
  DEFAULT_CENTER: [51.505, -0.09] as const,
  DEFAULT_ZOOM: 6,
  PADDING_FACTOR: 1.1,
  DEFAULT_HEIGHT: '500px',
} as const;

// OpenStreetMap zoom level specifications
// Each zoom level shows a tile width in degrees: 360 / (2^zoom_level)
// Since we need the distance from center to edge, we use half the tile width
const ZOOM_LEVELS = [
  { zoom: 0, halfTileWidth: 180 },
  { zoom: 1, halfTileWidth: 90 },
  { zoom: 2, halfTileWidth: 45 },
  { zoom: 3, halfTileWidth: 22.5 },
  { zoom: 4, halfTileWidth: 11.25 },
  { zoom: 5, halfTileWidth: 5.625 },
  { zoom: 6, halfTileWidth: 2.8125 },
  { zoom: 7, halfTileWidth: 1.40625 },
  { zoom: 8, halfTileWidth: 0.703125 },
  { zoom: 9, halfTileWidth: 0.3515625 },
  { zoom: 10, halfTileWidth: 0.17578125 },
  { zoom: 11, halfTileWidth: 0.087890625 },
  { zoom: 12, halfTileWidth: 0.0439453125 },
  { zoom: 13, halfTileWidth: 0.0219726563 },
  { zoom: 14, halfTileWidth: 0.0109863281 },
  { zoom: 15, halfTileWidth: 0.0054931641 },
  { zoom: 16, halfTileWidth: 0.002746582 },
  { zoom: 17, halfTileWidth: 0.001373291 },
  { zoom: 18, halfTileWidth: 0.0006866455 },
  { zoom: 19, halfTileWidth: 0.0003433228 },
  { zoom: 20, halfTileWidth: 0.0001716614 },
] as const;

export const Map = ({ locations, center, mapHeight = MAP_CONSTANTS.DEFAULT_HEIGHT }: MapProps) => {
  const { mapCenter, mapZoom } = useMemo(() => {
    if (locations.length === 0) {
      return {
        mapCenter: (center || MAP_CONSTANTS.DEFAULT_CENTER) as LatLngTuple,
        mapZoom: MAP_CONSTANTS.DEFAULT_ZOOM,
      };
    }

    let useCenter: LatLngTuple;

    if (center) {
      useCenter = center;
    } else {
      const sumLat = locations.reduce((sum, loc) => sum + loc.latitude, 0);
      const sumLng = locations.reduce((sum, loc) => sum + loc.longitude, 0);
      useCenter = [sumLat / locations.length, sumLng / locations.length];
    }

    if (locations.length === 1) {
      const location = locations[0];
      const latDiff = Math.abs(location.latitude - useCenter[0]);
      const lngDiff = Math.abs(location.longitude - useCenter[1]);
      const distance = Math.max(latDiff, lngDiff);

      if (distance < MAP_CONSTANTS.MIN_DISTANCE_THRESHOLD) {
        return { mapCenter: useCenter, mapZoom: MAP_CONSTANTS.FALLBACK_ZOOM_LEVEL };
      }
    }

    const maxDistance = Math.max(
      ...locations.map((location) => {
        const latDiff = Math.abs(location.latitude - useCenter[0]);
        const lngDiff = Math.abs(location.longitude - useCenter[1]);
        return Math.max(latDiff, lngDiff);
      })
    );

    // Add some padding so coordinates aren't at the very edge
    const paddedDistance = maxDistance * MAP_CONSTANTS.PADDING_FACTOR;

    // We want the highest zoom level (most zoomed in) that can still contain our distance
    let zoom = 0;

    // Search from the highest zoom (smallest halfTileWidth) to the lowest zoom (largest halfTileWidth)
    for (let i = ZOOM_LEVELS.length - 1; i >= 0; i--) {
      const level = ZOOM_LEVELS[i];
      if (level.halfTileWidth >= paddedDistance) {
        zoom = level.zoom;
        break;
      }
    }

    return {
      mapCenter: useCenter,
      mapZoom: zoom,
    };
  }, [locations, center]);

  return (
    <MapContainer
      center={mapCenter}
      zoom={mapZoom}
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
