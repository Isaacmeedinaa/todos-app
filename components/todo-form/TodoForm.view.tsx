// React
import React from "react";
import { View, Text, TextInput } from "react-native";

// Props
import { ITodoFormProps } from "./TodoForm.interfaces";

// Styles
import todoFormStyles from "./TodoForm.styles";
import Colors from "@styles/colors.styles";

// Logic
import TodoFormLogic from "./TodoForm.logic";

// Enums
import { TodoFormFieldsNames } from "./TodoForm.enums";

// Common Components
import PrimaryBtnView from "@components/common/primary-btn/PrimaryBtn.view";

const TodoFormView: React.FC<ITodoFormProps> = ({ todoId }) => {
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    TodoFormLogic(todoId);

  return (
    <View style={todoFormStyles.formContainer}>
      <View style={todoFormStyles.titleInputFieldContainer}>
        <Text style={todoFormStyles.label}>Title</Text>
        <TextInput
          value={values.title}
          onChangeText={handleChange(TodoFormFieldsNames.TITLE)}
          style={todoFormStyles.titleInput}
          placeholder="Title"
          placeholderTextColor={Colors.DARK_GRAY}
          onBlur={handleBlur(TodoFormFieldsNames.TITLE)}
        />
        {errors.title && touched.title ? (
          <Text style={todoFormStyles.errorText}>{errors.title}</Text>
        ) : null}
      </View>
      <View style={todoFormStyles.descriptionInputFieldContainer}>
        <Text style={todoFormStyles.label}>Description</Text>
        <TextInput
          value={values.description}
          onChangeText={handleChange(TodoFormFieldsNames.DESCRIPTION)}
          style={todoFormStyles.descriptionInput}
          placeholder="Description"
          placeholderTextColor={Colors.DARK_GRAY}
          multiline={true}
          onBlur={handleBlur(TodoFormFieldsNames.DESCRIPTION)}
        />
        {errors.description && touched.description ? (
          <Text style={todoFormStyles.errorText}>{errors.description}</Text>
        ) : null}
      </View>
      <PrimaryBtnView
        customBtnStyles={todoFormStyles.saveBtn}
        btnText="Save"
        onBtnPress={handleSubmit}
      />
    </View>
  );
};

export default TodoFormView;
