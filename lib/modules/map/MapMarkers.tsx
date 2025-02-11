import { Marker, Popup } from 'react-leaflet';
import type { Location } from './types';
import L from 'leaflet';

interface MapMarkersProps {
  locations: Location[];
}

const marker = new L.DivIcon({
  className: 'custom-div-icon',
  html: '<div style="background-color: rgba(234,88,55,0.8); width: 12px; height: 12px; border-radius: 50%;"></div>',
  iconSize: [8, 8],
  iconAnchor: [4, 4],
  popupAnchor: [0, -4],
});

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
          <b>Adresse: </b>
          {location.street} {location.houseNumber}
          <br />
        </>
      )}

      {location.city && (
        <>
          <b>Ort: </b>
          {location.city}
          <br />
        </>
      )}

      {location.globalId && (
        <>
          <b>ID: </b>
          {location.globalId}
        </>
      )}
    </div>
  );
};

export const MapMarkers = ({ locations }: MapMarkersProps) => {
  return (
    <>
      {locations.map((location) => (
        <Marker key={location.globalId} position={[location.latitude, location.longitude]} icon={marker}>
          {checkLocationDetailsAvailable(location) && <Popup>{renderPopupContent(location)}</Popup>}
        </Marker>
      ))}
    </>
  );
};
