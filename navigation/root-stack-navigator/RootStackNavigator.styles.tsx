// React
import { StyleSheet } from "react-native";

// Styles
import Colors from "@styles/colors.styles";
import Fonts from "@styles/fonts.styles";

const rootStackNavigatorStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.SCREEN_BG,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 0,
  },
  headerTitle: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 20,
    color: Colors.JET_BLACK,
  },
});

export default rootStackNavigatorStyles;
