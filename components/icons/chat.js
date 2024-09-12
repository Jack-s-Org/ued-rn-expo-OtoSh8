import * as React from "react";
import Svg, { Path } from "react-native-svg";
const IcoChat = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#717171"
      d="m.635 19.5 3.8-3.8h13.3q.784 0 1.342-.558a1.83 1.83 0 0 0 .558-1.342V2.4q0-.784-.558-1.342A1.83 1.83 0 0 0 17.735.5h-15.2q-.784 0-1.342.558A1.83 1.83 0 0 0 .635 2.4zm17.1-5.7H3.627l-1.092 1.069V2.4h15.2z"
    />
  </Svg>
);
export default IcoChat;