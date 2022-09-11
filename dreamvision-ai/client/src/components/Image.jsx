const Image = (props) => {
  const { picUrl, prompt } = props.pictureDetails;
  return (
    <div className='flex flex-col gap-6'>
      <img
        src={picUrl}
        alt='heyhey'
        width='512'
        height='512'
        className='rounded-xl'
      />
      <p className='text-xl font-semibold text-center text-white'>{prompt}</p>
    </div>
  );
};

export default Image;
