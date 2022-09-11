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
  const [currentUserName, setCurrentUserName] = useState('');

  useEffect(() => {
    const getAllTheImages = async () => {
      const usersAndImagesList = await getAllTheEntities();
      setAllTheImages(usersAndImagesList.data.usersAndImages.reverse());
    };
    getAllTheImages();
  }, []);
  console.log({ allTheImages });
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
            user={currentUserName}
          />
        </div>
      )}
      <div className='z-10'>
        <div className='grid grid-cols-5 gap-4'>
          {allTheImages?.map((imageDetails) => {
            return (
              <div
                id='picture-div'
                className='transition duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-white'
              >
                <div className='group'>
                  <img
                    key={imageDetails.imaginedPics.picUrl}
                    src={imageDetails.imaginedPics.picUrl}
                    alt='all-the-images'
                    className='w-full h-full cursor-pointer rounded-xl'
                    onClick={() => {
                      setCurrentImage(imageDetails.imaginedPics.picUrl);
                      setShowModal(true);
                      setCurrentPrompt(imageDetails.imaginedPics.prompt);
                      setCurrentUserName(imageDetails.username);
                    }}
                  />
                  <div className='invisible p-2 text-sm font-semibold text-center text-white truncate rounded-b-lg cursor-pointer group-hover:visible'>
                    {imageDetails.imaginedPics.prompt}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
