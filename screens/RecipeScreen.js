import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import NoKnob from "@/components/noknob.js";
import SbsButton from "@/components/sbs";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";

function RecipeScreen({navigation}){
    const handleBackPress = () => {
        navigation.pop();
      };


return(
    <GestureHandlerRootView>
    <SafeAreaView style={styles.container}>

<View style={{width: "100%", paddingHorizontal: 26, display:"flex",flexDirection:"row", columnGap:10, justifyContent:"space-between"}}>

      <View style={{display:"flex",flexDirection:"row", columnGap:10, justifyContent:"center"}}>
        <TouchableOpacity activeOpacity={1} onPress={handleBackPress}>
        <Image source={require("@/assets/orangeback.png")} style={{width:40,height:40, marginLeft:-13}}></Image>
        </TouchableOpacity>

      <Text style={{fontFamily: "K2D", fontSize: 20, textAlignVertical:"center"}}>Recipe</Text>
      </View>

      <View style={{display:"flex",flexDirection:"row", columnGap:10, justifyContent:"center"}}>
        <Image source={require("@/assets/orangeshare.png")} style={{width:40,height:40}}></Image>
        <Image source={require("@/assets/orangestar.png")} style={{width:40,height:40, marginRight:-13}}></Image>
      </View>

      </View>



        <View style={{display:"flex", flexDirection:"row", columnGap: 24}}>
        <NoKnob></NoKnob>
<SbsButton></SbsButton>
        </View>


        <View>

<Text style={{fontFamily:"K2D", fontSize: 10, fontWeight:400}}>Recipe:</Text>
<View style={{width:344,height:552}}>
    <ImageBackground style={{width:"100%", height:"100%"}} source={require("@/assets/recipelist.png")}>

    </ImageBackground>
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
        justifyContent: "top",
        rowGap: 18
      },
  });


export default RecipeScreen;