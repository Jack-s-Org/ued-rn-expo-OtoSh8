import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, StyleSheet, View, Image, ScrollView } from "react-native";
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
import IcoFunnel from "@/components/icons/funnel";
import IcoChatSilver from "@/components/icons/chatSilver";
import ChatContainer from "@/components/chatcontainer";
import IcoStart from "@/components/icons/star";
import Recipe from "@/components/recipe";


function ShareScreen({navigation}){
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
  
  <IcoStart style={{marginLeft:8}}></IcoStart>
<Text style={{fontFamily: "K2D", fontSize: 20, textAlignVertical:"center",marginLeft:4}}>Share a Favourite</Text>

</View>
<IcoFunnel style={{marginTop:4}}></IcoFunnel>
</View>

<View style={styles.Maincontainer}>
            <View style={{width:344,height:4,backgroundColor:"#717171"}}></View>
            <ImageBackground source={require("@/assets/recipecon.png")} style={{width: "100%", height: "100%"}} resizeMode="stretch">
                <ScrollView contentContainerStyle={styles.contentContainer} horizontal={false} style={styles.innercontainer}>
                  <View style={{flexDirection:"row", justifyContent:"space-between",width:"100%", paddingHorizontal:6}} onPress={() => {
                    navigation.navigate("MessageSquad", {shared: true});
                  }}>
                  <Recipe  fav={true} variant={2} name="Basted Steak" time="30 mins" cal="230 kcal" image={3}></Recipe>
                  <Recipe  fav={true} variant={0} name="Egg Fried Rice" time="30 mins" cal="230 kcal" image={2}></Recipe>
                  </View>
                  <View style={{flexDirection:"row", justifyContent:"space-between",width:"100%", paddingHorizontal:6}}>
                  <Recipe fav={true}  variant={1} name="Chocolate Cake" time="30 mins" cal="230 kcal" image={0}></Recipe>
                  <Recipe fav={true} variant={2} name="Stir Fry Noodles" time="30 mins" cal="230 kcal" image={1}></Recipe>
                  </View>
                  
                </ScrollView>
            </ImageBackground>
            <View style={{width:344,height:4,backgroundColor:"#C9C9C9"}}></View>
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
    Maincontainer: {
      backgroundColor: "#7B7B7B",
      width: 344,
      height: 724,
      borderRadius: 4,
      marginTop:12
  },
  contentContainer: {
    alignItems:"center",
    paddingVertical: 6,
    rowGap: 6
  }

      

  });

export default ShareScreen;