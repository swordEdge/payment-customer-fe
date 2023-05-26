import fetch from 'isomorphic-fetch';

const myHeaders = new Headers();

const requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

const originalFetch = (urlString: string) =>
  new Promise((resolve, reject) => {
    fetch(urlString, requestOptions)
      .then((response: any) => response.json())
      .then((response: any) => resolve(response))
      .catch((error: any) => {
        reject(error);
      });
  });

export const getConversionRate = async (query: string) => {
  return await originalFetch(query);
};
