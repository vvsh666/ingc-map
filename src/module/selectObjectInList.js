import { getData } from "./getData"

export const selectObjectInList = () => {
  const objectList = document.getElementById('object-list')
  


  const selectObject = (e) => {
    if (e.target.closest('.object-list-item')) {
      const list = document.querySelectorAll('.object-list-item')
      list.forEach(item => {
        item.classList.remove('object-list-item_active')
      })
      e.target.classList.add('object-list-item_active')
    }
  }


  // getData().then(data => {
  //   data.forEach(item => {
  //     if (item.name === e.target.textContent) {
  //       console.log(item);
  //     }
  //   })
  // })


  objectList.addEventListener('click', selectObject)
}