import { Image, ImageBackground, View, Text, PanResponder } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useRef } from "react";
function OptionRoller({text}){



    
  const [slidervalue, setSlidervalue] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const { dy } = gestureState;
        if (dy < 0) {
          console.log(`Dragged Up: ${Math.abs(dy)} units`);
          setSlidervalue((prevValue) => prevValue + Math.abs(dy/10));
          
            // console.log('knobvalue:' + knobvalue.toString());
        } else {
          console.log(`Dragged Down: ${dy} units`);
          setSlidervalue((prevValue) => prevValue - Math.abs(dy/10));
          // console.log('knobvalue:' + knobvalue.toString());
        }
      },
      onPanResponderRelease: (event, gestureState) => {
        const { dy } = gestureState;
        if (dy < 0) {
          console.log('Released after dragging up');
        } else {
          console.log('Released after dragging down');
        }
      }
    })
  ).current;

               
  let activeimg = (slidervalue == 0)
  ? require("@/assets/redlight.png")
  : require("@/assets/greenlight.png");


    return(
        <View style={{display:"flex",flexDirection:"column",rowGap:7}}>
    <Text  style={{fontFamily:"K2D", fontSize:16,color:"#646464"}}>{text}</Text>
    <View style={{display:"flex",flexDirection:"row",columnGap:12,alignItems:"center"}}>
        <View style={{display:"flex",alignItems:"center",width:330,height:78,justifyContent:"center",borderRadius:2}}>
        <LinearGradient colors={['#DCDCDC', '#646464']} style={{width: "100%", height: "100%",display:"flex",alignItems:"center",width:330,height:78,justifyContent:"center",borderRadius:2}}>
        

        <View style={{display:"flex",flexDirection:"row",columnGap:14,paddingHorizontal:14,paddingVertical:15,alignItems:"center",width:328,height:76, backgroundColor:"#A7A7A7",borderRadius:2}}>

            <View  style={{width:215,height:46,borderRadius:4,overflow:"hidden"}}>
            <ImageBackground source={require("@/assets/textroll.png")} style={{width:"100%",height:"100%"}} resizeMode="stretch">
                <View style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Text> {Math.round(slidervalue)} </Text>
                </View>
            </ImageBackground>
            </View>

            <View  style={{width:82,height:66,borderRadius:4,overflow:"hidden"}}   {...panResponder.panHandlers}> 
            <ImageBackground source={require("@/assets/roller.png")} style={{width:"100%",height:"100%"}} resizeMode="stretch">
                
            </ImageBackground>
            </View>

        </View>


        </LinearGradient>
        </View>

        <Image source={activeimg} style={{width:20,height:20}}></Image>
</View>
</View>
    )
}

export default OptionRoller;