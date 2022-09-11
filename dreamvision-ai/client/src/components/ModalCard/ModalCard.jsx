import { AiFillCloseCircle } from 'react-icons/ai';

export default function ModalCard({ imgSrc, currentPrompt, user }) {
  console.log(user);
  return (
    <div>
      <div className='relative max-w-xl p-8 max-h-fit bg-gradient-to-b from-[#04ADBF] to-[#012840] rounded-3xl border-4 border-[#B6ECF2]'>
        <div className='pb-4 '>
          <AiFillCloseCircle className='absolute text-2xl cursor-pointer text-secondary right-3 top-3' />
        </div>
        <div className='flex flex-col items-center justify-center '>
          <img
            className='w-[512px] h-[512px] rounded-xl'
            src={imgSrc}
            alt='placeholder'
          />
        </div>
        <div>
          <div className='flex items-center justify-start pt-4'>
            <div>
              <img
                className='w-8 h-8 rounded-full'
                src={imgSrc}
                alt='profile'
              />
            </div>
            <div className='pl-4'>
              <p className='text-white'>
                Image created by <strong>{user.username}</strong>
              </p>
            </div>
          </div>
          <div className='pt-2'>
            <p className='text-xs text-white'>{currentPrompt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
