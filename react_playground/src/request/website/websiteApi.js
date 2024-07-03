import request from "@request/index";

const api = {
  website: "/website",
};

export const getWebsite = () =>
  request.get({ url: api.website }).then((res) => res.data);
