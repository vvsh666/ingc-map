'use strict'

import { getData } from "./getData"
import { showObjects } from "./showObjects"

export const getObjects = () => {
  getData().then(data => {
    data.forEach(item => {
      showObjects(item.name, item.id)     
    })
  })
  .catch(error => console.log(error.message))  
}