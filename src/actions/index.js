import Firebase from 'firebase'

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'

export function requestProjects () {
  return {
    type: REQUEST_PROJECTS
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
