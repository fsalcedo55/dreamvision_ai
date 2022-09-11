const Image = (props) => {
  const { picUrl, prompt } = props.pictureDetails;
  return (
    <div>
      <img src={picUrl} alt='heyhey' width='512' height='512' />
      <p className='text-center'>{prompt}</p>
    </div>
  );
};

export default Image;
