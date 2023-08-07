/**
 * Contact App
 *
 */

import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {ContactProvider} from './src/context/contactContext';

function App(): JSX.Element {
  return (
    <ContactProvider>
      <AppNavigation />
    </ContactProvider>
  );
}

export default App;
