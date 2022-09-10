import '../App.css';
import React, { useState } from 'react';
import { saveImaginedImage } from '../services/iamginator';

function HomePage(props) {
  const [imaginedText, setImaginedText] = useState('');
  const [userImages, setUserImages] = useState([]);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setImaginedText(value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await saveImaginedImage(imaginedText, {
      userId: props.user._id,
    });
    const imageUrls = data.user.imaginedPics;
    setImaginedText('');
    setUserImages(() => {
      return [...imageUrls].reverse();
    });
  };

  console.log({ userImages });
  return (
    <React.Fragment>
      <div>
        <div>
          <form onSubmit={submitHandler}>
            <label>
              Your text
              <input
                type='text'
                name='imaginedText'
                onChange={onChangeHandler}
                value={imaginedText}
              />
            </label>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <div className='images-container'>
        {userImages.length > 0 &&
          userImages.map((imageUrl) => (
            <div key={imageUrl}>
              <img src={imageUrl} alt='users-pic' />
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default HomePage;
