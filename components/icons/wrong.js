import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcoWrong = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#F33"
      d="M2.296 22.96 0 20.664l9.184-9.184L0 2.296 2.296 0l9.184 9.184L20.664 0l2.296 2.296-9.184 9.184 9.184 9.184-2.296 2.296-9.184-9.184z"
    />
  </Svg>
);
export default IcoWrong;