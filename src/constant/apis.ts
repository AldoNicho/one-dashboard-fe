export const PREFIX = "/api/v1";
export const BASE_URL =
  "https://my-one-dashboard-be-4a28e29e76c3.herokuapp.com";
export const HEADER_AUTH = {
  Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("token") : ""}`,
};

export const HEADER_AUTH_JSON = {
  Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("token") : ""}`,
  "Content-Type": "application/json",
};
