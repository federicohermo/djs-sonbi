import React, { useState } from 'react';
import ShortsList from '../components/ShortsList';
import PatientForm from '../components/PatientForm';
import Modal from '../components/Modal';
import Notification from '../components/Notification';
import Loading from '../components/Loading';
import Navigator from '../components/Nav'
import { useTheme } from '../hooks/useTheme';
import { Short } from '../context/ShortsContext';
import { useShorts } from '../hooks/useShorts';
import '../styles/App.css';

function Home() {
  const { shorts } = useShorts();
  const { isDarkMode, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      {loading && <Loading message={loadingMessage} />}
      
      <p style={{marginTop: '5rem'}}>DJs Sonbi es un dúo de djs formado en el año 2023 por Federico Hermo e Iván Rowek</p>
      
    </div>
  );
}

export default Home;