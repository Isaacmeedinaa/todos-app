// React
import { StyleSheet } from "react-native";

// Colors
import Colors from "@styles/colors.styles";
import Fonts from "@styles/fonts.styles";

const todoScreenStyles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.SCREEN_BG,
    flex: 1,
  },
  container: {
    marginTop: 25,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  editBtn: {
    marginTop: 25,
  },
  deleteText: {
    marginTop: 15,
    fontSize: 18,
    fontFamily: Fonts.PoppinsMedium,
    color: "#DA012D",
  },
});

export default todoScreenStyles;
