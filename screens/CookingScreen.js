import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, StyleSheet, View, Image, ScrollView, Touchable, Animated } from "react-native";
import LandingButton from "@/components/landingbutton";
import { TouchableOpacity, GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import PfpContainer from "@/components/pfp";
import CardContainer from "@/components/cardcontainer";
import QuizNext from "@/components/quiznext";
import QuizBefore from "@/components/quizbefore";
import TextBox from "@/components/textbox";
import TextBoxBig from "@/components/textboxbig";
import OptionRoller from "@/components/optionroller";
import { LinearGradient } from 'expo-linear-gradient';
import IcoFunnel from "@/components/icons/funnel";
import IcoChatSilver from "@/components/icons/chatSilver";
import ChatContainer from "@/components/chatcontainer";
import IcoAvatar from "@/components/icons/avatar";
import IcoSquadOrange from "@/components/icons/orangesquad";
import PinButton from "@/components/pinbutton";
import SendButton from "@/components/sendbutton";
import IcoExit from "@/components/icons/exit";
import IcoMenu from "@/components/icons/menu";
import CookNextButton from "@/components/cooknext";
import { useRef, useState } from "react";

function CookingScreen({navigation, route}){
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [next , setNext] = useState(0);

  const slide1 = () => {

    Animated.timing(slideAnim, {
      toValue: -344,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }

  const handldone = () => {
    navigation.navigate("MessageSquad", {names: "The Three Musketeers", shared: true});
  };


  const handleBackPress = () => {
    navigation.pop();
  };

  
    return(
        
        <GestureHandlerRootView>

        <SafeAreaView style={styles.container}>
        <View style={{width: "100%", display:"flex",flexDirection:"row", columnGap:10, justifyContent:"space-between"}}>

<View style={{display:"flex",flexDirection:"row", columnGap:10, justifyContent:"center",alignItems:"center"}}>
  <TouchableOpacity activeOpacity={1} onPress={handleBackPress}>
  <IcoExit></IcoExit>
  </TouchableOpacity>
  

</View>


<IcoMenu></IcoMenu>

</View>

<View style={styles.Maincontainer}>
            <View style={{width:344,height:4,backgroundColor:"#717171"}}></View>
            <ImageBackground source={require("@/assets/orangescreen.png")} style={{width: "100%", height: "100%"}} resizeMode="stretch">
                <View style={styles.contentContainer}>

                  <Animated.View style={{width:"100%",alignItems:"center", marginTop:100,flexDirection:"row",transform: [{translateX: slideAnim}]}}>
                  <View style={{width:"100%",alignItems:"center"}}>
                          <Image source={require("@/assets/instr.png")} style={{width:287,height:234}}></Image>
                          <Text style={{fontFamily:"K2DBOLD", fontSize: 24, fontWeight:400,color:"white", opacity:0.5, elevation:5, marginTop:20}}>Preheat oven to</Text>
                          <Text style={{fontFamily:"K2DBOLD", fontSize: 32, fontWeight:400,color:"white", elevation:5, marginTop:-12}}>180C°/350°F</Text>
                          </View>

                          <View style={{width:325,height:194,alignItems:"center"}}>
                          <ImageBackground source={require("@/assets/completed.png")} style={{width:"100%",height:"100%"}}></ImageBackground>
                          </View>

                  </Animated.View>


                </View>
            </ImageBackground>
            <View style={{width:344,height:4,backgroundColor:"#C9C9C9"}}></View>

            <View style={{flexDirection:"column",alignItems:"flex-end", position:"absolute", bottom: 4, right: 12}}>
                  <Text style={{fontFamily:"K2D", fontSize: 10, fontWeight:400,color:"white", elevation:5, marginTop:-4}}>Time Elapsed:</Text>
                  <Text style={{fontFamily:"K2D", fontSize: 16, fontWeight:400,color:"white", elevation:5, marginTop:-4}}>00:04:01</Text>
                  </View>
        </View>

        <CookNextButton func={() => {
          if(next == 0){
            setNext(1);
            slide1();
          }
          else if(next == 1){
            handldone();
          }
        }}></CookNextButton>


        
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
      rowGap: 7,
      paddingHorizontal: 24,
    },

    container2: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      rowGap: 12,
    },
    Maincontainer: {
      backgroundColor: "#7B7B7B",
      width: 344,
      height: 618,
      borderRadius: 4,
      marginTop:12,
      overflow:"hidden"
  },
  contentContainer: {
    alignItems:"center",
    paddingVertical: 24,
    rowGap: 6,
    justifyContent:'center'
  }

      

  });

export default CookingScreen;