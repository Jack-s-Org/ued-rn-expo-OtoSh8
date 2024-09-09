import { ImageBackground, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import RadarButton from "@/components/radarbutton";
import SetupButton from "@/components/setupbutton";

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: "100%", paddingHorizontal: 26}}>
      <Text style={{fontFamily: "K2D", fontSize: 20, marginBottom: 22, alignSelf: "flex-start"}}>Homecook Radar</Text>
      </View>

<View style={{width: 338, height:498, borderRadius: 14, overflow:"hidden", alignItems:"center", justifyContent:"space-evenly"}}>



      <View style={{width: "100%", height:"100%", borderRadius: 14, overflow:"hidden", position:"absolute"}}>
      <LinearGradient
        colors={['#606060', '#EAEAEA']}
        style={{width:"100%", height: "100%"}}
      />
      </View>

      <View style={{width: 334, height:494, borderRadius: 12, overflow:"hidden", position:"absolute"}}>
      <LinearGradient
        colors={['#6F6F6F', '#D2D2D2']}
        style={{width:"100%", height: "100%"}}
      />
      </View>

      <View style={{width: 310, height:470, borderRadius: 12, overflow:"hidden", position:"absolute"}}>
        <ImageBackground source={require("@/assets/screen.png")} style={{width:"100%",height:"100%"}} resizeMode="stretch"></ImageBackground>
      </View>
      </View>

        
      <View style={{ backgroundColor:"#171717", padding: 2, borderRadius: 9, display: "flex", flexDirection:"row", columnGap:2, marginTop: 48}}>
      <SetupButton></SetupButton>
      <RadarButton variant={0}></RadarButton>
      <RadarButton variant={1}></RadarButton>
      <RadarButton variant={2}></RadarButton>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: -20,
    backgroundColor: "#A7A7A7",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
  },
});

export default DiscoverScreen;
