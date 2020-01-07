import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER } from "../actionTypes";

const url = domain + "/users";

export const getUser = username => dispatch => {
    dispatch({ type: GETUSER.START })

    return fetch(url + "/" + username, {
        method: "GET",
        headers: jsonHeaders
    }).then(handleJsonResponse).then(result => {
        return dispatch ({
            type: GETUSER.SUCCESS,
            payload: result
        });
    }).catch(err => {
        return Promise.reject(dispatchEvent({ type:
        GETUSER.FAIL, payload: err}))
    })
};