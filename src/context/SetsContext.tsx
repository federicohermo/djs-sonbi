// src/context/ShortsContext.tsx

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

export interface Set {
  [key: string]: any; // Supports additional fields
}

interface SetsContextType {
  sets: Set[];
}

export const SetsContext = createContext<SetsContextType | undefined>(undefined);

interface SetProviderProps {
  children: ReactNode;
}

export const SetProvider: React.FC<SetProviderProps> = ({ children }) => {
  const [sets, setSets] = useState<Set[]>([]);

  useEffect(() => {
    fetchSoundcloud();
  }, []);

  const fetchSoundcloud = async () => {
    const options = {
      method: 'GET',
      url: 'https://soundcloud-api4.p.rapidapi.com/api/artist/tracks',
      params: {
        artist_id: '1307413503',
        limit: '10',
        offset: '0'
      },
      headers: {
        'x-rapidapi-key': 'b2c815bc56mshca4567fa584dcd5p194affjsn382efcdf76e1',
        'x-rapidapi-host': 'soundcloud-api4.p.rapidapi.com'
      }
    };
    
    try {
      const response: any = await axios.request<Set[]>(options);
      // let arr: any = []
      // response.data.collection.map((set: any) => {
      //   console.log(set.uri)
      //   arr.push({'uri': set.uri})
      // })
      // console.log(arr)
      setSets(response.data.collection)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <SetsContext.Provider value={{ sets }}>
      {children}
    </SetsContext.Provider>
  );
};
