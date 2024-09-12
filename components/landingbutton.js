import { ImageBackground, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
function LandingButton({nav, page}){
    let [Down, setDown] = useState(false);

    let activeimg = Down
    ? require("@/assets/landingbuttondown.png")
    : require("@/assets/landingbuttonup.png");



    return(
        
        <View style={{width:344, height:74, backgroundColor:"#212121", alignItems:'center', justifyContent:"center", borderRadius:71, elevation: 10, shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}}}>
        <TouchableOpacity activeOpacity={1} onPressIn={() => {setDown(true)}} onPressOut={() => {setDown(false);

        switch(page){
            case 1:
                nav.replace("Main", {screen: "MainTabs"})
                break;
            case 2:
                nav.push("Landing2")
                break;
            case 3:
                nav.push("Landing3")
                break;
        
        }

        }}>
        <View style={{width:340, height:70}}>
            <ImageBackground style={{width:"100%", height:"100%"}} source={activeimg}>

            </ImageBackground>
        </View>
        </TouchableOpacity>
        </View>
    )
}

export default LandingButton;