import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, StyleSheet, View, Image } from "react-native";
import LandingButton from "@/components/landingbutton";
import { TouchableOpacity, GestureHandlerRootView } from "react-native-gesture-handler";
import PfpContainer from "@/components/pfp";
import CardContainer from "@/components/cardcontainer";


function QuizOne({navigation}){



    return(
        
        <GestureHandlerRootView>

        <SafeAreaView style={styles.container}>
        <Text style={{fontFamily: "K2D", fontSize: 20, textAlignVertical:"center"}}>Step 1 of 4</Text>

        <PfpContainer></PfpContainer>
        <CardContainer></CardContainer>
        <Text style={{fontFamily:"K2D", fontSize:14,color:"#646464"}}>
            Please avoid using camera flashes {"\n"}
        Make sure photo is clear without reflections or blurs.</Text>

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
      rowGap: 18,
      paddingHorizontal: 24,
      justifyContent:"space-between",
    },
  });

export default QuizOne;