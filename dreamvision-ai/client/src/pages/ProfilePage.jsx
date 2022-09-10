import '../App.css';
import React, { useState } from 'react';
import { getUserImages } from '../services/iamginator-service';
import { useEffect } from 'react';
import ModalCard from '../components/ModalCard/ModalCard';

function ProfilePage(props) {
  const [userImages, setUserImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getAllUserImages = async () => {
      const images = (await getUserImages(props.user.username)).data.userImages;
      setUserImages(images);
    };
    getAllUserImages();
  }, [props.user.username]);

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
          {userImages?.map((image) => {
            return (
              <div className='transition duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-900'>
                <img
                  key={image}
                  src={image}
                  alt='all-the-images'
                  className='w-full h-full rounded-xl'
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

export default ProfilePage;
