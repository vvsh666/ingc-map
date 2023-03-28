'use strict'

export const getData = () => {
  return fetch('./dbObjects.json')
    .then(response => response.json())
    .catch(error => console.log(error.message))
}