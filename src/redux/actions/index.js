import { SET_USER } from "../../constants/actionTypes";

export const setUser = userInfo => (
    {
        type: SET_USER,
        userInfo
    }
)