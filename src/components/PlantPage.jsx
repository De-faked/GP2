import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; 
import './PlantPage.css';

const { Meta } = Card;

const PlantPage = () => {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlantData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/plants');
      console.log('Fetched data:', response.data);

      if (Array.isArray(response.data) && response.data.length > 0) {
        const randomPlant = response.data[Math.floor(Math.random() * response.data.length)];
        console.log('Random plant selected:', randomPlant);
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

  const antIcon = <LoadingOutlined style={{ fontSize: 32 }} spin />;

  return (
    <div className="plant-page">
      <header className="plant-header">
        <h1>Discover Your Next Plant</h1>
        <p>Click the button below to get a random plant suggestion!</p>
      </header>
      <main className="plant-content">
        <Button 
          type="primary" 
          size="large" 
          onClick={fetchPlantData} 
          className="fetch-button"
        >
          Get Random Plant Info
        </Button>
        {loading && <Spin indicator={antIcon} className="loading-spinner" />}
        {error && <Alert message={error} type="error" showIcon className="error-alert" />}
        {plant && (
          <Card
            hoverable
            cover={
              <img
                alt={plant.name}
                src={plant.image_url || 'https://via.placeholder.com/400x300?text=Image+Not+Available'}
                className="plant-image"
              />
            }
            className="plant-card"
          >
            <Meta
              title={plant.name}
              description={
                <>
                  <p><strong>Scientific Name:</strong> {plant.scientific_name}</p>
                  <p><strong>Family:</strong> {plant.family}</p>
                  <p><strong>Origin:</strong> {plant.origin}</p>
                  <p><strong>Care Instructions:</strong> {plant.care_instructions}</p>
                  <p><strong>Description:</strong> {plant.description}</p>
                </>
              }
            />
          </Card>
        )}
      </main>
    </div>
  );
};

export default PlantPage;
