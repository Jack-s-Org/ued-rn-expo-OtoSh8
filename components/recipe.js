import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import IcoFire from "./icons/fire";
import IcoTimer from "./icons/timer";
import { TouchableOpacity } from "react-native-gesture-handler";


function Recipe({name, time, cal, variant, image, navigation}){
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
    


    return(
      <TouchableOpacity activeOpacity={1}>
<View style={styles.maincon}>
    <View style={styles.imgcon}>
        <LinearGradient colors={['#646464', '#F2F2F2']} style={{width: "100%", height: "100%", opacity: 1, display: "flex", alignItems: "center", position: "absolute"}}>
        </LinearGradient>
        <ImageBackground source={foodSource} resizeMode="cover" style={{width: 126, height: 126, alignSelf: "center", padding: 0, margin: "auto"}}>
            </ImageBackground>
    </View>



    <View style={{ width: 141, rowGap: 6, display: "flex", flexDirection: "column"}}>
    <View style={{ width: 141}}>
    <Text style={{fontFamily: "K2D", fontSize: 6, fontWeight: "500", alignSelf: "flex-start", color: "#646464"}}>DISH NAME:</Text>
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




        <View style={{width:24, height:24, position: "absolute", right: 6, bottom: 40}}>
           <ImageBackground source={imageSource} style={{width:"100%",height:"100%"}} resizeMode="stretch"></ImageBackground>
        </View>
        </View>
        </TouchableOpacity>
    );
    
}

const styles = StyleSheet.create({
    imgcon: {
        width: 141,
        height: 141,
        borderRadius: 2,
        overflow: "hidden",
    },
    maincon: {
        width: 160,
        height: 226,
        backgroundColor: "#CACACA",
        borderRadius: 4,
        elevation: 4,
        opacity: 1,
        display: "flex",
        alignItems: "center",
        paddingVertical: 10,
        rowGap: 14
    }
})

export default Recipe;