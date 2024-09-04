import { View, StyleSheet } from "react-native";
import RadialGradient from 'react-native-radial-gradient';


function RecipeContainer(){
    return(
        <View style={styles.Maincontainer}>
            <RadialGradient style={{width:200,height:200}}
                        colors={['black','green','blue','red']}
                        stops={[0.1,0.4,0.3,0.75]}
                        center={[100,100]}
                        radius={200}>

            </RadialGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    Maincontainer: {
        backgroundColor: "#7B7B7B",
        width: 344,
        height: 494
    }
});

export default RecipeContainer;