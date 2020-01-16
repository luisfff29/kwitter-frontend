import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER } from "../actionTypes";
import { GETLISTOFUSERS } from "../actionTypes";
import { CREATENEWUSER } from "../actionTypes";

const url = domain + "/users";

export const getUser = username => dispatch => {
  dispatch({ type: GETUSER.START });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
    });
};

export const getListOfUsers = () => dispatch => {
  dispatch({ type: GETLISTOFUSERS.START });

  return fetch(url, {
    method: "GET"
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETLISTOFUSERS.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GETLISTOFUSERS.FAIL, payload: err })
      );
    });
};

export const createNewUser = (username, displayName, password) => dispatch => {
  dispatch({ type: CREATENEWUSER.START });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({ username, displayName, password })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATENEWUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATENEWUSER.FAIL, payload: err })
      );
    });
};
