import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";
import LandingButton from "@/components/landingbutton";
import { TouchableOpacity, GestureHandlerRootView } from "react-native-gesture-handler";
import PfpContainer from "@/components/pfp";
import CardContainer from "@/components/cardcontainer";
import QuizNext from "@/components/quiznext";
import QuizBefore from "@/components/quizbefore";
import TextBox from "@/components/textbox";
import TextBoxBig from "@/components/textboxbig";
import OptionRoller from "@/components/optionroller";
import { LinearGradient } from 'expo-linear-gradient';


function QuizFour({navigation}){
    return(
        
        <GestureHandlerRootView>

        <SafeAreaView style={styles.container}>

          <View style={styles.container2}>
        <Text style={{fontFamily: "K2D", fontSize: 20, textAlignVertical:"center"}}>Step 4 of 4</Text>

        <Text  style={{fontFamily:"K2D", fontSize:14,color:"#646464",alignSelf:"flex-start",marginBottom:-8,marginTop:32}}>PROFILE PREVIEW:</Text>
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


        </View>

        <View style={{position:"absolute",bottom: 20}}>

        <View style={{display:"flex",paddingHorizontal:2,paddingVertical:2,backgroundColor:"#161616", borderRadius:9,flexDirection:"row", columnGap:2,position:"relative"}}>
        <QuizBefore nav={navigation} page={1}></QuizBefore>
        <QuizNext nav={navigation} page={3}></QuizNext> 
        </View>
        </View>
        </SafeAreaView>
        
        </GestureHandlerRootView>
    )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "#A7A7A7",
      display: "flex",
      flexDirection: "column",
      flex: 1,
      alignItems: "center",
      rowGap: 0,
      paddingHorizontal: 24,
    },

    container2: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: 12,
    },

      

  });

export default QuizFour;