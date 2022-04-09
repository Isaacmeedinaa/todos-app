// React
import { StyleSheet } from "react-native";

// Styles
import Colors from "@styles/colors.styles";
import Fonts from "@styles/fonts.styles";

const todoFormStyles = StyleSheet.create({
  formContainer: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  titleInputFieldContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  label: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: 18,
    marginLeft: 15,
  },
  titleInput: {
    width: "100%",
    height: 50,
    fontSize: 16,
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 15,
    fontFamily: Fonts.PoppinsRegular,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  descriptionInputFieldContainer: {
    marginTop: 25,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  descriptionInput: {
    width: "100%",
    height: 100,
    fontSize: 16,
    borderRadius: 15,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontFamily: Fonts.PoppinsRegular,
    backgroundColor: Colors.LIGHT_GRAY,
  },
  saveBtn: {
    marginTop: 25,
  },
  errorText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: Fonts.PoppinsRegular,
    color: "#DA012D",
    marginLeft: 15,
  },
});

export default todoFormStyles;
