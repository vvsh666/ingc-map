'use strict'

export const showInfo = (obj) => {
  const objectInfo = document.querySelector('.object-info')

  for (let key in obj) {
    if (!obj[key]) {
      obj[key] = '-'
    }
  }

  const info = `
  <div class="infoblock">
    <h3 class="infoheader">Полное наименование</h3>
    <p class="infotext">${obj.fullname}</p>
    <h3 class="infoheader">Инвентарный номер</h3>
    <p class="infotext">${obj.reg_number}</p>
    <h3 class="infoheader">Кадастровый номер</h3>
    <p class="infotext">${obj.cadastr_number}</p>
    <h3 class="infoheader">Литера</h3>
    <p class="infotext">${obj.liter}</p>
    <h3 class="infoheader">Назначение</h3>
    <p class="infotext">${obj.assigning}</p>
    <h3 class="infoheader">Общая площадь</h3>
    <p class="infotext">${obj.square}</p>
    <h3 class="infoheader">Производственная площадь</h3>
    <p class="infotext">${obj.production_square}</p>
    <h3 class="infoheader">Административная площадь</h3>
    <p class="infotext">${obj.office_square}</p>
    <h3 class="infoheader">Складская площадь</h3>
    <p class="infotext">${obj.storage_square}</p>
    <h3 class="infoheader">Этажность</h3>
    <p class="infotext">${obj.number_floors}</p>
    <h3 class="infoheader">Год строительства</h3>
    <p class="infotext">${obj.building_year}</p>
    <h3 class="infoheader">Адрес</h3>
    <p class="infotext">${obj.address}</p>
    <h3 class="infoheader">Земельный участок</h3>
    <p class="infotext">${obj.land}</p>
  </div>
  `

  objectInfo.innerHTML = info



} 