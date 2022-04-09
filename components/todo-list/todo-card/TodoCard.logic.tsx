// Navigation
import { useNavigation, NavigationProp } from "@react-navigation/native";
import RootStackNavigatorParamList from "@navigation/root-stack-navigator/RootStackNavigator.params";
import RootStackNavigatorScreenNames from "@navigation/root-stack-navigator/RootStackNavigator.screen-names";

const TodoCardLogic = (todoId: string) => {
  const { navigate } =
    useNavigation<NavigationProp<RootStackNavigatorParamList>>();

  const onTodoCardPress = () => {
    navigate(RootStackNavigatorScreenNames.TODO, { todoId: todoId });
  };

  return { onTodoCardPress };
};

export default TodoCardLogic;
