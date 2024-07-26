import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import './MyFavouritPlants.css';

const { Meta } = Card;

const MyFavouritPlants = () => {
  const [favoritePlants, setFavoritePlants] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoritePlants');
    if (savedFavorites) {
      setFavoritePlants(JSON.parse(savedFavorites));
    }
  }, []);

  const removeFavorite = (plantName) => {
    const updatedFavorites = favoritePlants.filter(plant => plant.name !== plantName);
    setFavoritePlants(updatedFavorites);
    localStorage.setItem('favoritePlants', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-page">
      <header className="favorites-header">
        <h1>Favorites</h1>
      </header>
      <main className="favorites-content">
        {favoritePlants.length > 0 ? (
          favoritePlants.map((plant) => (
            <Card
              key={plant.name}
              hoverable
              className="plant-card"
              cover={<img alt={plant.name} src={plant.image_url || ''} />}
              actions={[
                <Button type="primary" danger onClick={() => removeFavorite(plant.name)}>Remove</Button>
              ]}
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
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </main>
    </div>
  );
};

export default MyFavouritPlants;
