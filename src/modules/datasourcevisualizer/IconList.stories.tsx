import type { Meta, StoryObj } from '@storybook/react';
import { IconList, Source } from '../../../lib/main';
import {
  Analytics as AnalyticsIcon,
  Api as ApiIcon,
  CloudSync as CloudIcon,
  Dataset as DatasetIcon,
  Storage as StorageIcon,
  Timeline as TimelineIcon,
} from '@mui/icons-material';
import { Box, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme();

const meta = {
  title: 'IconList/IconList',
  component: IconList,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ padding: 2, maxWidth: 500 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    showHeader: {
      control: 'boolean',
      description: 'Show or hide the card header',
    },
    title: {
      control: 'text',
      description: 'Title of the icon list',
    },
    maxWidth: {
      control: 'number',
      description: 'Maximum width of the icon list',
    },
    maxHeight: {
      control: 'number',
      description: 'Maximum height of the icon list',
    },
    theme: {
      control: 'object',
      description: 'Theme configuration for colors, elevation, etc.',
      table: {
        type: {
          summary: 'icon list Theme',
          detail: `{
  header?: {
    backgroundColor?: string;
    textColor?: string;
  };
  card?: {
    backgroundColor?: string;
    borderColor?: string;
    elevation?: number;
  };
  content?: {
    backgroundColor?: string; 
  };
}`,
        },
      },
    },
  },
} satisfies Meta<typeof IconList>;

export default meta;
type Story = StoryObj<typeof meta>;

const ICONS = {
  database: <DatasetIcon />,
  cloud: <CloudIcon />,
  api: <ApiIcon />,
  storage: <StorageIcon />,
  analytics: <AnalyticsIcon />,
  timeline: <TimelineIcon />,
} as const;

const ATLAS_COLORS = {
  coral: '#E85A4F',
  golden: '#F4D35E',
  navy: '#2C3E50',
  teal: '#34495E',
} as const;

const createMocksources = (): Source[] => [
  {
    id: 'postgres-db',
    name: 'PostgreSQL Database',
    description: 'Primary application database',
    active: true,
    icon: ICONS.database,
  },
  {
    id: 'cloud-storage',
    name: 'Cloud Storage',
    description: 'File and document storage',
    active: false,
    icon: ICONS.cloud,
  },
  {
    id: 'rest-api',
    name: 'REST API',
    description: 'External service integration',
    active: true,
    icon: ICONS.api,
  },
  {
    id: 'local-storage',
    name: 'Local Storage',
    description: 'Browser local storage',
    active: false,
    icon: ICONS.storage,
  },
];

const createAtlasColoredsources = (): Source[] => [
  {
    id: 'postgres-db',
    name: 'PostgreSQL Database',
    description: 'Primary application database',
    active: true,
    icon: ICONS.database,
    color: ATLAS_COLORS.navy,
  },
  {
    id: 'cloud-storage',
    name: 'Cloud Storage',
    description: 'File and document storage',
    active: false,
    icon: ICONS.cloud,
    color: ATLAS_COLORS.coral,
  },
  {
    id: 'rest-api',
    name: 'REST API',
    description: 'External service integration',
    active: true,
    icon: ICONS.api,
    color: ATLAS_COLORS.golden,
  },
  {
    id: 'local-storage',
    name: 'Local Storage',
    description: 'Browser local storage',
    active: false,
    icon: ICONS.storage,
    color: ATLAS_COLORS.teal,
  },
];

export const Default: Story = {
  args: {
    sources: createMocksources(),
    title: 'Data Sources',
  },
};

export const Emptysources: Story = {
  args: {
    sources: [],
    title: 'No Data Available',
  },
};

export const WithAtlasColors: Story = {
  args: {
    sources: createAtlasColoredsources(),
    title: 'Atlas Brand Colors',
  },
};

export const WithCustomTheme: Story = {
  args: {
    sources: createAtlasColoredsources(),
    title: 'Custom Themed icon list',
    theme: {
      header: {
        backgroundColor: ATLAS_COLORS.navy,
        textColor: '#FFFFFF',
      },
      card: {
        backgroundColor: '#F8F9FA',
        elevation: 12,
      },
      content: {
        backgroundColor: '#FFFFFF',
      },
    },
  },
};

export const AtlasBrandTheme: Story = {
  args: {
    sources: createAtlasColoredsources(),
    title: 'Atlas Brand Theme',
    theme: {
      header: {
        backgroundColor: ATLAS_COLORS.coral,
        textColor: '#FFFFFF',
      },
      card: {
        backgroundColor: '#FFF8F6',
        borderColor: ATLAS_COLORS.coral,
        elevation: 6,
      },
      content: {
        backgroundColor: '#FFFFFF',
      },
    },
  },
};

export const MinimalTheme: Story = {
  args: {
    sources: createAtlasColoredsources(),
    title: 'Minimal Theme',
    theme: {
      header: {
        backgroundColor: '#FAFAFA',
        textColor: ATLAS_COLORS.navy,
      },
      card: {
        backgroundColor: '#FFFFFF',
        borderColor: '#E0E0E0',
        elevation: 1,
      },
    },
  },
};

export const WarningTheme: Story = {
  args: {
    sources: [
      {
        id: 'failed-db',
        name: 'Database Connection',
        description: 'Connection failed',
        active: false,
        icon: ICONS.database,
        color: ATLAS_COLORS.coral,
      },
      {
        id: 'maintenance-api',
        name: 'API Service',
        description: 'Under maintenance',
        active: false,
        icon: ICONS.api,
        color: ATLAS_COLORS.golden,
      },
    ],
    title: 'System Status',
    theme: {
      header: {
        backgroundColor: ATLAS_COLORS.coral,
        textColor: '#FFFFFF',
      },
      card: {
        backgroundColor: '#FFF8F6',
        elevation: 8,
      },
      content: {
        backgroundColor: '#FFFFFF',
      },
    },
  },
};

export const HealthDashboard: Story = {
  args: {
    sources: [
      {
        id: 'primary-db',
        name: 'Primary Database',
        description: 'MySQL cluster healthy',
        active: true,
        icon: ICONS.database,
        color: ATLAS_COLORS.navy,
      },
      {
        id: 'backup-db',
        name: 'Backup Database',
        description: 'Replication in sync',
        active: true,
        icon: ICONS.database,
        color: ATLAS_COLORS.teal,
      },
      {
        id: 'cdn',
        name: 'CDN Network',
        description: 'Global distribution active',
        active: true,
        icon: ICONS.cloud,
        color: ATLAS_COLORS.golden,
      },
      {
        id: 'monitoring',
        name: 'Monitoring Service',
        description: 'All metrics collected',
        active: true,
        icon: ICONS.analytics,
        color: ATLAS_COLORS.coral,
      },
    ],
    title: 'Service Health',
    theme: {
      header: {
        backgroundColor: ATLAS_COLORS.navy,
        textColor: '#FFFFFF',
      },
      card: {
        backgroundColor: '#F8F9FA',
        elevation: 4,
      },
    },
  },
};

export const CompactSize: Story = {
  args: {
    sources: createAtlasColoredsources(),
    title: 'Compact View',
    maxWidth: 280,
    maxHeight: 200,
    theme: {
      header: {
        backgroundColor: ATLAS_COLORS.coral,
        textColor: '#FFFFFF',
      },
      card: {
        backgroundColor: '#FFF8F6',
        elevation: 4,
      },
    },
  },
};

export const WithoutHeader: Story = {
  args: {
    sources: createMocksources(),
    showHeader: false,
  },
};

export const HeaderlessWithTheme: Story = {
  args: {
    sources: createAtlasColoredsources(),
    showHeader: false,
    theme: {
      card: {
        backgroundColor: '#F8F9FA',
        borderColor: ATLAS_COLORS.coral,
        elevation: 2,
      },
      content: {
        backgroundColor: '#FFFFFF',
      },
    },
  },
};
