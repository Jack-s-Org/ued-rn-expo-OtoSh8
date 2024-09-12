import { ImageBackground, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function SbsButton(){

    let [Down, setDown] = useState(false);

    const activeimg = Down
    ? require("@/assets/sbsdown.png")
    : require("@/assets/sbs.png");


return(
    <TouchableOpacity activeOpacity={1} onPressIn={() => {setDown(true)}} onPressOut={() => {setDown(false)}}>
    <View style={{alignItems:"center", display:"flex", flexDirection:"column", rowGap:4}}>
        
    <View style={{width:92, height: 92, alignItems: "center",justifyContent:"center",borderRadius:100}}>
                  <LinearGradient colors={['#6F6F6F', '#EAEAEA']} style={{width: "100%", height: "100%", position: "absolute", borderRadius: 100}}>
                  </LinearGradient>

    <View style={{width:76, height: 76, backgroundColor:"#212121", display:"flex", alignItems:"center", justifyContent:"center",borderRadius:100}}>
    <View style={{width:72, height: 72, borderRadius:100, elevation: 10, shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}}}>
        <ImageBackground style={{width:"100%", height: "100%"}} source={activeimg}></ImageBackground>
    </View>
    </View>
    </View>
    
    <Text style={{fontFamily:"K2D", fontSize:10, fontWeight:400, color:"#646464", textAlign:"center"}}>Step-by-step{"\n"}Mode</Text>
    </View>
    </TouchableOpacity>
)
}

export default SbsButton;