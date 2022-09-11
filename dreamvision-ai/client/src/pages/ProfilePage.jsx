import '../App.css';
import React, { useState } from 'react';
import { getUserImages } from '../services/iamginator-service';
import { useEffect } from 'react';
import ModalCard from '../components/ModalCard/ModalCard';

function ProfilePage(props) {
  const [userDetails, setUserDetails] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');

  useEffect(() => {
    const getAllUserImages = async () => {
      const userDetailsList = (await getUserImages(props.user.username)).data
        .userImages;
      userDetailsList.reverse();
      setUserDetails(userDetailsList);
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
          <ModalCard
            imgSrc={currentImage}
            user={props.user}
            currentPrompt={currentPrompt}
          />
        </div>
      )}
      <div className='z-10'>
        <div className='grid grid-cols-5 gap-4'>
          {userDetails?.map((details) => {
            return (
              <div
                id='picture-div'
                className='transition duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-900'
              >
                <div className='group'>
                  <img
                    key={details.picUrl}
                    src={details.picUrl}
                    alt='all-the-images'
                    className='w-full h-full rounded-xl'
                    onClick={() => {
                      setCurrentImage(details.picUrl);
                      setShowModal(true);
                      setCurrentPrompt(details.prompt);
                    }}
                  />
                  <div className='invisible p-2 text-sm font-semibold text-center text-white truncate rounded-b-lg cursor-pointer group-hover:visible'>
                    {details.prompt}
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

export default ProfilePage;
