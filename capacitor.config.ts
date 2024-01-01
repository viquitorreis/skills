import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'skillflow.com',
  appName: 'softskills',
  webDir: 'dist/softskills/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
