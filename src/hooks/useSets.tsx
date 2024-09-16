// src/hooks/useSets.tsx

import { useContext } from 'react';
import { SetsContext } from '../context/SetsContext';

export const useSets = () => {
  const context = useContext(SetsContext);

  if (!context) {
    throw new Error('useSets must be used within a SetsProvider');
  }

  return context;
};
