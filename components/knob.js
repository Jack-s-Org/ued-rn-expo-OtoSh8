import { useState } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import "@fontsource/k2d";
import { BoxShadow } from 'react-native-shadow';


function Knob(){
  const [knobvalue, setKnobvalue] = useState(0);
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
      
        <View style={styles.knobconcave}>
          

          <TouchableOpacity style={{borderRadius: 100}} activeOpacity={1} onPressIn={() => {

            setKnobvalue(knobvalue+1);
            }}>
              
          <ImageBackground style={styles.knobimage} source={require("@/assets/knobrim.png")}>
          
          </ImageBackground>
        <View style={styles.knobhole}>
        <View style={styles.knobouter}>
          <ImageBackground style={styles.knobimage} source={require("@/assets/knob_outer.png")}>

          <View style={styles.knobimage_}>
          <ImageBackground style={styles.knobimage} source={require("@/assets/knob_inner.png")} >
          
          <Text style={{fontFamily: "K2D", color: "white"}}>
          {knobvalue}
          </Text>
          
          </ImageBackground>
          </View>
          

          </ImageBackground>
    
        </View>
        
        </View>
        
        </TouchableOpacity>
        

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
      // shadowColor: "#250900",
      // shadowOpacity: 0.65,
      // shadowRadius: 8,
      // shadowOffset: {width: 0, height: 12}
    },
  });

  
export default Knob;