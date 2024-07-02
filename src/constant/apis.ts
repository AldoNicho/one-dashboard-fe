export const PREFIX = "/api/v1";
export const BASE_URL = "https://one-dashboard-be-784b7694ba8f.herokuapp.com";
export const HEADER_AUTH = {
  Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("token") : ""}`,
};

export const HEADER_AUTH_JSON = {
  Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("token") : ""}`,
  "Content-Type": "application/json",
};
