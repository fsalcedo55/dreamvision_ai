import axios from 'axios';

function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: 'Internal server error. Please check your server',
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

// creates a basic url for every request in this file
const dreamVisionService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/imagined-images`,
});

export const saveImaginedImage = async (userPrompt, userId) => {
  return dreamVisionService
    .post('/saveImaginedImage', { userPrompt, userId })
    .then(successStatus)
    .catch(internalServerError);
};

export const getAllTheEntities = async () => {
  return dreamVisionService
    .get('/getAllTheEntities')
    .then(successStatus)
    .catch(internalServerError);
};

export const getUserImages = async (username) => {
  console.log({ username });
  return dreamVisionService
    .get(`/getAllImagesOfThisUser/${username}`)
    .then(successStatus)
    .catch(internalServerError);
};
