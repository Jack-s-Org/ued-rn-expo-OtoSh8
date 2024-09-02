import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";

const IcoFilter = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#6C6C6C"
        d="M18.06 10h-5.88V8h1.96V0h1.96v8h1.96zm-1.96 8h-1.96v-6h1.96zm-3.92-4h-1.96v4H8.258v-4H6.3v-2h5.88zm-1.96-4H8.258V0h1.96zM6.298 6H.419V4h1.96V0h1.96v4h1.96zm-1.96 12h-1.96V8h1.96z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default IcoFilter;