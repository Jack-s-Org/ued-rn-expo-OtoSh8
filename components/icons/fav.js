import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IcoFav = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={29}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#D55B23"
        d="m9.899 8.863 2.936-4.006q.315-.443.747-.65a2.07 2.07 0 0 1 1.81 0q.432.207.747.65l2.936 4.006 4.457 1.575q.682.222 1.075.815.393.594.393 1.313 0 .33-.092.663a2.1 2.1 0 0 1-.301.636l-2.884 4.31.105 4.532q.026.966-.603 1.63-.63.663-1.468.663-.053 0-.577-.083l-4.693-1.382-4.693 1.382a1 1 0 0 1-.288.07 3 3 0 0 1-.289.013q-.839 0-1.468-.663-.63-.663-.603-1.63l.105-4.56-2.858-4.282a2.1 2.1 0 0 1-.301-.636A2.5 2.5 0 0 1 4 12.566q0-.69.38-1.285a2.06 2.06 0 0 1 1.062-.843z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default IcoFav;