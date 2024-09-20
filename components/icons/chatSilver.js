import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const IcoChatSilver = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={27}
    fill="none"
    {...props}
  >
    <Path
      fill="#313131"
      stroke="url(#a)"
      d="m1.354 24.354-.854.853V3.3c0-.766.279-1.434.822-1.978A2.71 2.71 0 0 1 3.3.5h18.4c.766 0 1.435.279 1.978.822.543.544.822 1.212.822 1.978v13.8c0 .766-.279 1.435-.822 1.978a2.71 2.71 0 0 1-1.978.822H5.807zm2.919-7.611.146-.143H21.2V3.8H3.8v13.405z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={12.5}
        x2={12.5}
        y1={1}
        y2={24}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.382} stopColor="#646464" />
        <Stop offset={1} stopColor="#DCDCDC" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default IcoChatSilver;