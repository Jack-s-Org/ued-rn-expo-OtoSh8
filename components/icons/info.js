import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const IcoInfo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#D55B23"
        d="M16.6 25h2.8v-8.4h-2.8zM18 13.8q.596 0 .997-.402.403-.403.403-.998 0-.596-.402-.998A1.36 1.36 0 0 0 18 11q-.596 0-.997.402-.403.403-.403.998 0 .596.402.998.403.402.998.402M18 32q-2.906 0-5.46-1.102a14.1 14.1 0 0 1-4.445-2.993 14.1 14.1 0 0 1-2.993-4.445Q4 20.906 4 18t1.103-5.46a14.1 14.1 0 0 1 2.992-4.445 14.1 14.1 0 0 1 4.445-2.993Q15.094 4 18 4t5.46 1.103a14.1 14.1 0 0 1 4.445 2.992 14.1 14.1 0 0 1 2.992 4.445Q32.002 15.094 32 18q0 2.906-1.102 5.46a14.1 14.1 0 0 1-2.993 4.445 14.1 14.1 0 0 1-4.445 2.992Q20.906 32.002 18 32m0-2.8q4.69 0 7.945-3.255T29.2 18t-3.255-7.945T18 6.8t-7.945 3.255T6.8 18t3.255 7.945T18 29.2"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default IcoInfo;