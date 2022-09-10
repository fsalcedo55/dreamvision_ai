import '../App.css';
import React, { useState } from 'react';
import { getUserImages } from '../services/iamginator-service';
import { useEffect } from 'react';

function ProfilePage(props) {
  const [userImages, setUserImages] = useState([]);

  useEffect(() => {
    const getAllUserImages = async () => {
      const images = (await getUserImages(props.user.username)).data.userImages;
      setUserImages(images);
    };
    getAllUserImages();
  }, [props.user.username]);

  return (
    <React.Fragment>
      <div className='grid grid-cols-5 gap-4'>
        {userImages?.map((image) => {
          return (
            <img
              key={image}
              src={image}
              alt='all-the-images'
              className='w-full h-64 rounded-xl'
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default ProfilePage;
