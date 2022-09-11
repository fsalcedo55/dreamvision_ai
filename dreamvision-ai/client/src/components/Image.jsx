const Image = (props) => {
  const { picUrl, prompt } = props.pictureDetails;
  return (
    <div className='flex flex-col justify-center gap-4 mx-auto'>
      <img
        src={picUrl}
        alt='heyhey'
        width='512'
        height='512'
        className='rounded-xl'
      />
      <p className='text-center text-white'>{prompt}</p>
    </div>
  );
};

export default Image;
