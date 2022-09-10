const GettingStarted = () => {
  return (
    <>
      <div className='flex border-4 p-4 rounded-xl border-secondary my-3 text-white text-opacity-60'>
        <div className='min-w-fit text-sm w-1/2'>
          <h1 className='my-3 text-gray-400'>Getting Started</h1>

          {/* <div className='flex-col'> */}
          <h3 className='ml-3 my-3'>1.Raw prompt</h3>

          <li className='ml-6'>Panda</li>
          <li className='ml-6'>A warrior with a sword</li>
          <li className='ml-6'>Skeleton</li>
          {/* </div> */}
          {/* <div className='flex'> */}
          <h3 className='ml-3 my-3'>2.Style</h3>
          <li className='ml-6'>Realistic</li>
          <li className='ml-6'>Oil panting</li>
          <li className='ml-6'>Pencil drawing</li>
          <li className='ml-6'>Concept art</li>
          {/* </div> */}

          <h3 className='ml-3 my-3'>3.Artist</h3>
          <li className='ml-6'>Leonardo DaVinci</li>
          <li className='ml-6'>Vincent Van Gogh</li>
          <li className='ml-6'>Rembrandt</li>
        </div>

        <div className='w-1/2 text-sm'>
          <h3 className='my-3'>4.Finishing touches</h3>
          <p>
            if you want to make your image artistic, add "trending on
            artstation". If you want to add more realistic lighting add "Unreal
            Engine". You can add anything you want.
          </p>
          <h3 className='my-3'>5. Conclusion</h3>
          <p>
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
