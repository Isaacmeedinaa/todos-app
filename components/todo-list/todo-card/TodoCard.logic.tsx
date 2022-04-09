const TodoCardLogic = (todoId: string) => {
  const onTodoCardPress = () => {
    console.log(todoId);
  };

  return { onTodoCardPress };
};

export default TodoCardLogic;
