import { getData } from "./getData"

export const selectObjectInList = () => {
  const objectList = document.getElementById('object-list')

  const selectObject = (e) => {
    if (e.target.closest('.object-list-item')) {
      getData().then(data => {
        data.forEach(item => {
          if (item.name === e.target.textContent) {
            console.log(item);
          }
        })
      })
    }
    }


  objectList.addEventListener('click', selectObject)
}