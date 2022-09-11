import { useState } from 'react';
import { saveImaginedImage } from '../services/iamginator-service';
import { ImSpinner } from 'react-icons/im';

const Prompt = (props) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setPrompt(value);
    // props.setImaginedText(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
    setIsLoading(false);
  };

  return (
    <>
      <div className='container relative p-5 mx-auto text-white shadow-xl bg-secondary rounded-xl'>
        <h3 className='mb-2 text-lg font-semibold'>Prompt</h3>
        <form type='submit'>
          <textarea
            className='container mx-auto text-white bg-primary'
            id='w3review'
            name='w3review'
            rows='4'
            cols='50'
            value={prompt}
            onChange={onChangeHandler}
            placeholder='e.g. anime still of a highly detailed night cyberpunk city life, bladerunner style, art by satoshi kon and studio ghibli, cinematic lighting'
          />
          {/* <p>
            CFG Scale Factor{' '}
            <input
              className='text-center text-white rounded-lg bg-primary'
              type='number'
              id='tentacles'
              name='tentacles'
              min='1'
              max='10'
              value='7'
            ></input>
          </p> */}

          {/* <p className='h-20'>
            Diffusion Method{' '}
            <select
              name='choices'
              className='w-24 min-w-0 rounded-lg bg-primary'
            >
              <option value='k_lms'>k_lms</option>
              <option value='plms'>plms</option>
              <option value='k_euler'>k_euler</option>
              <option value='k_euler_ancestral'>k_euler_ancestral</option>
              <option value='k_heun'>k_heun</option>
              <option value='k_dpm_2'>k_dpm_2</option>
              <option value='k_dpm_2_ancestral'>k_dpm_2_ancestral</option>
            </select>
          </p> */}
          <div className='flex justify-end'>
            <button
              className='w-40 p-1 mt-1 font-bold text-white rounded-lg bg-pink bottom-1 right-5'
              onClick={submitHandler}
            >
              {isLoading ? (
                <div className='flex items-center justify-center gap-2'>
                  <span className='animate-spin'>
                    <ImSpinner />
                  </span>
                  <p>Generating...</p>
                </div>
              ) : (
                <p>Envision</p>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Prompt;
