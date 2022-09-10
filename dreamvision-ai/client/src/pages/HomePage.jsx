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
      setAllTheImages(allImages.data.allTheImages.reverse());
    };
    getAllTheImages();
  }, []);

  return (
    <React.Fragment>
      <div className='grid grid-cols-5 gap-4'>
        {allTheImages?.map((image) => {
          return (
            <img
              key={image}
              src={image}
              alt='all-the-images'
              className='w-full h-full rounded-xl'
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default HomePage;
