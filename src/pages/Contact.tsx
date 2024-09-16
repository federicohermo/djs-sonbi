import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "../styles/Contact.css";
import PatientForm from '../components/PatientForm';
import { Short } from '../context/ShortsContext';
import { useShorts } from '../hooks/useShorts';

export default function Contact(){
    const [initialData, setinitialData] = useState({
        name: '',
        email: '',
        message: ''
      });
    const [alert, setAlert] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState<Short | null>(null);
    const [notification, setNotification] = useState<{ message: string, type: string } | null>(null);
    const [loading, setLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const { shorts } = useShorts();

    const handleFormSubmit = async (data: Short) => {
        setLoadingMessage(selectedPatient ? `Wait while we edit ${data.name} information...` : `Wait while we add ${data.name} as a patient...`);
        setLoading(true);
        setIsModalOpen(false);
    
        try {
          if (selectedPatient) {
            //await editPatient(data);
            setNotification({ message: 'Patient updated successfully.', type: 'success' });
          } else {
            //await addPatient(data);
            setNotification({ message: 'Patient added successfully.', type: 'success' });
          }
        } catch (error) {
          console.error('Error saving patient data:', error);
          setNotification({ message: 'Failed to save patient data.', type: 'error' });
        } finally {
          setLoading(false);
          setSelectedPatient(null);
        }
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    return(
        <div style={{ alignContent: "center", margin: "15vh 0 5vh 0"}}>
            <PatientForm initialData={initialData} onSubmit={handleFormSubmit} onCancel={handleCancel}/>
        </div>
    )
}