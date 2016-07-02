export const ADD_POWER = 'ADD_POWER'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const ADD_KW = 'ADD_KW'
export const ADD_SIZE = 'ADD_SIZE'
export const REQUEST_CITY = 'REQUEST_CITY'
import Firebase from 'firebase'

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

export function fetchCity () {
  console.log('I am in the action center')
  return function (dispatch) {
    dispatch(requestCity())
    console.log('after request')
    let projects = new Firebase(`https://solar-v.firebaseio.com/Wellington`)
    let arr = []
    projects.once('value', function (project) {
      project.forEach(function (childProject) {
        console.log('in for each')
        arr.push({
          projectName: childProject.key(),
          projectData: childProject.val()
        })
      })
      console.log(arr)
      dispatch(receiveCity(arr))
    })
  }
}


//
// export function fetchCity (city, fullAddress) {
//   console.log('in fetch city')
//   return function (dispatch) {
//     dispatch(addAddress(fullAddress))
//     console.log('after dispatch Add_Address')
//     dispatch(requestCity())
//     let cities = new Firebase(`https://solar-v.firebaseio.com/Wellington`)
//     let arr = []
//     cities.once('value', function (c) {
//       c.forEach(function (childCity) {
//         console.log(childCity)
//         arr.push({
//           city: childCity.val()
//         })
//       })
//       console.log('outcome', arr)
//       dispatch(receiveCity(arr))
//     })
//   }
// }
