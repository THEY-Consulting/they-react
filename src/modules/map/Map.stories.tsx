import type { Meta, StoryObj } from '@storybook/react';
import type { Location } from '../../../lib/modules/map/types.ts';
import { Map } from '../../../lib/main';

// Parse the sample data
const sampleLocations: Location[] = [
  {
    name: 'Bahnhof P1',
    city: 'Amberg',
    street: 'Kaiser-Ludwig-Ring',
    houseNumber: '',
    globalId: '1',
    latitude: 49.446586,
    longitude: 11.863333,
  },
  {
    name: 'Hauptbahnhof',
    city: 'München',
    street: 'Bahnhofsplatz',
    houseNumber: '2',
    globalId: null,
    latitude: 48.139987,
    longitude: 11.560857,
  },
  {
    name: 'Marienplatz',
    city: 'München',
    street: 'Am Rindermarkt',
    houseNumber: '16',
    globalId: '3',
    latitude: 48.136283,
    longitude: 11.574668,
  },
  {
    name: 'Hauptbahnhof',
    city: 'Kiel',
    street: 'Sophienhof',
    houseNumber: '32',
    globalId: null,
    latitude: 54.316044,
    longitude: 10.129132,
  },
  {
    name: 'Bahnhof',
    city: 'Hamburg',
    street: 'Brauhausstieg',
    houseNumber: '',
    globalId: '5',
    latitude: 53.571767,
    longitude: 10.060582,
  },
  {
    name: 'Hauptbahnhof',
    city: 'Augsburg',
    street: 'Viktoriastraße',
    houseNumber: '',
    globalId: null,
    latitude: 48.365794,
    longitude: 10.8867,
  },
  {
    name: 'City Parkhaus',
    city: 'Passau',
    street: 'Kollerwirtsgasse',
    houseNumber: '',
    globalId: '7',
    latitude: 48.575084,
    longitude: 13.454555,
  },
  {
    name: 'Bahnhof P1',
    city: 'Lindau',
    street: 'Bahnhof',
    houseNumber: '1e',
    globalId: null,
    latitude: 47.543496,
    longitude: 9.68095,
  },
  {
    name: 'Hauptbahnhof',
    city: 'Regensburg',
    street: 'Bahnhofstraße',
    houseNumber: '18',
    globalId: '9',
    latitude: 49.012351,
    longitude: 12.101488,
  },
  {
    name: 'Marienplatz',
    city: 'München',
    street: 'Am Rindermarkt',
    houseNumber: '16',
    globalId: '10',
    latitude: 48.136283,
    longitude: 11.574668,
  },
  {
    name: 'Bahnhof P1',
    city: 'Würzburg',
    street: 'Bahnhofsplatz',
    houseNumber: '',
    globalId: null,
    latitude: 49.801156,
    longitude: 9.936565,
  },
  {
    name: 'Hauptbahnhof',
    city: 'Nürnberg',
    street: 'Bahnhofsplatz',
    houseNumber: '9',
    globalId: '12',
    latitude: 49.445616,
    longitude: 11.082228,
  },
  {
    name: 'Segelmacherstraße',
    city: 'Flensburg',
    street: 'Segelmacherstraße',
    houseNumber: '2',
    globalId: '13',
    latitude: 54.791724,
    longitude: 9.432941,
  },
  {
    name: 'Bahnhof P1',
    city: 'Bad Reichenhall',
    street: 'Heilingbrunnerstraße',
    houseNumber: '1',
    globalId: null,
    latitude: 47.724265,
    longitude: 12.880418,
  },
  {
    name: 'Sophienhof',
    city: 'Kiel',
    street: 'Hopfenstraße',
    houseNumber: '32',
    globalId: null,
    latitude: 54.316044,
    longitude: 10.129132,
  },
];

// More focused set of locations in Munich
const munichLocations: Location[] = sampleLocations.filter((loc) => loc.city === 'München');

// Northern Germany locations
const northernLocations: Location[] = sampleLocations.filter((loc) => loc.latitude > 52.0);

// Southern Germany locations
const southernLocations: Location[] = sampleLocations.filter((loc) => loc.latitude <= 52.0);

// Bavarian locations
const bavarianLocations: Location[] = sampleLocations.filter((loc) =>
  ['München', 'Nürnberg', 'Augsburg', 'Regensburg', 'Würzburg', 'Passau'].includes(loc.city)
);

const meta = {
  title: 'Components/Map',
  component: Map,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    locations: {
      control: 'object',
      description: 'Array of location objects to display on the map',
    },
    enableClustering: {
      control: 'boolean',
      description: 'Enable marker clustering for better visualization with many markers',
    },
    mapHeight: {
      control: 'text',
      description: 'Height of the map container',
    },
    clusterOptions: {
      control: 'object',
      description: 'Configuration options for marker clustering',
    },
  },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof Map>;

// Basic map with default settings
export const Default: Story = {
  args: {
    locations: sampleLocations,
    mapHeight: '400px',
  },
};

// Map with clustering enabled
export const WithClustering: Story = {
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      chunkedLoading: true,
      maxClusterRadius: 100,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true,
    },
  },
};

// Map focused on Munich locations
export const MunichArea: Story = {
  args: {
    locations: munichLocations,
    mapHeight: '400px',
  },
};

// Map with custom height
export const TallMap: Story = {
  args: {
    locations: sampleLocations,
    mapHeight: '800px',
  },
};

// Map with minimal clustering radius
export const DenseClusteringMap: Story = {
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 50,
      spiderfyOnMaxZoom: true,
    },
  },
};

// Map with sparse clustering
export const SparseClusteringMap: Story = {
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 200,
      spiderfyOnMaxZoom: false,
    },
  },
};

// Map with custom cluster options
export const CustomClusterOptions: Story = {
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      chunkedLoading: true,
      maxClusterRadius: 150,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
    },
  },
};

// Map with cluster coverage visualization
export const ClusterCoverageMap: Story = {
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      chunkedLoading: true,
      maxClusterRadius: 120,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true,
    },
  },
};

// Map showing only Northern Germany locations
export const NorthernGermanyMap: Story = {
  args: {
    locations: northernLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 100,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
    },
  },
};

// Map showing only Southern Germany locations
export const SouthernGermanyMap: Story = {
  args: {
    locations: southernLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 100,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
    },
  },
};

// Map showing only Bavarian locations
export const BavarianMap: Story = {
  args: {
    locations: bavarianLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 80,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
    },
  },
};

// Compact map view
export const CompactMap: Story = {
  args: {
    locations: sampleLocations,
    mapHeight: '200px',
  },
};

// Extra large map view
export const ExtraLargeMap: Story = {
  args: {
    locations: sampleLocations,
    mapHeight: '1000px',
  },
};

// Map with aggressive clustering
export const AggressiveClusteringMap: Story = {
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 300,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: false,
    },
  },
};

// Map with minimal clustering and always visible coverage
export const DetailedClusterMap: Story = {
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 80,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true,
      chunkedLoading: false,
    },
  },
};
