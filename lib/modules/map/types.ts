export type Location = {
  name: string;
  city: string | null;
  street: string | null;
  houseNumber: string | null;
  globalId: string | null;
  latitude: number;
  longitude: number;
};

export type MapProps = {
  locations: Location[];
  enableClustering?: boolean;
  mapHeight?: string;
  clusterOptions?: {
    chunkedLoading?: boolean;
    maxClusterRadius?: number;
    spiderfyOnMaxZoom?: boolean;
    showCoverageOnHover?: boolean;
    zoomToBoundsOnClick?: boolean;
  };
};
