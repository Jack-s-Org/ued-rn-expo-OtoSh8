import { useState } from "react";
import { ImageBackground, View } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";

function SendButton({variant, activate}){

    let [Down, setDown] = useState(false);



    let activeimg = Down
    ? require("@/assets/senddown.png")
    : require("@/assets/sendup.png");



    return(
        
        <TouchableOpacity onPressIn={() => { 
            setDown(true)
        }} 
            
            onPressOut={() => {

            setDown(false)
        }} activeOpacity={1}>
        <View style={{width: 58, height:58, elevation: 10, shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}, borderRadius:7}}>
            <ImageBackground source={activeimg} style={{width:"100%", height:"100%", justifyContent:"center"}} resizeMode="stretch">
            </ImageBackground>
        </View>
        </TouchableOpacity>
    )
}


export default SendButton;