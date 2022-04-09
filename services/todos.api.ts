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
  createTodo: async (title: string, description: string) => {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      timeout: 30000,
      timeoutErrorMessage: "An error occurred. Please try again later.",
    };

    const createTodoData = {
      title: title,
      description: description,
    };

    return await axios.post(
      `${URL}${TodoAPIEndpoints.CREATE_TODO}`,
      createTodoData,
      config,
    );
  },
  updateTodo: async (todoId: string, title: string, description: string) => {
    const config: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      timeout: 30000,
      timeoutErrorMessage: "An error occurred. Please try again later.",
    };

    const updateTodoData = {
      title: title,
      description: description,
    };

    return await axios.put(
      `${URL}${TodoAPIEndpoints.UPDATE_TODO}${todoId}`,
      updateTodoData,
      config,
    );
  },
};

export default todosAPI;
