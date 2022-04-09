// React
import { StyleSheet } from "react-native";

// Fonts
import Fonts from "@styles/fonts.styles";

//
import Colors from "@styles/colors.styles";

const todoCardStyles = StyleSheet.create({
  card: {
    marginTop: 25,
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,
  },
  todoTitle: {
    fontFamily: Fonts.PoppinsSemiBold,
    color: Colors.JET_BLACK,
    fontSize: 22,
  },
  todoDescription: {
    marginTop: 3,
    color: Colors.DARK_GRAY,
    fontSize: 16,
    fontFamily: Fonts.PoppinsRegular,
  },
});

export default todoCardStyles;
