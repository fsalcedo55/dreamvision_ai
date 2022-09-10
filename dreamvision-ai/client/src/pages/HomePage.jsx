import '../App.css';
import React, { useState } from 'react';
import { getAllTheEntities } from '../services/iamginator-service';
import { useEffect } from 'react';
import ModalCard from '../components/ModalCard/ModalCard';

function HomePage(props) {
  const [allTheImages, setAllTheImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log('effect in use');
    const getAllTheImages = async () => {
      const allImages = await getAllTheEntities();
      setAllTheImages(allImages.data.allTheImages.reverse());
    };
    getAllTheImages();
  }, []);

  return (
    <div>
      {showModal && (
        <div
          className='fixed z-40 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
          onClick={() => setShowModal(false)}
        >
          <ModalCard imgSrc={currentImage} />
        </div>
      )}
      <div className='z-10'>
        <div className='grid grid-cols-5 gap-4'>
          {allTheImages?.map((image) => {
            return (
              <div className='transition duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-900'>
                <img
                  key={image}
                  src={image}
                  alt='all-the-images'
                  className='w-full h-full cursor-pointer rounded-xl'
                  onClick={() => {
                    setCurrentImage(image);
                    setShowModal(true);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
