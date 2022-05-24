import { Types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.login:
      return {
        ...action.payload
      }
  
    default:
      return state
  }
}