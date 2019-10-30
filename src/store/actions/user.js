import * as actionTypes from './actionTypes'
import api from '../../services/api'

export const setUser = user => ({
  type: actionTypes.SET_USER,
  user
})

export const searchUserFailed = (error) => ({
  type: actionTypes.SEARCH_USER_FAILED,
  error
})

export const searchUser = (username) => dispatch => {
  api.get(username)
    .then(response => {
      const { avatar_url, name, type } = response.data
      const obj = {avatar_url, name, type}
      dispatch(setUser(obj))
    }).catch(error => {
      const {message} = error.response.data
      dispatch(searchUserFailed(message))
    })
}