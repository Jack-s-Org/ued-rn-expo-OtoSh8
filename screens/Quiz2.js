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


function QuizTwo({navigation}){



    return(
        
        <GestureHandlerRootView>

        <SafeAreaView style={styles.container}>

          <View style={styles.container2}>
        <Text style={{fontFamily: "K2D", fontSize: 20, textAlignVertical:"center"}}>Step 2 of 4</Text>

        <PfpContainer text={"PROFILE PICTURE:"}></PfpContainer>
        <TextBox placeholdertxt={"FIRST NAME"} text={"FIRST NAME:"}></TextBox>
        <TextBox placeholdertxt={"LAST NAME"} text={"LAST NAME:"}></TextBox>
        <TextBoxBig placeholdertxt={"DESCRIPTION"} text={"DESCRIPTION:"}></TextBoxBig>
        </View>

        <View style={{position:"absolute",bottom: 20}}>

        <View style={{display:"flex",paddingHorizontal:2,paddingVertical:2,backgroundColor:"#161616", borderRadius:9,flexDirection:"row", columnGap:2,position:"relative"}}>
        <QuizBefore nav={navigation} page={1}></QuizBefore>
        <QuizNext nav={navigation} page={1}></QuizNext>
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

export default QuizTwo;