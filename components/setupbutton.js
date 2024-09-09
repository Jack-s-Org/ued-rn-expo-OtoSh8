import { ImageBackground, View } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function SetupButton(){
    let [Down, setDown] = useState(false);

    const activeimg = Down
    ? require("@/assets/setupdown.png")
    : require("@/assets/setupup.png");


    return(
        <TouchableOpacity onPressIn={() => {setDown(true)}} onPressOut={() => {setDown(false)}} activeOpacity={1}>
        <View style={{width: 54, height: 54, borderRadius: 7,shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}}}>
            <ImageBackground source={activeimg} style={{width:"100%", height: "100%"}}></ImageBackground>
        </View>
        </TouchableOpacity>
    )
}
export default SetupButton;