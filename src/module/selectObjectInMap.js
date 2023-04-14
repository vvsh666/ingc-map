'use strict'

import { getInfo } from "./getInfo"

export const selectObjectInMap = () => {
  const scheme = document.getElementById('scheme')

  const selectObject = (e) => {
    const list = document.querySelectorAll('.object')

    list.forEach(item => {
      item.classList.remove('object_active')
    })
    e.target.classList.add('object_active')
  }

  const flashObjectList = (e) => {
    const list = document.querySelectorAll('.object-list-item')

    list.forEach(listItem => {
      listItem.classList.remove('object-list-item_active')
      if (e.target.id === listItem.dataset.id) {
        listItem.classList.add('object-list-item_active')
      }
    })
  }

  const getObject = (e) => {
    if (e.target.closest('.object')) {
      selectObject(e)
      flashObjectList(e)
      getInfo(e.target.id)
    }
  }
  
  scheme.addEventListener('click', getObject)
}