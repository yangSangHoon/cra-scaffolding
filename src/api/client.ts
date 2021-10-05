import axios from "axios";

const instance: any = axios.create({ timeout: 10000, withCredentials: true });

instance.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export const setHeaderCookie = (ctx: any) => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    const cookie = ctx.req?.headers?.cookie;
    if (cookie) {
      instance.defaults.headers.Cookie = cookie;
    } else {
      instance.defaults.headers.Cookie = null;
    }

    // if (instance.defaults.headers.Cookie) {
    //   instance.defaults.headers.Cookie = cookie;
    // }
  }
};

export const get = (url: any, params: any = null) => {
  return instance({
    method: "get",
    params,
    url,
  });
};

export const post = (url: any, data: any = null) => {
  return instance({
    method: "post",
    data,
    url,
  });
};

export const put = (url: any, data = {}, options = {}) => {
  return instance({
    method: "PUT",
    data,
    url,
  });
};

export const del = (url: any, options = {}): any => {
  const customOptions: any = { cache: false, ...options };
  return instance(
    {
      method: "DELETE",
      url,
    },
    customOptions
  );
};
