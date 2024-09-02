import { View, StyleSheet, ImageBackground } from "react-native";

function Knob(){
    return(
      

        <View style={styles.knobouter}>
          <ImageBackground style={styles.knobimage} source={require("@/assets/knob_outer.png")}>

          <View style={styles.knobimage_} >
          <ImageBackground style={styles.knobimage} source={require("@/assets/knob_inner.png")}></ImageBackground>
          </View>
          

          </ImageBackground>
    
        </View>
    );
}


const styles = StyleSheet.create({
  knobimage_: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",

    alignItems: "center",
      justifyContent: "center",
  },
    knobimage: {
      width: "100%",
      height: "100%",

      alignItems: "center",
      justifyContent: "center",
    },
    knobouter: {
      borderRadius: 100,
      width: 58,
      height: 58,
      overflow: "hidden",

      alignItems: "center",
      justifyContent: "center",

      shadowColor: "#250900",
      shadowOpacity: 0.65,
      shadowRadius: 8,
      shadowOffset: {width: 0, height: 12}
    },
  });

  
export default Knob;