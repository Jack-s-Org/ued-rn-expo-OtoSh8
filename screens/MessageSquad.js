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
import IcoSquad from "@/components/icons/squad";
import IcoSquadSilver from "@/components/icons/squadsilver";
import IcoBIgSquad from "@/components/icons/bigsquad";
import IcoMore from "@/components/icons/more";
import ShareChat from "@/components/sharechat";


function MessageSquadScreen({navigation, route}){
  const {names} = route.params;
  const {shared} = route.params || false;


  const handleBackPress = () => {
    navigation.pop();
  };

  
    return(
        
        <GestureHandlerRootView>

        <SafeAreaView style={styles.container}>
        <View style={{width: "100%", display:"flex",flexDirection:"row", columnGap:10, justifyContent:"space-between"}}>

<View style={{display:"flex",flexDirection:"row", columnGap:10, justifyContent:"center",alignItems:"center"}}>
  <TouchableOpacity activeOpacity={1} onPress={handleBackPress}>
  <Image source={require("@/assets/orangeback.png")} style={{width:40,height:40, marginLeft:-13}}></Image>
  </TouchableOpacity>
  
  <IcoSquadSilver style={{marginLeft:8}}></IcoSquadSilver>
<Text style={{fontFamily: "K2D", fontSize: 20, textAlignVertical:"center",marginLeft:4}}>{names}</Text>

</View>

<IcoMore style={{marginTop:6}}></IcoMore>
</View>

<View style={styles.Maincontainer}>
            <View style={{width:344,height:4,backgroundColor:"#717171"}}></View>
            <ImageBackground source={require("@/assets/recipecon.png")} style={{width: "100%", height: "100%"}} resizeMode="stretch">
                <ScrollView contentContainerStyle={styles.contentContainer} horizontal={false} style={styles.innercontainer}>
                  <Text style={{fontSize:12,fontFamily:"K2D",color:"#FFFFFF",textAlign:"center",width:230, alignSelf:"center"}}>This is the beginning of your conversation.
                  Say hello to your fellow homecook!</Text>
                  
                  <View style={{position:"fixed", marginTop:160, alignSelf:"center"}}>
                  <IcoBIgSquad></IcoBIgSquad>
                  </View>

                {shared ? <ShareChat variant={2} nav={navigation} name="Basted Steak" time="30 mins" cal="230 kcal" image={3}></ShareChat> : null}
                

                </ScrollView>
            </ImageBackground>
            <View style={{width:344,height:4,backgroundColor:"#C9C9C9"}}></View>
        </View>

        <View style={{width:344,height:64,backgroundColor:"#161616",borderRadius:9, marginTop:26,paddingHorizontal:3, overflow:"hidden", flexDirection:"row",columnGap:3,alignItems:"center"}}>
          
          <View style={{width:"110%",height:5, position:"absolute", top:28}}>
          <LinearGradient colors={['#646464', '#CACACA']} style={{width: "100%", height: "100%"}}>
          </LinearGradient>
          </View>

          <View style={{width:216,height:58}}>
            <ImageBackground source={require("@/assets/messageroller.png")} style={{width:"100%",height:"100%"}}>
            <TextInput placeholderTextColor="#212121" placeholder="Enter Message" style={{height:"100%",width:"100%",paddingHorizontal:12,color:"#212121"}}></TextInput>
            </ImageBackground>
          </View>

          <PinButton nav={navigation} activate={true}></PinButton>

          <SendButton></SendButton>

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
      height: 625,
      borderRadius: 4,
      marginTop:12,
  },
  contentContainer: {
    alignItems:"flex-end",
    paddingHorizontal:14,
    paddingVertical: 24,
    rowGap: 6
  }

      

  });

export default MessageSquadScreen;