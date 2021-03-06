const path = 'https://www.googleapis.com/youtube/v3/';

const errorMessage =
  'API Key blocked, please set a new one and try again. Original error message: ';

const key = process.env.REACT_APP_API_KEY;

export { path, key, errorMessage };
