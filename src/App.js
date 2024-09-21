import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [selectedBreed, setSelectedBreed] = useState('');
    const [breeds, setBreeds] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchBreeds = async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();
            setBreeds(data.message);
        };
        fetchBreeds();
    }, []);

    const handleBreedSelect = (event) => {
        setSelectedBreed(event.target.value);
    };

    const handleSearchClick = async () => {
        if (selectedBreed) {
            const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images`);
            const data = await response.json();
            setImages(data.message);
        }
    };

    const handleBackClick = () => {
        setImages([]); // Reset images to go back to the homepage
        setSelectedBreed(''); // Reset selected breed
    };

    return (
        <div className={`container ${images.length > 0 ? 'images-loaded' : ''}`}>
            {images.length === 0 ? (
                <>
                    <h1 className="animated-title">Dog Breed Image Gallery</h1>
                    <select id="breedSelect" value={selectedBreed} onChange={handleBreedSelect}>
                        <option value="">Select a Breed</option>
                        {Object.keys(breeds).map(breed => (
                            <option key={breed} value={breed}>{breed}</option>
                        ))}
                    </select>
                    <button onClick={handleSearchClick}>Show Images</button>
                </>
            ) : (
                <>
                    <button className="back-button" onClick={handleBackClick}>Back</button>
                    <div className="image-grid">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={selectedBreed} className="dog-image" />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
