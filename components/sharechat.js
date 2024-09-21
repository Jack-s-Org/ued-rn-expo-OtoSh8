import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import IcoFire from "./icons/fire";
import IcoTimer from "./icons/timer";
import { TouchableOpacity } from "react-native-gesture-handler";
import IcoFav from "./icons/fav";
import IcoRead from "./icons/read";


function ShareChat({name, time, cal, variant, image, navigation, fav}){
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

        {fav ?   <IcoFav style={{position:"absolute",right:-2,top:-2}}></IcoFav> : null}
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
    }
})

export default ShareChat;