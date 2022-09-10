import { AiFillCloseCircle } from 'react-icons/ai';

export default function ModalCard() {
  return (
    <div className='relative max-w-xl p-8 max-h-fit bg-gradient-to-b from-[#04ADBF] to-[#012840] rounded-3xl border-4 border-[#B6ECF2]'>
      <div className='pb-4 '>
        <AiFillCloseCircle className='absolute text-2xl cursor-pointer text-secondary right-3 top-3' />
      </div>
      <div className='flex flex-col items-center justify-center '>
        <img
          className='w-[512px] h-[512px] rounded-xl'
          src='https://images.unsplash.com/photo-1561553002-c3e6cc96be37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NTAwJTIwcGl4ZWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt='placeholder'
        />
      </div>
      <div>
        <div className='flex items-center justify-start pt-4'>
          <div>
            <img
              className='w-8 h-8 rounded-full'
              src='https://breakdownservices.s3.amazonaws.com/media/photos/20222/1048360/4A5D4FE0-4AEB-435F-8D433376FD3485B5.jpg'
              alt='profile'
            />
          </div>
          <div className='pl-4'>
            <p className='text-white'>Image created by `User`</p>
          </div>
        </div>
        <div className='pt-2'>
          <p className='text-xs text-white'>
            Close-up of Viking King emerging from wet black mud + Dark metal
            helmet with two large black horns on the sides of the helmet + dark
            warpaint + scruffy black beard + angry expression + scar on face +
            Viking Axe + cinematic lighting, volumetric rays, moody, wet,
            dripping mud
          </p>
        </div>
      </div>
    </div>
  );
}
