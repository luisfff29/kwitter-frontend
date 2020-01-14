import { domain, handleJsonResponse, jsonHeaders } from "./constants";
import { GETMESSAGES } from "../actionTypes";
import { CREATEMESSAGE } from "../actionTypes";
import { GETPERSONALMESSAGES } from "../actionTypes";
import { DELETEMESSAGES } from "../actionTypes";

const url = domain + "/messages";

export const getMessages = () => dispatch => {
  dispatch({ type: GETMESSAGES.START });

  return fetch(url, {
    method: "GET"
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETMESSAGES.FAIL, payload: err }));
    });
};

export const createMessage = messageText => (dispatch, getState) => {
  dispatch({ type: CREATEMESSAGE.START });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ text: messageText })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATEMESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: CREATEMESSAGE.FAIL, payload: err })
      );
    });
};

export const getPersonalMessages = username => dispatch => {
  dispatch({ type: GETPERSONALMESSAGES.START });

  return fetch(url + "?limit=100&offset=0&username=" + username, {
    method: "GET"
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETPERSONALMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: GETPERSONALMESSAGES.FAIL, payload: err })
      );
    });
};

export const deleteMessages = messageId => (dispatch, getState) => {
  dispatch({ type: DELETEMESSAGES.START });

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEMESSAGES.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: DELETEMESSAGES.FAIL, payload: err })
      );
    });
};
