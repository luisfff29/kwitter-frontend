import { domain, handleJsonResponse, jsonHeaders } from "./constants";
import { GETMESSAGES } from "../actionTypes";
import { ADDLIKE } from "../actionTypes";
import { REMOVELIKE } from "../actionTypes";

const url = domain + "/";

export const getMessages = () => dispatch => {
  dispatch({ type: GETMESSAGES.START });

  return fetch(url + "messages", {
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

export const _addLike = messageId => (dispatch, getState) => {
  dispatch({ type: ADDLIKE.START });

  const token = getState().auth.login.result.token;

  return fetch(url + "likes", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ messageId: messageId })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADDLIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: ADDLIKE.FAIL, payload: err }));
    });
};

//chained action creators
//addLike -> getMessages
export const addLike = messageId => (dispatch, getState) => {
  return dispatch(_addLike(messageId)).then(() => dispatch(getMessages()));
};

export const _removeLike = likeId => (dispatch, getState) => {
  dispatch({ type: REMOVELIKE.START });

  const token = getState().auth.login.result.token;

  // eslint-disable-next-line
  return fetch(url + "likes" + "/" + likeId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REMOVELIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: REMOVELIKE.FAIL, payload: err }));
    });
};

//chained action creators
//removeLike -> getPersonalMessages
export const removeLike = likeId => (dispatch, getState) => {
  return dispatch(_removeLike(likeId)).then(() => dispatch(getMessages()));
};
