import { getData } from "./getData"

export const selectObjectInList = () => {
  const objectList = document.getElementById('object-list')

  let idObject

  const selectObject = (e) => {
    const list = document.querySelectorAll('.object-list-item')

    list.forEach(item => {
      item.classList.remove('object-list-item_active')
    })
    e.target.classList.add('object-list-item_active')
  }

  const listMap = document.querySelectorAll('.object')
  
  const getId = (e) => {
    getData().then(data => {
      data.forEach(item => {
        if (item.name === e.target.textContent) {
          return item.id
        }
      })
      
    })
  }

    // getData().then(data => {
    //   data.forEach(item => {
    //     if (item.name === e.target.textContent) {
    //       idObject = item.id
    //     }
    //   })
    // })
  

  const getObject = (e) => {
    if (e.target.closest('.object-list-item')) {
      selectObject(e)
      getId(e)
    }
  }

  objectList.addEventListener('click', getObject)
}