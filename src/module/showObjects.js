'use strict'

export const showObjects = (itemName, itemId) => {
  const list = document.querySelector('.object-list')

  let li = document.createElement('li')

  li.textContent = itemName
  li.setAttribute('data-id', itemId)
  li.classList.add('object-list-item')
  list.append(li)


}