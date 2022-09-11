import { useState } from 'react';
import { saveImaginedImage } from '../services/iamginator-service';

const Prompt = (props) => {
  const [prompt, setPrompt] = useState('');
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setPrompt(value);
    // props.setImaginedText(value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const user = await saveImaginedImage(prompt, {
      userId: props.props.user._id,
    });
    console.log('THE IMAGES', user.data.user.imaginedPics);
    props.setPictureDetails({
      picUrl:
        user.data.user.imaginedPics[user.data.user.imaginedPics.length - 1]
          .picUrl,
      prompt:
        user.data.user.imaginedPics[user.data.user.imaginedPics.length - 1]
          .prompt,
    });
    console.log(
      user.data.user.imaginedPics[user.data.user.imaginedPics.length - 1].picUrl
    );

    console.log(
      user.data.user.imaginedPics[user.data.user.imaginedPics.length - 1].prompt
    );
    // const imageUrls = data.user.imaginedPics;
    props.setImaginedText('');
    // setUserImages(() => {
    //   return [...imageUrls].reverse();
    // });
  };

  return (
    <>
      <div className='container mx-auto  bg-secondary shadow-xl p-5 rounded-xl relative text-white'>
        <h3>Prompt</h3>
        <form type='submit'>
          <textarea
            className='bg-primary container mx-auto mb-10'
            id='w3review'
            name='w3review'
            rows='4'
            cols='50'
            text-white
            value={prompt}
            onChange={onChangeHandler}
          />

          <button
            className='bg-pink rounded-lg absolute bottom-1 right-5 w-32 p-1 text-white mb-2 font-bold mx-auto'
            onClick={submitHandler}
          >
            Envision
          </button>
        </form>
      </div>
    </>
  );
};

export default Prompt;
