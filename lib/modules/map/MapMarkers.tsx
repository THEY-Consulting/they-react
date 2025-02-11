import { Marker, Popup } from 'react-leaflet';
import type { Location } from './types';

interface MapMarkersProps {
  locations: Location[];
}

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

      <b>ID: </b>
      {location.globalId}
    </div>
  );
};

export const MapMarkers = ({ locations }: MapMarkersProps) => {
  return (
    <>
      {locations.map((location) => (
        <Marker key={location.globalId} position={[location.latitude, location.longitude]}>
          {checkLocationDetailsAvailable(location) && <Popup>{renderPopupContent(location)}</Popup>}
        </Marker>
      ))}
    </>
  );
};
