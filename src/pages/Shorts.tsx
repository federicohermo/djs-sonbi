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
      
      <ShortsList/>
      
    </div>
  );
}

export default Home;