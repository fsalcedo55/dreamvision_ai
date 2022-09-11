import '../App.css';
import React, { useState } from 'react';
import { getAllTheEntities } from '../services/iamginator-service';
import { useEffect } from 'react';
import ModalCard from '../components/ModalCard/ModalCard';

function HomePage(props) {
  const [allTheImages, setAllTheImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');

  console.log(allTheImages);

  useEffect(() => {
    const getAllTheImages = async () => {
      const allImages = await getAllTheEntities();
      console.log(allImages);
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
          <ModalCard
            imgSrc={currentImage}
            currentPrompt={currentPrompt}
            user={props.user}
          />
        </div>
      )}
      <div className='z-10'>
        <div className='grid grid-cols-5 gap-4'>
          {allTheImages?.map((image) => {
            return (
              <div
                id='picture-div'
                className='transition duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-white'
              >
                <img
                  key={image.picUrl}
                  src={image.picUrl}
                  alt='all-the-images'
                  className='w-full h-full cursor-pointer rounded-xl'
                  onClick={() => {
                    setCurrentImage(image.picUrl);
                    setShowModal(true);
                    setCurrentPrompt(image.prompt);
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
