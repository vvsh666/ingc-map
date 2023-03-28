'use strict'

export const showObjects = (item) => {
  const list = document.querySelector('.object-list')

    let li = document.createElement('li')

    li.textContent = item
    li.classList.add('object-list-item')
    list.append(li)

  
}