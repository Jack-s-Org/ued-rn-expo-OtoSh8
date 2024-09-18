import { ImageBackground, View, Text } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function Switcher({variant}){
    let imgup = null;
    let imgdown = null;
    let label = "";
    const [Down, setDown] = useState(false);
    
    switch(variant){
        case 0:
            imgup = require("@/assets/switchon.png");
            imgdown = require("@/assets/switchoff.png");
            label = "Cleanup Assistant";
            break;
        case 1:
            imgup = require("@/assets/measureup.png");
            imgdown = require("@/assets/measuredown.png");
            label = "Measurement";
            break;
    }

    let activeimg = Down
    ? imgup
    : imgdown;

    return(
        <View style={{alignItems:"center"}}>
        <TouchableOpacity onPress={() => {setDown(!Down)}} activeOpacity={1}>
        <View style={{width:87,height:54}}>
            <ImageBackground source={activeimg} style={{width:"100%",height:"100%"}} resizeMode="stretch"></ImageBackground>
        </View>
        </TouchableOpacity>
        <Text style={{fontFamily:"K2D",fontSize:8,color:"#646464",marginTop:-8}}>{label}</Text>
        </View>
    )
}
export default Switcher;