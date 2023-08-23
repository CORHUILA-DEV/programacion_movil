import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.co.corhuila',
  appName: 'my_first_app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
