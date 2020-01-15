const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
export const GETUSER = createActionTypes("GETUSER");
export const GETLISTOFUSERS = createActionTypes("GETLISTOFUSERS");
export const GETMESSAGES = createActionTypes("GETMESSAGES");
export const CREATEMESSAGE = createActionTypes("CREATEMESSAGE");
export const GETPERSONALMESSAGES = createActionTypes("GETPERSONALMESSAGES");
export const DELETEMESSAGES = createActionTypes("DELETEMESSAGES");
export const ADDLIKE = createActionTypes("ADDLIKE");
export const REMOVELIKE = createActionTypes("REMOVELIKE");
