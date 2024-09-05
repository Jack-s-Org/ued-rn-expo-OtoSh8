import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function Recipe(){
    return(
<View style={styles.maincon}>
    <View style={styles.imgcon}>
        <LinearGradient colors={['#646464', '#F2F2F2']} style={{width: "100%", height: "100%", opacity: 1, display: "flex", alignItems: "center", position: "absolute"}}>
        </LinearGradient>
        <ImageBackground source={require("@/assets/food/chocolate_cake.png")} resizeMode="cover" style={{width: 126, height: 126, alignSelf: "center", backgroundColor: "blue",padding: 0, margin: "auto"}}>
            </ImageBackground>
    </View>
    <Text style={{fontFamily: "K2D", fontSize: 6, fontWeight: 500, alignSelf: "flex-start"}}>DISH NAME:</Text>
    <Text style={{fontFamily: "K2D", fontSize: 16, fontWeight: 700}}>Chocolate Cake</Text>
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
        paddingVertical: 10
    }
})

export default Recipe;