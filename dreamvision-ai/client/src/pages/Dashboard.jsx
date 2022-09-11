import GettingStarted from '../components/GettingStarted';
import Prompt from '../components/Prompt';
import Image from '../components/Image';
import { useState } from 'react';

const Dashboard = (props) => {
  const [pictureDetails, setPictureDetails] = useState({});
  const [imaginedText, setImaginedText] = useState('');

  return (
    <div className='flex justify-center gap-12'>
      <div className='w-1/2 '>
        <Prompt
          setPictureDetails={setPictureDetails}
          props={props}
          setImaginedText={setImaginedText}
          imaginedText={imaginedText}
        />

        <GettingStarted />
      </div>
      <div className='w-1/2 max-w-[512px]'>
        <div className='flex justify-center'>
          {pictureDetails.picUrl ? (
            <Image pictureDetails={pictureDetails} />
          ) : (
            <div className='flex flex-col gap-6 '>
              <img
                src='https://maano.co.uk/wp-content/uploads/2021/02/placeholder-square.jpg'
                alt='dreamvision.ai'
                width='512'
                height='512'
                className='opacity-80 rounded-xl'
              />
              <p className='text-xl font-semibold text-center text-white'>
                What do you imagine?
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
