import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IcoRead = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={16}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#D55B23"
        d="M8.267 12.008 4.5 8.242l.95-.934 3.767 3.767zm3.766 0L8.267 8.242l.933-.95 2.833 2.833 6.134-6.133.933.95zm0-3.766-.95-.934 3.3-3.3.95.934z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default IcoRead;