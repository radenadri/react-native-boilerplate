/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import CounterScreen from '@/components/screens/counter';

import './global.css';

function App() {
  return (
    <GluestackUIProvider>
      <CounterScreen />
    </GluestackUIProvider>
  );
}

export default App;
