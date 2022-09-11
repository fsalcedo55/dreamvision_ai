const GettingStarted = () => {
  return (
    <>
      <div className='flex border-2 p-4 rounded-xl border-secondary bg-gradient-to-t from-primary to-secondary my-3 text-white text-opacity-60'>
        <div className='min-w-fit text-sm w-1/2'>
          <h1 className='my-3 text-gray-400'>Getting Started</h1>

          {/* <div className='flex-col'> */}
          <h3 className='ml-3 my-3 text-white font-bold'>1. Raw prompt</h3>

          <li className='ml-6'>Panda</li>
          <li className='ml-6'>A warrior with a sword</li>
          <li className='ml-6'>Skeleton</li>
          {/* </div> */}
          {/* <div className='flex'> */}
          <h3 className='ml-3 my-3 text-white font-bold'>2. Style</h3>
          <li className='ml-6'>Realistic</li>
          <li className='ml-6'>Oil panting</li>
          <li className='ml-6'>Pencil drawing</li>
          <li className='ml-6'>Concept art</li>
          {/* </div> */}

          <h3 className='ml-3 my-3 text-white font-bold'>3. Artist</h3>
          <li className='ml-6'>Leonardo DaVinci</li>
          <li className='ml-6'>Vincent Van Gogh</li>
          <li className='ml-6'>Rembrandt</li>
        </div>

        <div className='w-1/2 md:text-sm text-xs ml-3'>
          <h3 className=' text-white font-bold mt-14 w-36'>
            4. Finishing touches
          </h3>
          <p className='mt-1 mx-auto ml-3 '>
            if you want to make your image artistic, add "trending on
            artstation". If you want to add more realistic lighting add "Unreal
            Engine". You can add anything you want.
          </p>
          <h3 className='my-3 text-white font-bold'>5. Conclusion</h3>
          <p className='ml-3'>
            Prompt Engineering allows you to have better control of what the
            image will look like. It (if done right) improves the image quality
            by a lot in every aspect.
          </p>
        </div>
      </div>
    </>
  );
};
export default GettingStarted;
