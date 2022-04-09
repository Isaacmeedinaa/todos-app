// React
import { Alert } from "react-native";

// React Redux
import useDispatchAction from "@store/hooks/useDispatchAction.hook";
import { deleteTodo } from "@store/actions/todos.action-creators";

// Navigation
import { useNavigation, NavigationProp } from "@react-navigation/native";
import RootStackNavigatorParamList from "@navigation/root-stack-navigator/RootStackNavigator.params";
import RootStackNavigatorScreenNames from "@navigation/root-stack-navigator/RootStackNavigator.screen-names";

const TodoScreenLogic = (todoId: string) => {
  const dispatch = useDispatchAction();

  const { navigate } =
    useNavigation<NavigationProp<RootStackNavigatorParamList>>();

  const onEditPress = () => {
    navigate(RootStackNavigatorScreenNames.TODO_FORM, { todoId: todoId });
  };

  const onDeletePress = () => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      {
        text: "Yes",
        onPress: () => dispatch(deleteTodo(todoId)),
        style: "destructive",
      },
      {
        text: "Cancel",
      },
    ]);
  };

  return { onEditPress, onDeletePress };
};

export default TodoScreenLogic;
