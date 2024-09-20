import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IcoFunnel = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={29}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#D55B23"
        d="M12.753 25q-.53 0-.888-.377a1.3 1.3 0 0 1-.359-.936v-7.875L4.275 6.1q-.468-.656-.14-1.378Q4.462 4 5.272 4h17.456q.81 0 1.137.722.328.721-.14 1.378l-7.231 9.713v7.874q0 .558-.359.936a1.18 1.18 0 0 1-.888.377zM14 14.894l6.172-8.269H7.828z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default IcoFunnel;