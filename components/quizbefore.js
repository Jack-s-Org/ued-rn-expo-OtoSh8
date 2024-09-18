import { useState } from "react";
import { Text, Image, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function QuizBefore({ page, nav })
{
    const handleBackPress = () => {
        nav.pop();
      };


    let [Down, setDown] = useState(false);

    const OnNext = () => {
        setDown(false);

        switch(page){
            case 0:
                nav.replace("Main", {screen: "MainTabs"})
            break;
            case 1:
                handleBackPress();
                break;
        }
        
    };

    
    let activeimg = Down
    ? require("@/assets/canceldown.png")
    : require("@/assets/cancelup.png");



return(
    <View style={{width:70,height:70,  elevation: 10, shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}, borderRadius:7}}>
        <TouchableOpacity onPressOut={OnNext} onPressIn={ () => {setDown(true)}} activeOpacity={1}>
        <ImageBackground resizeMode="stretch" source={activeimg} style={{width:"100%", height:"100%"}}>
        
        </ImageBackground>
        </TouchableOpacity>
    </View>
)
}

export default QuizBefore;