const Image = (props) => {
  const { image, imaginedText } = props;
  return (
    <div>
      <img src={image} alt='heyhey' width='512' height='512' />
      <p className='text-center'>{imaginedText}</p>
    </div>
  );
};

export default Image;
