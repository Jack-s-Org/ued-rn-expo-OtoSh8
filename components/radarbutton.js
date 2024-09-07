import { useState } from "react";
import { ImageBackground, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function RadarButton(){
    let img;
    let [Down, setDown] = useState(false);
    
    const activeimg = Down
    ? require("@/assets/radar_down.png")
    : require("@/assets/radar_up.png");


    return(
        <TouchableOpacity onPressIn={() => {setDown(true)}} onPressOut={() => {setDown(false)}} activeOpacity={1}>
        <View style={{width: 94, height:54}}>
            <ImageBackground source={activeimg} style={{width:"100%", height:"100%"}} resizeMode="stretch">

            </ImageBackground>
        </View>
        </TouchableOpacity>
    )
}

export default RadarButton;