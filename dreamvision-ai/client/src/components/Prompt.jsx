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
    props.setImages(user.data.user.imaginedPics);

    // const imageUrls = data.user.imaginedPics;
    props.setImaginedText('');
    // setUserImages(() => {
    //   return [...imageUrls].reverse();
    // });
  };
  console.log(props);
  console.log(props.imaginedText);

  return (
    <>
      <div className='container mx-auto  bg-secondary shadow-xl p-5 rounded-xl relative text-white'>
        <h3>Prompt</h3>
        <form type='submit'>
          <textarea
            className='bg-primary container mx-auto '
            id='w3review'
            name='w3review'
            rows='4'
            cols='50'
            text-white
            value={prompt}
            onChange={onChangeHandler}
          />
          <p>
            CFG Scale Factor{' '}
            <input
              className='bg-primary rounded-lg text-center text-white'
              type='number'
              id='tentacles'
              name='tentacles'
              min='1'
              max='10'
              value='7'
            ></input>
          </p>

          <p className='h-20'>
            Diffusion Method{' '}
            <select
              name='choices'
              className='bg-primary rounded-lg w-24 min-w-0'
            >
              <option value='k_lms'>k_lms</option>
              <option value='plms'>plms</option>
              <option value='k_euler'>k_euler</option>
              <option value='k_euler_ancestral'>k_euler_ancestral</option>
              <option value='k_heun'>k_heun</option>
              <option value='k_dpm_2'>k_dpm_2</option>
              <option value='k_dpm_2_ancestral'>k_dpm_2_ancestral</option>
            </select>
          </p>

          <button
            className='bg-pink rounded-lg absolute bottom-1 right-5 w-32 p-1 text-white mb-2 font-bold'
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
