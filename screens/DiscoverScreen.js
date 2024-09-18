import { ImageBackground, StyleSheet, Text } from "react-native";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import RadarButton from "@/components/radarbutton";
import SetupButton from "@/components/setupbutton";
import IcoRadar from "@/components/icons/radar";
import IcoSquad from "@/components/icons/squad";
import IcoChat from "@/components/icons/chat";
import { GestureHandlerRootView

 } from "react-native-gesture-handler";
const DiscoverScreen = ({navigation}) => {
  return (
    <GestureHandlerRootView>
    <SafeAreaView style={styles.container}>
      <View style={{width: "100%", paddingHorizontal: 26, display:"flex",flexDirection:"row", columnGap:10, justifyContent:"space-between"}}>
      <View style={{display:"flex",flexDirection:"row", columnGap:10, marginBottom:16}}>
        <IcoRadar></IcoRadar>
      <Text style={{fontFamily: "K2D", fontSize: 20,textAlignVertical:"center" ,alignSelf: "flex-start"}}>Homecook Radar</Text>
      </View>

      <View style={{display:"flex",flexDirection:"row", columnGap:20, alignItems:"flex-start", paddingTop: 6}}>
        <IcoSquad></IcoSquad>
        <IcoChat></IcoChat>
        </View>
      </View>

<View style={{width: 338, height:498, borderRadius: 14, overflow:"hidden", alignItems:"center", justifyContent:"center"}}>



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
      
      <View style={{width: 310, height:470, borderRadius: 12, overflow:"hidden"}}>
        <ImageBackground source={require("@/assets/screen.png")} style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}} resizeMode="stretch">
        <Image source={require("@/assets/errorpfp.png")}  style={{width: 196, height:170,marginBottom:32}}></Image>
        </ImageBackground>
      </View>

    </View>

        
      <View style={{ backgroundColor:"#171717", padding: 2, borderRadius: 9, display: "flex", flexDirection:"row", columnGap:2, marginTop: 48}}>
      <SetupButton nav={navigation}></SetupButton>
      <RadarButton activate={false} variant={0}></RadarButton>
      <RadarButton activate={false}  variant={1}></RadarButton>
      <RadarButton activate={false}  variant={2}></RadarButton>
      </View>


    </SafeAreaView>
    </GestureHandlerRootView>
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
