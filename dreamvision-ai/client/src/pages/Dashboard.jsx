import GettingStarted from '../components/GettingStarted';
import Prompt from '../components/Prompt';
import Image from '../components/Image';
import { useState } from 'react';

const Dashboard = (props) => {
  const [images, setImages] = useState([]);

  return (
    <div className='flex gap-5 '>
      <div className='w-1/2 '>
        <Prompt setImages={setImages} props={props} />

        <GettingStarted />
      </div>
      <div className='w-1/2'>
        <Image image={images[images.length - 1]} />
      </div>
    </div>
  );
};

export default Dashboard;
