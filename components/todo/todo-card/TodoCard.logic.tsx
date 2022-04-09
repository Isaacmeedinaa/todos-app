// React Redux
import useStateSelector from "@store/hooks/useStateSelector.hook";

const TodoCardLogic = (todoId: string) => {
  const todo = useStateSelector((s) =>
    s.todos.todos.find((todo) => todo._id === todoId),
  );

  return { todo };
};

export default TodoCardLogic;
