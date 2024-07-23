import React, { useState } from 'react';
import './PlantPage.css'; 

const PlantPage = () => {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlantData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8001/plants');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log('Fetched data:', data); 

      if (data.plants && data.plants.length > 0) {
        const randomPlant = data.plants[Math.floor(Math.random() * data.plants.length)];
        setPlant(randomPlant);
      } else {
        console.error('No plants data found');
        setError('No plant data available.');
      }
    } catch (error) {
      console.error('Error fetching plant data:', error);
      setError('Failed to fetch plant data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="plant-page">
      <header className="plant-header">
        <h1>Random Plant Information</h1>
      </header>
      <main className="plant-content">
        <button onClick={fetchPlantData} className="fetch-button">
          Get Random Plant Info
        </button>
        {loading && <p className="loading-text">Loading...</p>}
        {error && <p className="error-text">{error}</p>}
        {plant && (
          <div className="plant-info">
            <h2>{plant.name}</h2>
            <img 
              src={plant.image_url || 'placeholder_image_url_here'} 
              alt={plant.name} 
              className="plant-image" 
            />
            <p><strong>Scientific Name:</strong> {plant.scientific_name}</p>
            <p><strong>Family:</strong> {plant.family}</p>
            <p><strong>Origin:</strong> {plant.origin}</p>
            <p><strong>Care Instructions:</strong> {plant.care_instructions}</p>
            <p>{plant.description}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PlantPage;
