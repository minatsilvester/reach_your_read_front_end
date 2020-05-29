import React from 'react';
import fetch from 'isomorphic-fetch';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function setDocumentTitle(title) {
  document.title = `${title}`;
}

export function parseJSON(response) {
  console.log(response)
  return response.json();
}


export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function httpPost(url, data){
  const body = JSON.stringify(data)

  return fetch(url, {
    method: 'post',
    headers: defaultHeaders,
    body: body,
  })
  .then(checkStatus)
  .then(parseJSON)
}

export function httpGet(url){
  return fetch(url, {
    headers: defaultHeaders,
  })
  .then(checkStatus)
  .then(parseJSON)
}
