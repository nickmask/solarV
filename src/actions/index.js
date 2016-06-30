import Firebase from 'firebase'

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const ADD_ADDRESS = 'ADD_ADDRESS'

export function addAddress (address, city) {
  return {
    type: ADD_ADDRESS,
    address: address,
    city: city
  }
}

export function receiveProjects (jsonObj) {
  return {
    type: RECEIVE_PROJECTS,
    list: jsonObj,
    receivedAt: Date.now()
  }
}

export function fetchProjects () {
  return function (dispatch) {
    dispatch(requestProjects())
    let projects = new Firebase('https://nickmask.firebaseio.com/projects')
    let arr = []
    projects.once('value', function (project) {
      project.forEach(function (childProject) {
        arr.push({
          projectName: childProject.key(),
          projectData: childProject.val()
        })
      })
      dispatch(receiveProjects(arr))
    })
  }
}
