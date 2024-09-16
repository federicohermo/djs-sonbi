// src/components/ShortsList.tsx

import React, { useEffect } from 'react';
import '../styles/ShortsList.css';
import CustomCarousel from './Carousel';
import { useTheme } from '../hooks/useTheme';
import { useShorts } from '../hooks/useShorts';
import { useSets } from '../hooks/useSets';

const ShortsList: React.FC = () => {
  const {isDarkMode} = useTheme()
  const { shorts } = useShorts();
  const { sets } = useSets()

  return (
    <>
    <div className={`shortList ${isDarkMode ? 'dark-mode' : ''}`}>
      {shorts && <CustomCarousel slides={shorts}/>}
      {/* <div className='flex-column jCenter' style={{width:'70%'}}>
      {shorts && shorts.map((short)=>
      <iframe style={{height: "64vh", width: "18vw"}} width="315" height="560"
            src={short && `https://www.youtube.com/embed/${short.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      )}
      </div> */}
    </div>
    </>
  );
};

export default ShortsList;

