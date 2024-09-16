// src/components/Modal.tsx

import React from 'react';
import { useTheme } from '../hooks/useTheme';
import '../styles/Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, size}) => {
  const { isDarkMode } = useTheme()
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className={`modalContent ${size} ${isDarkMode ? 'dark-mode' : ''}`}>
        <button className={`closeButton ${isDarkMode ? 'dark-mode' : ''}`} onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
