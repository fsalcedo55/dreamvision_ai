import axios from "axios";

function internalServerError(err) {
  if (err.response && err.response.data && err.response.data.errorMessage) {
    return {
      status: false,
      errorMessage: err.response.data.errorMessage,
    };
  }
  return {
    status: false,
    errorMessage: "Internal server error. Please check your server",
  };
}

function successStatus(res) {
  return {
    status: true,
    data: res.data,
  };
}

// creates a basic url for every request in this file
const authService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/imagined-images`,
});

export const saveImaginedImage = async (userPrompt, userId) => {
  return authService
    .post("/saveImaginedImage", { userPrompt, userId })
    .then(successStatus)
    .catch(internalServerError);
};
