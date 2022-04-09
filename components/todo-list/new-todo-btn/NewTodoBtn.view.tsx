// React
import React from "react";
import { TouchableOpacity, Text } from "react-native";

// Safe Area
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Logic
import NewNoteBtnLogic from "./NewTodoBtn.logic";

// Styles
import newTodoBtnStyles from "./NewTodoBtn.styles";

const NewTodoBtnView: React.FC = () => {
  const { onNewTodoBtnPress } = NewNoteBtnLogic();
  const { bottom } = useSafeAreaInsets();

  return (
    <TouchableOpacity
      style={[newTodoBtnStyles.btn, { marginBottom: bottom > 0 ? 0 : 15 }]}
      onPress={onNewTodoBtnPress}
      activeOpacity={0.95}>
      <Text style={newTodoBtnStyles.btnText}>Add New Note</Text>
    </TouchableOpacity>
  );
};

export default NewTodoBtnView;
