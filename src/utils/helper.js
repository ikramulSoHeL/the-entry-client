import { delStorage } from "./persistLocalStorage";

export const isAuthenticated = (user) => {
  if (user && user.id) {
    return true;
  }
  return false;
};

export const logout = (navigate) => {
  delStorage("user");
  delStorage("accessToken");
  delStorage("refreshToken");
  navigate("/");
};
