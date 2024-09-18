import { Image, ImageBackground, View, Text, PanResponder } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useRef } from "react";
function OptionRoller({text,options}){



    
  const [slidervalue, setSlidervalue] = useState(0);


  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const { dy } = gestureState;
        setSlidervalue((prevValue) => {
          const newValue = prevValue + (dy < 0 ? Math.abs(dy/20) : -Math.abs(dy/20)); // Adjust based on up or down
          return Math.max(0, Math.min(newValue, ((options.length-1)*46))); // Clamp between 0 and 360
        });
      },
      onPanResponderRelease: (event, gestureState) => {
        setSlidervalue((prevValue) => {
          // Snap to the nearest right angle
          const rightAngles = [0, 46, 92, 138, 184, 230, 276,315, 360];
          let closestAngle = rightAngles.reduce((prev, curr) =>
            Math.abs(curr - prevValue) < Math.abs(prev - prevValue) ? curr : prev
          );
          return closestAngle;
        });
      },
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
        <LinearGradient colors={['#DCDCDC', '#646464']} style={{width: "100%", height: "100%",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:2}}>
        

        <View style={{display:"flex",flexDirection:"row",columnGap:14,paddingHorizontal:14,paddingVertical:15,alignItems:"center",width:328,height:76, backgroundColor:"#A7A7A7",borderRadius:2}}>

            <View  style={{width:215,height:46,borderRadius:4,overflow:"hidden"}}>
            <ImageBackground source={require("@/assets/textroll.png")} style={{width:"100%",height:"100%"}} resizeMode="stretch">
                <View style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
        {/* <Text> {Math.round(slidervalue)} </Text> */}
        <View style={{transform: [{ translateY: Math.round(-slidervalue) }],fontSize:20,fontFamily:"K2D",alignItems:"center",paddingVertical:13,display:"flex",flexDirection:"column",rowGap:26,position:"absolute",top:0}}>
        
        {options.map((item, index) => (
        <Text key={index} style={{fontFamily:"K2D",fontSize:20,marginVertical:-8}}>{item}</Text>
      ))}

        {/* <Text style={{fontFamily:"K2D",fontSize:20,marginVertical:-8}}>{options[0]}</Text>
        <Text style={{fontFamily:"K2D",fontSize:20,marginVertical:-8}}>{options[1]}</Text>
        <Text  style={{fontFamily:"K2D",fontSize:20,marginVertical:-8}}>{options[2]}</Text>
        <Text style={{fontFamily:"K2D",fontSize:20,marginVertical:-8}}>{options[3]}</Text>
        <Text style={{fontFamily:"K2D",fontSize:20,marginVertical:-8}}>{options[4]}</Text>
        <Text  style={{fontFamily:"K2D",fontSize:20,marginVertical:-8}}>{options[5]}</Text> */}

        </View>
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