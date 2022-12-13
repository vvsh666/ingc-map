export const mapNavigation = (a) => {
  
  const svgMap = document.getElementById('scheme')
  const svgWrapper = document.getElementById('svg-wrapper')
  console.log('svgWrapper.clientHeight: ', svgWrapper.offsetHeight);
  console.log('svgWrapper.clientWidth: ', svgWrapper.offsetWidth);

  let viewBoxVolume = svgMap.getAttribute('viewBox')
  
  const stringToArr = (string) => {
    let arr = string.split(' ')
    arr.forEach((item, index) => {
      arr[index] = parseFloat(item)
    })
    return arr
  }

  const arrToString = (arr) => {
    return arr.join(' ')
  }

  const viewBoxVolumeDefault = stringToArr(viewBoxVolume)

  const zoom = (e) => {
    e.preventDefault()

    viewBoxVolume = stringToArr(viewBoxVolume)
    const aspectRatio = viewBoxVolume[3] / viewBoxVolume[2]
    const indexX = e.offsetX / svgWrapper.offsetWidth
    const indexY = e.offsetY / svgWrapper.offsetHeight
            
    const delta = e.deltaY
    viewBoxVolume[2] += delta
    viewBoxVolume[0] -= delta * indexX
    viewBoxVolume[1] -= delta * indexY * aspectRatio
    if (viewBoxVolume[2] <= 0) {
      viewBoxVolume[2] -= delta;
      viewBoxVolume[0] += delta / 2
    } else if (viewBoxVolume[2] > viewBoxVolumeDefault[2]) {
      viewBoxVolume[2] = viewBoxVolumeDefault[2]
      viewBoxVolume[0] = viewBoxVolumeDefault[0]
      viewBoxVolume[1] = viewBoxVolumeDefault[1]
    }
    
    viewBoxVolume[3] = viewBoxVolume[2] * aspectRatio
    // viewBoxVolume[1] = viewBoxVolume[0] * aspectRatio

    viewBoxVolume = arrToString(viewBoxVolume)
        
    svgMap.setAttribute('viewBox', viewBoxVolume)
    
    
  }

  svgWrapper.addEventListener('wheel', zoom)

  svgWrapper.addEventListener('click', (e) => {
    const indexX = e.offsetX / svgWrapper.offsetWidth
    console.log('x: ', indexX);
  })

}