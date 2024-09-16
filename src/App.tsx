import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ShortProvider} from './context/ShortsContext';
import { ApplicationAccessRoutes } from './Acceses';
import {BrowserRouter} from 'react-router-dom';
import './styles/App.css';
import { SetProvider } from './context/SetsContext';

function App() {
  return (
    <BrowserRouter>      
      <ThemeProvider>
        <ShortProvider>
          <SetProvider>
            <ApplicationAccessRoutes/>
          </SetProvider>
        </ShortProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
