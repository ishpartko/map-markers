export const unreact = (value) => {
  return JSON.parse(JSON.stringify(value))
}
export const parse = (value) => {
  return JSON.parse(value)
}
export const stringify = (value) => {
  return JSON.stringify(value)
}

export const readPlacesFromLocalStorage = () => {
  try {
    let places = localStorage.getItem('places')
    if(places) {
      return parse(places)
    }
  } catch(e) {
    localStorage.removeItem('places')
  }
}
export const writePlacesInLocalStorage = (value) => {
  try {
    localStorage.setItem('places', stringify(unreact(value)))
  } catch(e) {
    throw new Error(e)
  }
}



