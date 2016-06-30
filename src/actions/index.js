import Firebase from 'firebase'

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'
export const ADD_ADDRESS = 'ADD_ADDRESS'

export function addAddress (address) {
  return {
    type: ADD_ADDRESS,
    address: address
  }
}
