import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IcoMenu = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={34}
    fill="none"
    {...props}
  >
    <G fill="#D55B23" filter="url(#a)">
      <Path d="M13.864 20.212q-2.034 0-3.483-1.438t-1.449-3.456 1.449-3.457 3.483-1.437q2.034 0 3.483 1.437t1.449 3.457-1.449 3.456-3.483 1.438M4 30v-3.426q0-1.04.54-1.912a3.6 3.6 0 0 1 1.433-1.33 18.4 18.4 0 0 1 3.884-1.423 17 17 0 0 1 4.007-.474q2.034 0 4.007.474 1.973.475 3.884 1.423.894.46 1.434 1.33.54.873.539 1.912V30zM19.457 17.918c.38-.793.572-1.664.572-2.6q0-.716-.149-1.377H40.76v3.977zM24.15 23.882l.09.14a4.8 4.8 0 0 1 .72 2.552v1.285H40.76v-3.977zM11.63 4v3.976h29.129V4z" />
    </G>
    <Defs></Defs>
  </Svg>
);
export default IcoMenu;