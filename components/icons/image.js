import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcoImage = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#646464"
      d="M19.556 22q1.008 0 1.726-.718A2.35 2.35 0 0 0 22 19.556V2.444q0-1.008-.718-1.726A2.35 2.35 0 0 0 19.556 0H2.444Q1.436 0 .718.718A2.35 2.35 0 0 0 0 2.444v17.112q0 1.008.718 1.726A2.35 2.35 0 0 0 2.444 22zm0-2.444H2.444V2.444h17.112zm-1.223-2.445H3.667L8.25 11l3.667 4.889 2.75-3.667z"
    />
  </Svg>
);
export default IcoImage;