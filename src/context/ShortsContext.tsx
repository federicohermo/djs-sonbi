// src/context/ShortsContext.tsx

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { transformNestedObjectsToArrays } from '../utils/DataTransform';
import axios from 'axios';

export interface Short {
  [key: string]: any; // Supports additional fields
}

interface ShortsContextType {
  shorts: Short[];
}

export const ShortsContext = createContext<ShortsContextType | undefined>(undefined);

interface ShortProviderProps {
  children: ReactNode;
}

export const ShortProvider: React.FC<ShortProviderProps> = ({ children }) => {
  const [shorts, setShorts] = useState<Short[]>([]);
  const id = "UCRxFGF-6opBkYyrC2vVcVpg"
  const apikey = "AIzaSyDa6rcltjQfF4kWtbKveTH06gGKbOSCJ6k"

  useEffect(() => {
    

    fetchShorts();
  }, []);

  const fetchShorts = async () => {
    try {
      const response: any = await axios.get<Short[]>(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&maxResults=10&order=date&key=${apikey}`, 
        { headers: {"Accept": "application/json",
        'Authorization':  apikey}});
      const res = response['data']['items']
      console.log(res[0]['snippet']['thumbnails'])
      const transformRes = transformNestedObjectsToArrays(res);
      setShorts(transformRes);
    } catch (error) {
      console.error('Error fetching shorts:', error);
    }
  };

  return (
    <ShortsContext.Provider value={{ shorts }}>
      {children}
    </ShortsContext.Provider>
  );
};
