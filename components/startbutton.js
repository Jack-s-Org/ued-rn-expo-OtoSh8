import { useState } from "react";
import { ImageBackground, View } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";

function StartButton({func, nav}){

    let [Down, setDown] = useState(false);



    let activeimg = Down
    ? require("@/assets/startdown.png")
    : require("@/assets/startup.png");



    return(
        
        <TouchableOpacity onPressIn={() => { 
            setDown(true)
        }} 
            
            onPressOut={() => {

            setDown(false);
            nav.push("Cooking");
            
        }} activeOpacity={1}>

        <View style={{width: 160, height:160, elevation: 10, shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}, borderRadius:100}}>
            <ImageBackground source={activeimg} style={{width:"100%", height:"100%", justifyContent:"center"}} resizeMode="stretch">
            </ImageBackground>
        </View>
        </TouchableOpacity>
    )
}


export default StartButton;