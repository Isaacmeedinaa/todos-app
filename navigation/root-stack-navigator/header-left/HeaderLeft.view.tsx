// React
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

// SVGs
import BackArrowSVG from "@assets/svgs/BackArrowSVG";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";

interface IHeaderLeftProps {
  onPress: (() => void) | undefined;
}

const HeaderLeftView: React.FC<IHeaderLeftProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.backBtnContainer}
      activeOpacity={0.95}>
      <BackArrowSVG />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backBtnContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
});

export default HeaderLeftView;
