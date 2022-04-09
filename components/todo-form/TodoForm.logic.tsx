// React Redux
import useStateSelector from "@store/hooks/useStateSelector.hook";
import useDispatchAction from "@store/hooks/useDispatchAction.hook";
import { createTodo, updateTodo } from "@store/actions/todos.action-creators";

// Formik
import { useFormik, FormikHelpers } from "formik";

// Yup
import * as Yup from "yup";

// Interfaces
import { ITodoFormFields } from "./TodoForm.interfaces";

const TodoFormLogic = (todoId: string | undefined) => {
  const dispatch = useDispatchAction();

  const todo = useStateSelector((s) =>
    s.todos.todos.find((todo) => todo._id === todoId),
  );

  const todoFormInitialValues: ITodoFormFields = {
    title: todo === undefined ? "" : todo.title,
    description: todo === undefined ? "" : todo.description,
  };

  const todoFormValidations: Yup.SchemaOf<ITodoFormFields> = Yup.object({
    title: Yup.string().required("Please provide a title"),
    description: Yup.string().required("Please provide a description"),
  });

  const onTodoFormSubmit = (
    fields: ITodoFormFields,
    formikHelpers: FormikHelpers<ITodoFormFields>,
  ) => {
    const updatedTodo = todo ? true : false;

    if (updatedTodo) {
      // send update request
      dispatch(updateTodo(todo!._id, fields.title, fields.description));
    } else {
      // send create request
      dispatch(createTodo(fields.title, fields.description));
    }
  };

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: todoFormInitialValues,
      onSubmit: onTodoFormSubmit,
      validationSchema: todoFormValidations,
    });

  return { values, errors, touched, handleBlur, handleSubmit, handleChange };
};

export default TodoFormLogic;
