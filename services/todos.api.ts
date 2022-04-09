// Constants
import URL from "@constants/URL";

// Packages/Dependencies
import axios, { AxiosRequestConfig } from "axios";

enum TodoAPIEndpoints {
  GET_TODOS = "/todos",
  CREATE_TODO = "/todos",
  UPDATE_TODO = "/todos/",
  DELETE_TODO = "/todos/",
}

const todosAPI = {
  getTodos: async () => {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      timeout: 30000,
      timeoutErrorMessage: "An error occurred. Please try again later.",
    };

    return await axios.get(`${URL}${TodoAPIEndpoints.GET_TODOS}`, config);
  },
};

export default todosAPI;
