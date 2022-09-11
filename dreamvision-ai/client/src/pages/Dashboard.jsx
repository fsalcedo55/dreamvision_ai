import GettingStarted from '../components/GettingStarted';
import Prompt from '../components/Prompt';
import Image from '../components/Image';
import { useState } from 'react';

const Dashboard = (props) => {
  const [pictureDetails, setPictureDetails] = useState({});
  const [imaginedText, setImaginedText] = useState('');

  return (
    <div className='flex gap-5   '>
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
        <Image pictureDetails={pictureDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
