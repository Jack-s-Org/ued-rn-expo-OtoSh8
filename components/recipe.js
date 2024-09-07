import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import IcoFire from "./icons/fire";
import IcoTimer from "./icons/timer";

function Recipe(props){
    return(
<View style={styles.maincon}>
    <View style={styles.imgcon}>
        <LinearGradient colors={['#646464', '#F2F2F2']} style={{width: "100%", height: "100%", opacity: 1, display: "flex", alignItems: "center", position: "absolute"}}>
        </LinearGradient>
        <ImageBackground source={require("@/assets/food/chocolate_cake.png")} resizeMode="cover" style={{width: 126, height: 126, alignSelf: "center", backgroundColor: "blue",padding: 0, margin: "auto"}}>
            </ImageBackground>
    </View>

    <View style={{ width: 141, rowGap: 6, display: "flex", flexDirection: "column"}}>
    <View style={{ width: 141}}>
    <Text style={{fontFamily: "K2D", fontSize: 6, fontWeight: 500, alignSelf: "flex-start", color: "#646464"}}>DISH NAME:</Text>
    <Text style={{fontFamily: "K2D", fontSize: 16, fontWeight: 700}}>Chocolate Cake</Text>
    </View>

<View style={{flexDirection: "row", display: "flex", justifyContent: "space-between"}}>
    <View style={{ display: "flex", flexDirection: "row", columnGap: 4, alignItems: "center"}}>
    <IcoTimer></IcoTimer> <Text style={{fontFamily: "K2D",fontSize: 10, fontWeight: 700}}>30 mins</Text>
    </View>

    <View style={{ display: "flex", flexDirection: "row", columnGap: 4}}>
    <IcoFire></IcoFire> <Text style={{fontFamily: "K2D",fontSize: 10, fontWeight: 700}}>230 kcal</Text>
    </View>
</View>
    </View>

        <View style={{width:24, height:24, position: "absolute"}}>
            <ImageBackground source={() => {
                switch(1){
                    case 0:
                        return require("@/assets/burger.png")
                        case 1:
                        return require("@/assets/cookie.png")
                        case 2:
                        return require("@/assets/paste.png")
                }
            }} style={{width:"100%",height:"100%"}} resizeMode="stretch"></ImageBackground>
        </View>
        </View>
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