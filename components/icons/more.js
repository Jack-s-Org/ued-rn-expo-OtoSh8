import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IcoMore = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={31}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#D55B23"
        d="M7 26.35a2.61 2.61 0 0 1-1.916-.798 2.61 2.61 0 0 1-.796-1.915q0-1.12.796-1.916A2.61 2.61 0 0 1 7 20.925q1.119 0 1.915.796.797.797.797 1.916t-.797 1.915A2.61 2.61 0 0 1 7 26.35m0-8.138a2.61 2.61 0 0 1-1.916-.796 2.61 2.61 0 0 1-.796-1.916q0-1.119.796-1.915A2.61 2.61 0 0 1 7 12.788q1.119 0 1.915.797.797.796.797 1.915t-.797 1.916A2.61 2.61 0 0 1 7 18.212m0-8.137a2.61 2.61 0 0 1-1.916-.796 2.61 2.61 0 0 1-.796-1.916q0-1.119.796-1.915A2.61 2.61 0 0 1 7 4.65q1.119 0 1.915.797.797.796.797 1.915 0 1.12-.797 1.916A2.61 2.61 0 0 1 7 10.075"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default IcoMore;