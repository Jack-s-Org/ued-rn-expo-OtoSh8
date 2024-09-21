import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IcoExit = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#D55B23"
        d="M6.889 30a2.78 2.78 0 0 1-2.04-.849A2.78 2.78 0 0 1 4 27.111v-5.778h2.889v5.778H27.11V6.89H6.89v5.778H4V6.889q0-1.193.849-2.04A2.78 2.78 0 0 1 6.889 4H27.11q1.193 0 2.04.849.849.848.849 2.04V27.11q0 1.193-.849 2.04a2.78 2.78 0 0 1-2.04.849zm7.944-5.778-2.022-2.094 3.683-3.684H4v-2.888h12.494l-3.683-3.684 2.022-2.094L22.056 17z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default IcoExit;