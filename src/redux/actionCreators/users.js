import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER } from "../actionTypes";
import { GETLISTOFUSERS } from "../actionTypes";
import { CREATENEWUSER } from "../actionTypes";
import { UPDATEUSER } from "../actionTypes";
import { UPLOADPICTURE } from "../actionTypes";
import { push } from "connected-react-router";

const url = domain + "/users";

export const getUser = (username) => (dispatch) => {
  dispatch({ type: GETUSER.START });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then((result) => {
      return dispatch({
        type: GETUSER.SUCCESS,
        payload: result,
      });
    })
    .catch((err) => {
      return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
    });
};

export const getListOfUsers = () => (dispatch) => {
  dispatch({ type: GETLISTOFUSERS.START });

  return fetch(url + "?limit=500&offset=0", {
    method: "GET",
  })
    .then(handleJsonResponse)
    .then((result) => {
      return dispatch({
        type: GETLISTOFUSERS.SUCCESS,
        payload: result,
      });
    })
    .catch((err) => {
      return Promise.reject(
        dispatch({ type: GETLISTOFUSERS.FAIL, payload: err })
      );
    });
};

const _createNewUser = (username, displayName, password) => (dispatch) => {
  dispatch({ type: CREATENEWUSER.START });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({ username, displayName, password }),
  })
    .then(handleJsonResponse)
    .then((result) => {
      return dispatch({
        type: CREATENEWUSER.SUCCESS,
        payload: result,
      });
    })
    .catch((err) => {
      return Promise.reject(
        dispatch({ type: CREATENEWUSER.FAIL, payload: err })
      );
    });
};

export const createNewUser = (username, displayName, password) => (
  dispatch
) => {
  return dispatch(_createNewUser(username, displayName, password)).then(() => {
    dispatch(push("/"));
  });
};

export const updateUser = (displayName, about, password) => (
  dispatch,
  getState
) => {
  dispatch({ type: UPDATEUSER.START });

  const username = getState().auth.login.result.username;
  const token = getState().auth.login.result.token;

  return fetch(url + "/" + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ displayName, about, password }),
  })
    .then(handleJsonResponse)
    .then((result) => {
      return dispatch({
        type: UPDATEUSER.SUCCESS,
        payload: result,
      });
    })
    .catch((err) => {
      return Promise.reject(dispatch({ type: UPDATEUSER.FAIL, payload: err }));
    });
};

const _uploadPicture = (picture) => (dispatch, getState) => {
  dispatch({ type: UPLOADPICTURE.START });

  const username = getState().auth.login.result.username;
  const token = getState().auth.login.result.token;

  return fetch(url + "/" + username + "/picture", {
    method: "PUT",
    headers: { Authorization: "Bearer " + token, Accept: "application/json" },
    body: picture,
  })
    .then(handleJsonResponse)
    .then((result) => {
      return dispatch({
        type: UPLOADPICTURE.SUCCESS,
        payload: result,
      });
    })
    .catch((err) => {
      return Promise.reject(
        dispatch({ type: UPLOADPICTURE.FAIL, payload: err })
      );
    });
};

export const uploadPicture = (picture) => (dispatch, getState) => {
  return dispatch(_uploadPicture(picture)).then(() => {
    const username = getState().auth.login.result.username;
    return dispatch(getUser(username));
  });
};
