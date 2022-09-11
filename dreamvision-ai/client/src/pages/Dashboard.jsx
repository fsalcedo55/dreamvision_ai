import GettingStarted from '../components/GettingStarted';
import Prompt from '../components/Prompt';
import Image from '../components/Image';
import { useState } from 'react';

const Dashboard = (props) => {
  const [pictureDetails, setPictureDetails] = useState({});
  const [imaginedText, setImaginedText] = useState('');

  return (
    <div className='flex justify-center gap-5'>
      <div className='w-1/2 '>
        <Prompt
          setPictureDetails={setPictureDetails}
          props={props}
          setImaginedText={setImaginedText}
          imaginedText={imaginedText}
        />

        <GettingStarted />
      </div>
      <div className='w-1/2'>
        {pictureDetails.picUrl ? (
          <Image pictureDetails={pictureDetails} />
        ) : (
          <div className='gap-4'>
            <img
              src='https://www.kurin.com/wp-content/uploads/placeholder-square.jpg'
              alt='heyhey'
              width='512'
              height='512'
              className='opacity-10 rounded-xl'
            />
            <p className='text-center text-white'>What do you imagine?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
