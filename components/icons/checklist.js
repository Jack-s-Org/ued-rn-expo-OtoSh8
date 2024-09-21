import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IcoChecklist = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={29}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#D55B23"
        d="M8.97 25 4 20.055l1.96-1.95 2.975 2.96 5.95-5.92 1.96 1.984zm0-11.144L4 8.91l1.96-1.95 2.975 2.96L14.885 4l1.96 1.985zm10.43 8.358v-2.786H32v2.786zm0-11.144V8.284H32v2.786z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default IcoChecklist;