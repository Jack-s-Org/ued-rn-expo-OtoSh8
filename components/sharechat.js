import { View, StyleSheet, Text, ImageBackground, Image, Animated } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import IcoFire from "./icons/fire";
import IcoTimer from "./icons/timer";
import { TouchableOpacity } from "react-native-gesture-handler";
import IcoFav from "./icons/fav";
import IcoRead from "./icons/read";
import IcoCook from "./icons/cook";
import IcoInfo from "./icons/info";
import IcoRight from "./icons/right";
import IcoWrong from "./icons/wrong";
import IcoChecklist from "./icons/checklist";
import { useRef } from "react";

function ShareChat({name, time, cal, variant, image, nav, fav}){
    let imageSource;
    let foodSource;

        switch (variant) {
            case 0:
              imageSource = require('@/assets/burger.png');
              break;
            case 1:
              imageSource = require('@/assets/cookie.png');
              break;
            case 2:
              imageSource = require('@/assets/paste.png');
              break;
              default:
                imageSource = require('@/assets/paste.png');
          }

          switch (image) {
            case 0:
                foodSource = require('@/assets/food/chocolate_cake.png');
              break;
            case 1:
                foodSource = require('@/assets/food/noods.png');
              break;
            case 2:
                foodSource = require('@/assets/food/friedrice.png');
              break;
              case 3:
                foodSource = require('@/assets/food/steak.png');
              break;
              default:
                foodSource = require('@/assets/food/steak.png');
          }
    

          const slideAnim = useRef(new Animated.Value(0)).current;

          const slide1 = () => {

            Animated.timing(slideAnim, {
              toValue: -194,
              duration: 500,
              useNativeDriver: true,
            }).start()
          }

          const slideBack = () => {

            Animated.timing(slideAnim, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
            }).start()
          }
            
            const slide2 = () => {

              Animated.timing(slideAnim, {
                toValue: -388,
                duration: 500,
                useNativeDriver: true,
              }).start()
            }


    return(
      <TouchableOpacity activeOpacity={1}>
<View style={styles.maincon}>


<View style={{ width: 141, rowGap: 6, display: "flex", flexDirection: "column",paddingHorizontal:10}}>
    <View style={{ alignItems:"center"}}>
    <Text style={{fontFamily: "K2D", fontSize: 16, fontWeight: "700"}}>{name}</Text>
    </View>

<View style={{flexDirection: "row", display: "flex", justifyContent: "space-between"}}>
    <View style={{ display: "flex", flexDirection: "row", columnGap: 4, alignItems: "center"}}>
    <IcoTimer></IcoTimer> 
    <Text style={{fontFamily: "K2D",fontSize: 10, fontWeight: "700"}}>{time}</Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row", columnGap: 4}}>
    <IcoFire></IcoFire> 
    <Text style={{fontFamily: "K2D",fontSize: 10, fontWeight: "700"}}>{cal}</Text>
    </View>
</View>
    </View>


    <View style={styles.imgcon}>
        <LinearGradient colors={['#646464', '#F2F2F2']} style={{width: "100%", height: "100%", opacity: 1, display: "flex", alignItems: "center", position: "absolute"}}>
        </LinearGradient>
        <ImageBackground source={foodSource} resizeMode="cover" style={{width: 134, height: 134, alignSelf: "center", padding: 0, margin: "auto"}}>
            </ImageBackground>
    </View>

<View style={{flexDirection:"row",position:"absolute",bottom:2,right:2}}>
      <Text style={{fontFamily:"K2D",fontSize:10,color:"#646464"}}>14:57</Text>
      <IcoRead></IcoRead>
      </View>

        <Animated.View style={{width:"100%",flexDirection:"row",alignItems:"center",transform: [{ translateX: slideAnim}]}}>

          <View style={{flexDirection:"row", alignItems:"center",width:"100%",justifyContent:"center",columnGap:32}}>


          <TouchableOpacity onPress={() => {
            nav.push("Recipe");
          }}>
          <View style={{flexDirection:"column", alignItems:"center"}}>
          <IcoInfo></IcoInfo>
          <Text style={{fontFamily:"K2D",fontSize:10}}>Info</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={slide1}>
          <View style={{flexDirection:"column", alignItems:"center"}}>
          <IcoCook></IcoCook>
          <Text style={{fontFamily:"K2D",fontSize:10}}>Cook</Text>
          </View>
          </TouchableOpacity>
          </View>


          <View style={{flexDirection:"row", alignItems:"center",width:"100%",justifyContent:"center",columnGap:32,height:44,marginTop:-12}}>
            <View style={{flexDirection:"column", alignItems:"center",width:"100%",justifyContent:"center",rowGap:12}}>
          <Text style={{fontFamily:"K2D",fontSize:10}}>Do you agree to cook?</Text>
          <View style={{flexDirection:"row", alignItems:"center",width:"100%",justifyContent:"center",columnGap:46}}>
          <TouchableOpacity onPress={slideBack}>
          <IcoWrong></IcoWrong>
          </TouchableOpacity>
          <TouchableOpacity onPress={slide2}>
          <IcoRight></IcoRight>
          </TouchableOpacity>
          </View>
          </View>
          </View>


          <View style={{flexDirection:"row", alignItems:"center",width:"100%",justifyContent:"center",columnGap:32,marginTop:-12}}>
          <TouchableOpacity onPress={() => {
            nav.push("Checklist")
          }}>
          <View style={{flexDirection:"column", alignItems:"center"}}>
          <IcoChecklist></IcoChecklist>
          <Text style={{fontFamily:"K2D",fontSize:10}}>Ingredients</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            nav.push("Prep")
          }}>
          <View style={{flexDirection:"column", alignItems:"center"}}>
          <IcoCook></IcoCook>
          <Text style={{fontFamily:"K2D",fontSize:10}}>Start</Text>
          </View>
          </TouchableOpacity>

          </View>



        </Animated.View>
        </View>
        </TouchableOpacity>
    );
    
}

const styles = StyleSheet.create({
    imgcon: {
        width: 150,
        height: 150,
        borderRadius: 7,
        overflow: "hidden",
    },
    maincon: {
        width: 194,
        height: 302,
        backgroundColor: "#CACACA",
        borderRadius: 4,
        elevation: 4,
        opacity: 1,
        display: "flex",
        alignItems: "center",
        paddingVertical: 13,
        rowGap: 14,
        overflow:"hidden"
    }
})

export default ShareChat;