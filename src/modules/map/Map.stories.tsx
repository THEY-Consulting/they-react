import type { Meta, StoryObj } from '@storybook/react';
import type { Location } from '../../../lib/modules/map/types';
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
  title: 'Map/Map',
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
    center: {
      control: 'object',
      description: 'Center coordinates of the map as [latitude, longitude]',
    },
    mapHeight: {
      control: 'text',
      description: 'Height of the map container',
    },
  },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof Map>;

// Basic map with default settings
export const Default: Story = {
  args: {
    locations: sampleLocations,
  },
};

// Map focused on Munich locations
export const MunichArea: Story = {
  args: {
    locations: munichLocations,
    center: [48.137154, 11.576124],
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

// Map showing only Northern Germany locations
export const NorthernGermanyMap: Story = {
  args: {
    locations: northernLocations,
    mapHeight: '400px',
  },
};

// Map showing only Southern Germany locations
export const SouthernGermanyMap: Story = {
  args: {
    locations: southernLocations,
    mapHeight: '400px',
  },
};

// Map showing only Bavarian locations
export const BavarianMap: Story = {
  args: {
    locations: bavarianLocations,
    center: [48.7904, 11.4979],
    mapHeight: '400px',
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

// Map with custom center point
export const CustomCenter: Story = {
  args: {
    locations: sampleLocations,
    center: [49.4521, 11.0767],
    mapHeight: '400px',
  },
};
