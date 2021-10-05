import { get, post, put, del } from "./client";

export const basePath = `https://${process.env.SERVER_TYPE}.wanted.co.kr/gigs/`;
export const baseUrl = `https://nextweek.wanted.co.kr/gigs/api-v2/`;

export const uploadActionUrl = (): string => {
  return `${baseUrl}upload`;
};

export const getNotifications = async () => {
  const response = await get(`${baseUrl}notifications`);
  return response.data;
};

export const getProject = async (num: number) => {
  const response = await get(
    `https://nextweek.wanted.co.kr/gigs/api-v2/admin/project/${num}`
  );
  return response.data;
};
