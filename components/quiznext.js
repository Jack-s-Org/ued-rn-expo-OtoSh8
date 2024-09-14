import { useState } from "react";
import { Text, Image, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function QuizNext({ page })
{
    let [Down, setDown] = useState(false);

    const OnNext = () => {
        setDown(false);
        switch(page){
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
        }
    };

    
    let activeimg = Down
    ? require("@/assets/quizdown.png")
    : require("@/assets/quizup.png");



return(
    <View style={{width:268,height:70, elevation: 10, shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}, borderRadius:7}}>
        <TouchableOpacity onPressOut={OnNext} onPressIn={ () => {setDown(true)}} activeOpacity={1}>
        <ImageBackground resizeMode="stretch" source={activeimg} style={{width:"100%", height:"100%"}}>
        
        </ImageBackground>
        </TouchableOpacity>

    </View>
)
}

export default QuizNext;