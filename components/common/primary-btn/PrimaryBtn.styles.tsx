// React
import { StyleSheet } from "react-native";

// Fonts
import Fonts from "@styles/fonts.styles";

const primaryBtnStyles = StyleSheet.create({
  btn: {
    width: "100%",
    height: 60,
    backgroundColor: "#3B6DE9",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#3B6DE9",
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 18,
  },
});

export default primaryBtnStyles;
