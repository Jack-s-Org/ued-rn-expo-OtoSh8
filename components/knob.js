import { View, StyleSheet } from "react-native";

function Knob(){
    return(
        <View style={styles.knobouter}></View>
    );
}


const styles = StyleSheet.create({
    knobouter: {
      backgroundColor: "red",
      borderRadius: 100,
      
    },
  });

  
export default Knob;