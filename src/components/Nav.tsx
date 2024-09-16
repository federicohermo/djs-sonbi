import React from 'react';
import { useTheme } from '../hooks/useTheme'
import {NavLink} from 'react-router-dom';

interface NavigatorProps {
}

const Navigator: React.FC<NavigatorProps> = ({}) => {
    const {isDarkMode, toggleTheme} = useTheme()
    return (
        <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
          <NavLink className="addButton nav-text" to="/">Home</NavLink>
          <NavLink className="addButton nav-text" to="/shorts">Shorts</NavLink>
          <NavLink className="addButton nav-text" to="/contacto">Contactanos</NavLink>
        </header>
    );
  };

  export default Navigator;