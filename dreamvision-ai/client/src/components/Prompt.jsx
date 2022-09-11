const Prompt = () => {
  return (
    <>
      <div className='w-full md:container bg-secondary shadow-xl p-5 rounded-xl relative text-white'>
        <h3>Prompt</h3>
        <textarea
          className='bg-primary'
          id='w3review'
          name='w3review'
          rows='4'
          cols='50'
          text-white
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
          <select name='choices' className='bg-primary rounded-lg'>
            <option value='k_lms'>k_lms</option>
            <option value='plms'>plms</option>
            <option value='k_euler'>k_euler</option>
            <option value='k_euler_ancestral'>k_euler_ancestral</option>
            <option value='k_heun'>k_heun</option>
            <option value='k_dpm_2'>k_dpm_2</option>
            <option value='k_dpm_2_ancestral'>k_dpm_2_ancestral</option>
          </select>
        </p>

        <button className='bg-pink rounded-lg absolute bottom-1 right-5 w-32 p-1 text-white mb-2 font-bold'>
          Envision
        </button>
      </div>
    </>
  );
};

export default Prompt;
