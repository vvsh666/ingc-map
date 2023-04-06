'use strict'

import { getData } from "./getData"
import { showInfo } from "./showInfo"

export const getInfo = (id) => {
  getData().then(data => {
    data.forEach(item => {
      if (item.id === id) {
        showInfo(item)
      }
    })
    

  })
}