import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import type { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo } from 'react';
import type { Location, MapProps } from './types';

// This component handles map resizing
const MapResizer = () => {
  const map = useMap();

  useEffect(() => {
    // Small delay to ensure the container has been resized
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
};

export const Map = ({
  locations,
  enableClustering = false,
  mapHeight = '500px',
  clusterOptions = {
    chunkedLoading: true,
    maxClusterRadius: 150,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
  },
}: MapProps) => {
  const center: LatLngTuple = useMemo(() => {
    if (locations.length === 0) return [51.505, -0.09];

    const sumLat = locations.reduce((sum, loc) => sum + loc.latitude, 0);
    const sumLng = locations.reduce((sum, loc) => sum + loc.longitude, 0);

    return [sumLat / locations.length, sumLng / locations.length];
  }, [locations]);

  const checkLocationDetailsAvailable = (location: Location) => {
    return location.name || location.street || location.houseNumber || location.city;
  };

  const renderPopupContent = (location: Location) => {
    const hasAddress = location.street || location.houseNumber;

    return (
      <div>
        {location.name && <h3 className="font-bold">{location.name}</h3>}

        {hasAddress && (
          <>
            <b>Adresse:</b>
            {location.street} {location.houseNumber}
            <br />
          </>
        )}

        {location.city && (
          <>
            <b>Ort:</b>
            {location.city}
            <br />
          </>
        )}

        <b>ID:</b>
        {location.globalId}
      </div>
    );
  };

  const renderMarkers = () => {
    return locations.map((location) => (
      <Marker key={location.globalId} position={[location.latitude, location.longitude]}>
        {checkLocationDetailsAvailable(location) && <Popup>{renderPopupContent(location)}</Popup>}
      </Marker>
    ));
  };

  return (
    <MapContainer
      center={center}
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: mapHeight, width: '100%', margin: 2 }}
    >
      <MapResizer />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {enableClustering ? (
        <MarkerClusterGroup
          chunkedLoading={clusterOptions.chunkedLoading}
          maxClusterRadius={clusterOptions.maxClusterRadius}
          spiderfyOnMaxZoom={clusterOptions.spiderfyOnMaxZoom}
          showCoverageOnHover={clusterOptions.showCoverageOnHover}
          zoomToBoundsOnClick={clusterOptions.zoomToBoundsOnClick}
        >
          {renderMarkers()}
        </MarkerClusterGroup>
      ) : (
        renderMarkers()
      )}
    </MapContainer>
  );
};
