import { loginSucess, loginFailure, loginStart } from "./AuthAction";
import axios from "axios";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSucess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
