import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Recipe from "./recipe";

function RecipeContainer(){
    return(
        <View style={styles.Maincontainer}>
            <ImageBackground source={require("@/assets/recipecon.png")} style={{width: "100%", height: "100%"}} resizeMode="stretch">
                <ScrollView contentContainerStyle={styles.contentContainer} horizontal={false} style={styles.innercontainer}>
                    <View style={styles.reciperow}>
                    <Recipe variant={1} name="Chocolate Cake" time="30 mins" cal="230 kcal" image={0}></Recipe>
                    <Recipe variant={2} name="Chocolate Cake" time="30 mins" cal="230 kcal" image={1}></Recipe>
                    </View>
                
                    <View style={styles.reciperow}>
                    <Recipe variant={0} name="Chocolate Cake" time="30 mins" cal="230 kcal" image={2}></Recipe>
                    <Recipe variant={2} name="Chocolate Cake" time="30 mins" cal="230 kcal" image={3}></Recipe>
                    </View>

                    <View style={styles.reciperow}>
                    <Recipe variant={1} name="Chocolate Cake" time="30 mins" cal="230 kcal" image={0}></Recipe>
                    <Recipe variant={2} name="Chocolate Cake" time="30 mins" cal="230 kcal" image={1}></Recipe>
                    </View>

                    <View style={styles.reciperow}>
                    <Recipe variant={0} name="Chocolate Cake" time="30 mins" cal="230 kcal" image={2}></Recipe>
                    <Recipe variant={1} name="Chocolate Cake" time="30 mins" cal="230 kcal" image={3}></Recipe>
                    </View>
                </ScrollView>
            </ImageBackground>
      
        </View>
    );
}

const styles = StyleSheet.create({
    Maincontainer: {
        backgroundColor: "#7B7B7B",
        width: 344,
        height: 494,
        borderRadius: 4
    },
    innercontainer: {
        width: "100%",
        height: "100%",
        opacity: 1,
        
    },
    contentContainer:{
        paddingVertical: 6,
        // paddingHorizontal: 6,
        // columnGap: 12,
    },
    reciperow: {
    width: "auto",
    height: 226,
    display: "flex",
    flexDirection: "row",
    columnGap: 12,
    margin: 6
    }
});

export default RecipeContainer;