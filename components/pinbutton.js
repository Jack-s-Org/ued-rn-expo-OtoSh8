import { useState } from "react";
import { ImageBackground, View } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";

function PinButton({variant, activate, nav}){

    let [Down, setDown] = useState(false);



    let activeimg = Down
    ? require("@/assets/pindown.png")
    : require("@/assets/pinup.png");



    return(
        
        <TouchableOpacity onPressIn={() => { 
            setDown(true)
        }} 
            
            onPressOut={() => {

            setDown(false)
            if(activate == true){
                nav.navigate("Share");
            }
        }} activeOpacity={1}>
        <View style={{width: 58, height:58, elevation: 10, shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}, borderRadius:7}}>
            <ImageBackground source={activeimg} style={{width:"100%", height:"100%", justifyContent:"center"}} resizeMode="stretch">
            </ImageBackground>
        </View>
        </TouchableOpacity>
    )
}


export default PinButton;