import handleResponse from './handleResponse';

fetch('some-url')
  .then(handleResponse)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
