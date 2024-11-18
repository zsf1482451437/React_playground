// json类型
const handleJsonResponse = (response) => {
  return response.json().then((json) => {
    if (response.ok) {
      return json;
    } else {
      let error = Object.assign({}, json, {
        status: response.status,
        statusText: response.statusText,
      });
      return Promise.reject(error);
    }
  });
};

// xml类型
const handleXmlResponse = (response) => {
  return response.text().then((text) => {
    let parser = new DOMParser();
    let xml = parser.parseFromString(text, 'application/xml');
    if (response.ok) {
      return xml;
    } else {
      let error = {
        status: response.status,
        statusText: response.statusText,
        message: text,
      };
      return Promise.reject(error);
    }
  });
};

// image类型
const handleImageResponse = (response) => {
  return response.blob().then((blob) => {
    if (response.ok) {
      return URL.createObjectURL(blob);
    } else {
      let error = {
        status: response.status,
        statusText: response.statusText,
        message: 'Image fetch error',
      };
      return Promise.reject(error);
    }
  });
};

// 默认类型
const handleTextResponse = (response) => {
  return response.text().then((text) => {
    if (response.ok) {
      return text;
    } else {
      let error = {
        status: response.status,
        statusText: response.statusText,
        message: text,
      };
      return Promise.reject(error);
    }
  });
};

const responseHandlers = {
  'application/json': handleJsonResponse,
  'application/xml': handleXmlResponse,
  'text/xml': handleXmlResponse,
  'image/': handleImageResponse,
  default: handleTextResponse,
};

const handleResponse = (response) => {
  let contentType = response.headers.get('content-type');
  for (let type in responseHandlers) {
    if (contentType.includes(type)) {
      return responseHandlers[type](response);
    }
  }
  return responseHandlers['default'](response);
};

export default handleResponse;
