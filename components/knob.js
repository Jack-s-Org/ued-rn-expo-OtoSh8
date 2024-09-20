import { useState } from "react";
import { View, StyleSheet, ImageBackground, Text, PanResponder, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import "@fontsource/k2d";
import { BoxShadow } from 'react-native-shadow';
import { LinearGradient } from "expo-linear-gradient";
import { useRef } from "react";

function Knob({angle, options, maxangle, choices}){

  const [knobvalue, setKnobvalue] = useState(0);
  const [ang, setAng] = useState(0);



  // const rightAngles = [0, 45, 90, 135, 180, 225, 270,315, 360];

  let rightAngles = Array.from({ length: options }, (_, index) => (index) * angle);


  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const { dy } = gestureState;
        setKnobvalue((prevValue) => {
          const newValue = prevValue + (dy < 0 ? Math.abs(dy/10) : -Math.abs(dy/10)); // Adjust based on up or down
          return Math.max(0, Math.min(newValue, maxangle)); // Clamp between 0 and 360
        });
      },
      onPanResponderRelease: (event, gestureState) => {
        setKnobvalue((prevValue) => {
          // Snap to the nearest right angle
          let closestAngle = rightAngles.reduce((prev, curr) =>
            Math.abs(curr - prevValue) < Math.abs(prev - prevValue) ? curr : prev
          );
          return closestAngle;
        });
      },
    })
  ).current;

  const shadowOpt = {
    width: 72,
    height: 72,
    color: "#250900",
    border: 10,
    opacity: 0.65,
    x: 0,
    y: 12,
    style: {
      position: "fixed"
    }
    };

    return(
      <View  style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
      <View style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
        <ImageBackground source={require("@/assets/knobmarker.png")} style={{width:80,height:80,display:"flex", alignItems:"center",justifyContent:"center"}}>
        <View style={styles.knobconcave}  {...panResponder.panHandlers} >
          <LinearGradient colors={['#6F6F6F', '#EAEAEA']} style={{width: "100%", height: "100%", position: "absolute", borderRadius: 100}}>
          </LinearGradient>

          <TouchableOpacity style={{borderRadius: 100}} activeOpacity={1}>
              
          <ImageBackground style={styles.knobimage} source={require("@/assets/knobrim.png")}>
          
          </ImageBackground>
        <View style={styles.knobhole}>
        <View style={styles.knobouter}>
          <ImageBackground style={styles.knobimage} source={require("@/assets/knob_outer.png")}>

          <View style={styles.knobimage_}>
          <ImageBackground style={styles.knobimage} source={require("@/assets/knob_inner.png")} >
          <Image source={require("@/assets/pointer.png")} style={{width:58,height:58, transform: [{ rotate: `${knobvalue}deg` }] }} resizeMode="stretch">

          </Image>
          {/* <Text style={{fontFamily: "K2D", color: "white"}}>
          {Math.round(knobvalue)}
          </Text> */}
          
          </ImageBackground>
          </View>
          

          </ImageBackground>
    
        </View>
        </View>
        </TouchableOpacity>
        </View>
        </ImageBackground>
        </View>

        <ImageBackground source={require("@/assets/smallroller.png")} style={{width:64,height:14,marginVertical:2,borderRadius:2}}>
        <View style={{width:"100%",height:"100%",overflow:"hidden",alignItems:"center",borderRadius:2}}>
          <View style={{width:"100%",height:"100%",alignItems:"center",position:"absolute",top:0,transform: [{ translateY: (Math.round(-knobvalue*14/(angle || 45))) }],}}>

          {choices.map((item, index) => (
        <Text key={index} style={{fontFamily:"K2D",fontSize:8}}>{item}</Text>
      ))}
          </View>
            
        </View>
        </ImageBackground>
        </View>
    );
}




const styles = StyleSheet.create({
  knobconcave: {
    borderRadius: 100,
    width: 72,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  knobhole: {
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },
  knobimage_: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",

    alignItems: "center",
    justifyContent: "center",
  },
    knobimage: {
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    knobouter: {
      borderRadius: 100,
      width: 58,
      height: 58,
      overflow: "hidden",

      alignItems: "center",
      justifyContent: "center",

      backgroundColor: "#250900",
      elevation: 6,
      shadowColor: "#250900",
      shadowOpacity: 0.65,
      shadowRadius: 8,
      shadowOffset: {width: 0, height: 12}
    },
  });

  

  function clamp(value, min, max) {
    if (value < min) {
      return min;
    } else if (value > max) {
      return max;
    } else {
      return value;
    }
  }


export default Knob;