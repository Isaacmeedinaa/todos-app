import Colors from "@styles/colors.styles";
import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BackArrowSVG = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      d="m15.25 25-9-9 9-9M7.5 16h18.25"
      stroke={Colors.JET_BLACK}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackArrowSVG;
