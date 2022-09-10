import '../App.css';
import React, { useState } from 'react';
import { getAllTheEntities } from '../services/iamginator-service';
import { useEffect } from 'react';

function HomePage(props) {
  const [allTheImages, setAllTheImages] = useState([]);

  useEffect(() => {
    console.log('effect in use');
    const getAllTheImages = async () => {
      const allImages = await getAllTheEntities();
      setAllTheImages(allImages.data.allTheImages);
    };
    getAllTheImages();
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1> HOME PAGE</h1>
        {allTheImages?.map((image) => {
          return <img key={image} src={image} alt='all-the-images' />;
        })}
      </div>
    </React.Fragment>
  );
}

export default HomePage;
