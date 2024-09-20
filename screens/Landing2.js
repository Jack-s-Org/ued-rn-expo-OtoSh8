import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";
import LandingButton from "@/components/landingbutton";
import { TouchableOpacity, GestureHandlerRootView } from "react-native-gesture-handler";

function LandingTwo({navigation}){
    
    const Skip = () => {
        navigation.replace("Main", {screen: "MainTabs"})
    }


    return(
        <View style={{width:"100%", height:"100%"}}>
        <ImageBackground style={{width:"100%", height:"100%", position:"absolute"}} source={require("@/assets/landingbg2.png")}>
        </ImageBackground>

        <GestureHandlerRootView>
        <SafeAreaView style={styles.container}>

            <View style={{width:"100%",display:"flex",flexDirection:"row-reverse"}}>
        <TouchableOpacity onPress={Skip}>
            <Text style={{fontFamily:"K2D", fontSize:16, fontWeight:500, color:"white"}}>Skip</Text>
            </TouchableOpacity>
        </View>

        <Image source={require("@/assets/radar3d.png")} style={{width:597,height:382,position:"absolute",top:96}} resizeMode="stretch"></Image>

        <View style={{display:"flex",flexDirection:"column", rowGap:12, paddingBottom:24}}>
            <View style={{paddingBottom:14}}>
            <Text style={{fontFamily:"K2DBOLD",lineHeight: 40, fontSize:40, color:"white",marginBottom: 8}}>Find Other Rogue{"\n"}Homecooks</Text>
            <Text style={{fontFamily:"K2D", fontSize:15, fontWeight:500, color:"white"}}>Find and Squad up with other homecooks {"\n"}in your vicinity and cook together!</Text>
            </View>

            <View style={{display:"flex",flexDirection:"row", columnGap:6, alignSelf:'center'}}>
            <View style={{width:50,height:6,backgroundColor:"#F45F16", elevation: 5, shadowColor: "#000000", shadowOpacity: 0.60, shadowRadius: 3, shadowOffset: {width: 0, height: 2}, borderRadius:12}}></View>
            <View style={{width:26,height:6,backgroundColor:"white", elevation: 5, shadowColor: "#000000", shadowOpacity: 0.60, shadowRadius: 3, shadowOffset: {width: 0, height: 2}, borderRadius:12}}></View>
            <View style={{width:26,height:6,backgroundColor:"white", elevation: 5, shadowColor: "#000000", shadowOpacity: 0.60, shadowRadius: 3, shadowOffset: {width: 0, height: 2}, borderRadius:12}}></View>
            </View>

            <LandingButton nav={navigation} page={3}></LandingButton>
        </View>
        </SafeAreaView>
        </GestureHandlerRootView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: -20,
      display: "flex",
      flexDirection: "column",
      flex: 1,
      alignItems: "center",
      rowGap: 18,
      paddingHorizontal: 24,
      justifyContent:"space-between",
    },
  });
export default LandingTwo;