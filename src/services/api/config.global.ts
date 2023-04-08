import axios from "axios";

export const BaseURL = axios.create({
  baseURL: "http://localhost:3000",
});

export const headerAuthorizationConfig = (file: boolean = false) => {
  const token = localStorage?.BRECHO_DA_IT_TOKEN;

  if (!token) {
    return {};
  }

  if (file) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

export function transforObjectInQueryParms(query: object) {
  const array = Object.entries(query);
  return array.join("&").replaceAll(",", "=");
}
