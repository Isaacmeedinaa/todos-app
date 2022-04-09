// React
import React from "react";
import { TouchableOpacity, Text } from "react-native";

// Props
import { IPrimaryBtnProps } from "./PrimaryBtn.interfaces";

// Styles
import primaryBtnStyles from "./PrimaryBtn.styles";

const PrimaryBtnView: React.FC<IPrimaryBtnProps> = ({
  btnText,
  onBtnPress,
  customBtnStyles,
}) => {
  return (
    <TouchableOpacity
      style={[primaryBtnStyles.btn, customBtnStyles]}
      onPress={onBtnPress}
      activeOpacity={0.95}>
      <Text style={primaryBtnStyles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryBtnView;
