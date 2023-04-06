import { getData } from "./getData"

export const selectObjectInList = () => {
  const objectList = document.getElementById('object-list')

  const selectObject = (e) => {
    const list = document.querySelectorAll('.object-list-item')

    list.forEach(item => {
      item.classList.remove('object-list-item_active')
    })
    e.target.classList.add('object-list-item_active')
  }


  const flashObjectMap = (e) => {
    const listMap = document.querySelectorAll('.object')

    listMap.forEach(listItem => {
      listItem.classList.remove('object_active')
      if (e.target.dataset.id === listItem.id) {
        listItem.classList.add('object_active')
      }
    })
  }


  const getObject = (e) => {
    if (e.target.closest('.object-list-item')) {
      selectObject(e)
      flashObjectMap(e)
    }
  }

  objectList.addEventListener('click', getObject)
}