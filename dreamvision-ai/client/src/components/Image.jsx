const Image = (props) => {
  const { image } = props;
  return (
    <div>
      <img src={image} alt='heyhey' width='512' height='512' />
      <p className='text-center'>Description of Image goes here</p>
    </div>
  );
};

export default Image;
