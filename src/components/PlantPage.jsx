import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Spin, Alert } from 'antd';
import { LoadingOutlined, StarOutlined, StarFilled } from '@ant-design/icons';
import './PlantPage.css';

const { Meta } = Card;

const PlantPage = () => {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favoritePlants');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const fetchPlantData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/plants');
      if (response.data && response.data.length) {
        const randomPlant = response.data[Math.floor(Math.random() * response.data.length)];
        setPlant(randomPlant);
      } else {
        setError('No plant data available.');
      }
    } catch (err) {
      setError('Failed to fetch plant data.');
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = () => {
    let updatedFavorites;
    if (favorites.some(fav => fav.name === plant.name)) {
      updatedFavorites = favorites.filter(fav => fav.name !== plant.name);
    } else {
      updatedFavorites = [...favorites, plant];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favoritePlants', JSON.stringify(updatedFavorites));
  };

  const isFavorite = () => favorites.some(fav => fav.name === plant.name);

  return (
    <div className="plant-page">
      <header className="plant-header">
        <h1>Discover Your Next Plant</h1>
      </header>
      <main>
        <Button 
          type="primary" 
          size="large" 
          onClick={fetchPlantData}
          className="fetch-button"
        >
          Get Plant Info
        </Button>
        {loading && <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} className="loading-spinner" />}
        {error && <Alert message={error} type="error" showIcon className="error-alert" />}
        {plant && (
          <Card
            hoverable
            cover={<img alt={plant.name} src={plant.image_url || 'https://via.placeholder.com/400x300'} className="plant-image" />}
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
            <Button 
              type="default" 
              icon={isFavorite() ? <StarFilled /> : <StarOutlined />} 
              onClick={toggleFavorite}
              className="favorite-button"
            >
              {isFavorite() ? 'Remove' : 'Add'}
            </Button>
          </Card>
        )}
      </main>
    </div>
  );
};

export default PlantPage;
