import GettingStarted from '../components/GettingStarted';
import Prompt from '../components/Prompt';
import Image from '../components/Image';
import { useState } from 'react';

const Dashboard = (props) => {
  const [images, setImages] = useState([]);
  const [imaginedText, setImaginedText] = useState('');

  return (
    <div className='flex gap-5 '>
      <div className='w-1/2 '>
        <Prompt
          setImages={setImages}
          props={props}
          setImaginedText={setImaginedText}
          imaginedText={imaginedText}
        />

        <GettingStarted />
      </div>
      <div className='w-1/2'>
        <Image image={images[images.length - 1]} imaginedText={imaginedText} />
      </div>
    </div>
  );
};

export default Dashboard;
