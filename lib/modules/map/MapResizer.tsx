import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

// This component handles map resizing
export const MapResizer = () => {
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
