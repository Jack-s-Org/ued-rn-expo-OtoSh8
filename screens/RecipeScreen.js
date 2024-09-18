import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, View, Image } from "react-native";
import { StyleSheet } from "react-native";
import NoKnob from "@/components/noknob.js";
import SbsButton from "@/components/sbs";
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import IcoTimer from "@/components/icons/timer";
import IcoFire from "@/components/icons/fire";
import Ingredient from "@/components/ingredient";
import Switcher from "@/components/switcher";

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
<View>
  <Switcher variant={0}></Switcher>
  <Switcher variant={1}></Switcher>
</View>
        </View>


        <View>

<Text style={{fontFamily:"K2D", fontSize: 10, fontWeight:400}}>Recipe:</Text>
<View style={{width:344,height:4,backgroundColor:"#717171"}}></View>
<View style={{width:344,height:552}}>
    <ImageBackground style={{width:"100%", height:"100%"}} source={require("@/assets/recipelist.png")}>

      <ScrollView style={{width:"100%",height:"100%",overflow:"hidden",paddingVertical:24,columnGap:24}} contentContainerStyle={{alignItems:"center"}}>
        
        <View style={{display:"flex",alignItems:"flex-start",width:"100%", flexDirection:"column",paddingHorizontal:24}}>
        <Text style={{fontFamily:"K2DBOLD",fontSize:24,color:"#161616",marginBottom:-8}}>Chocolate Cake</Text>
        <View style={{display:"flex",flexDirection:"row",columnGap:12,alignItems:"center"}}>
          <IcoTimer></IcoTimer>
        <Text style={{fontFamily:"K2DBOLD",fontSize:14,color:"#161616",marginLeft:-6}}>30 mins</Text>
        <IcoFire></IcoFire>
        <Text style={{fontFamily:"K2DBOLD",fontSize:14,color:"#161616",marginLeft:-6}}>230 kcal</Text>
        </View>
        </View>


        <View style={{width:310,height:212,backgroundColor:"white",borderRadius:4,marginTop:18,alignItems:"center",justifyContent:"center"}}>
          <Image source={require("@/assets/food/chocolate_cake.png")} style={{width:290,height:192,backgroundColor:"white",borderRadius:1}}>

          </Image>
        </View>

        <View style={{display:"flex",alignItems:"flex-start",width:"100%", flexDirection:"column",paddingHorizontal:18}}>
        <Text style={{fontFamily:"K2DBOLD",fontSize:14,color:"#161616",marginTop:24}}>Ingredients:</Text>
        <Ingredient name={"All Purpose Flour"} amt={"1 3/4 cups"} srcs={require("@/assets/ingredients/flour.png")}></Ingredient>
        <Ingredient name={"Cocoa Powder"} amt={"3/4 cups"} srcs={require("@/assets/ingredients/choco.png")}></Ingredient>
        <Ingredient name={"Baking Powder"} amt={"1 1/2 cups"} srcs={require("@/assets/ingredients/bakingpowder.png")}></Ingredient>
        <Ingredient name={"Baking Soda"} amt={"1 1/2 cups"} srcs={require("@/assets/ingredients/bakingsoda.png")}></Ingredient>
        <Ingredient name={"White Sugar"} amt={"2 cups"} srcs={require("@/assets/ingredients/sugar.png")}></Ingredient>
        <Ingredient name={"Salt"} amt={"1 tsps"} srcs={require("@/assets/ingredients/salt.png")}></Ingredient>
        <Ingredient name={"Eggs"} amt={"2"} srcs={require("@/assets/ingredients/egg.png")}></Ingredient>
        <Ingredient name={"Milk"} amt={"1 cups"} srcs={require("@/assets/ingredients/milk.png")}></Ingredient>
        <Ingredient name={"Vegetable Oil"} amt={"1/2 cups"} srcs={require("@/assets/ingredients/oil.png")}></Ingredient>
        <Ingredient name={"Vanilla Extract"} amt={"2 tsps"} srcs={require("@/assets/ingredients/vanilla.png")}></Ingredient>
        <Ingredient name={"Boiling Water"} amt={"1 cups"} srcs={require("@/assets/ingredients/pot.png")}></Ingredient>

        </View>
      </ScrollView>
    </ImageBackground>
</View>
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
        justifyContent: "top",
        rowGap: 18
      },
  });


export default RecipeScreen;