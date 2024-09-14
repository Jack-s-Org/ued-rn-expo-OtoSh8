import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";
import LandingButton from "@/components/landingbutton";
import { TouchableOpacity, GestureHandlerRootView } from "react-native-gesture-handler";
import PfpContainer from "@/components/pfp";
import CardContainer from "@/components/cardcontainer";
import QuizNext from "@/components/quiznext";
import QuizBefore from "@/components/quizbefore";


function QuizOne({navigation}){



    return(
        
        <GestureHandlerRootView>

        <SafeAreaView style={styles.container}>

          <View style={styles.container2}>
        <Text style={{fontFamily: "K2D", fontSize: 20, textAlignVertical:"center"}}>Step 1 of 4</Text>

        <PfpContainer></PfpContainer>
        <CardContainer text={"FRONT IC:"}></CardContainer>
        <CardContainer text={"BACK IC:"}></CardContainer>

        </View>

        <View style={{position:"absolute",bottom: 20}}>
        <Text style={{fontFamily:"K2D", fontSize:14, color:"#646464", marginBottom:4}}>
            -Please avoid using camera flashes {"\n"}
        -Make sure photo is clear without reflections or blurs.</Text>

        <View style={{display:"flex",paddingHorizontal:2,paddingVertical:2,backgroundColor:"#161616", borderRadius:9,flexDirection:"row", columnGap:2}}>
        <QuizBefore></QuizBefore>
        <QuizNext></QuizNext>
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
      rowGap: 18,
    },
  });

export default QuizOne;