import { GETLISTOFUSERS } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  result: null,
  loading: false,
  error: null
};

const getListOfUsers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default withAsyncReducer(GETLISTOFUSERS, getListOfUsers);
