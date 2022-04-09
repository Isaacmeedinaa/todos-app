import { StyleProp, ViewStyle } from "react-native";

export interface IPrimaryBtnProps {
  btnText: string;
  onBtnPress: () => void;
  customBtnStyles?: StyleProp<ViewStyle>;
}
