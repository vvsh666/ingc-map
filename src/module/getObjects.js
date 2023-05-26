'use strict'

import { getData } from "./getData"
import { showObjects } from "./showObjects"

export const getObjects = () => {
  getData().then(data => {
    data.sort((prev, next) => prev.name.localeCompare(next.name)) // сортировка массива объектов по имени
    data.forEach(item => {
      showObjects(item.name, item.id)
    })
  })
  .catch(error => console.log(error.message))  
}