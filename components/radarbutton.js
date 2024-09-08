import { useState } from "react";
import { ImageBackground, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function RadarButton({variant}){
    let img;
    let [Down, setDown] = useState(false);

    let ico;
    let icodown;

    switch(variant){
        case 0:
            //fav
            ico = require("@/assets/fav.png");
            icodown = require("@/assets/favdown.png");
            break;
        case 1:
                //chat
                ico = require("@/assets/chat.png");
                icodown = require("@/assets/chatdown.png");
                break;
        case 2:
                    //next
                    ico = require("@/assets/next.png");
                    icodown = require("@/assets/nextdown.png");
                    break;
    }
    
    
    const activeimg = Down
    ? require("@/assets/radar_down.png")
    : require("@/assets/radar_up.png");

    const activeico = Down
    ? icodown
    : ico;


    return(
        <TouchableOpacity onPressIn={() => {setDown(true)}} onPressOut={() => {
            setDown(false)

            switch(variant){
                case 0: //fav
                    break;
                case 1: //chat
                    break;
                case 2: //next
                    break;
            }
        }} activeOpacity={1}>
        <View style={{width: 94, height:54, elevation: 10, shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}, borderRadius:7}}>
            <ImageBackground source={activeimg} style={{width:"100%", height:"100%", justifyContent:"center"}} resizeMode="stretch">
                <View style={{width: 24, height:24, alignSelf:"center"}}>
                    <ImageBackground source={activeico} style={{width:"100%", height:"100%"}} resizeMode="stretch">

                    </ImageBackground>
                </View>
            </ImageBackground>
        </View>
        </TouchableOpacity>
    )
}


export default RadarButton;