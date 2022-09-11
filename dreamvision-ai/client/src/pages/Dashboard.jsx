import GettingStarted from '../components/GettingStarted';
import Prompt from '../components/Prompt';
import Image from '../components/Image';

const Dashboard = () => {
  return (
    <div className='flex gap-5 '>
      <div className='w-1/2'>
        <Prompt />
        <GettingStarted />
      </div>
      <div className='w-1/2'>
        <Image />
      </div>
    </div>
  );
};

export default Dashboard;
