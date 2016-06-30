export const ADD_POWER = 'ADD_POWER'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const ADD_KW = 'ADD_KW'
export const ADD_SIZE = 'ADD_SIZE'
export const REQUEST_CITY = 'REQUEST_CITY'

export function addAddress (address) {
  return {
    type: ADD_ADDRESS,
    address: address
  }
}

export function addPower (power) {
  return {
    type: ADD_POWER,
    power: power
  }
}

export function addKw (kw) {
  return {
    type: ADD_KW,
    power: kw
  }
}

export function addSize (size) {
  return {
    type: ADD_SIZE,
    power: size
  }
}

export function requestCity () {
  return {
    type: REQUEST_CITY
  }
}

export function receiveCity (jsonObj) {
  return {
    type: RECEIVE_PROJECTS,
    sunlight: jsonObj
  }
}

export function fetchCity (city) {
  return function (dispatch) {
    dispatch(requestCity())
    let cities = new Firebase(`https://nickmask.firebaseio.com/projects/${city}`)
    let arr = []
    cities.once('value', function (city) {
      city.forEach(function (childCity) {
        arr.push({
          city: childCity.val()
        })
      })
      dispatch(receiveCity(arr))
    })
  }
}
