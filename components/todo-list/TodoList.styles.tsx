// React
import Colors from "@styles/colors.styles";
import Fonts from "@styles/fonts.styles";
import { StyleSheet } from "react-native";

const todoListStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  header: {
    alignSelf: "flex-start",
    fontFamily: Fonts.PoppinsBold,
    fontSize: 30,
    color: Colors.JET_BLACK,
    marginTop: 25,
  },
  flatList: {
    width: "100%",
  },
});

export default todoListStyles;
