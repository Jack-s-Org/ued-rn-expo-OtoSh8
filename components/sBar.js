import { ImageBackground, TextInput, View } from "react-native";
import IcoFilter from "./icons/filter";


function SBar() {
    return(
        <View style={{flexDirection: "row", alignItems: "center", columnGap: 8, margin: 0}}>
        <ImageBackground source={require("@/assets/SBarBG.png")} resizeMode="stretch" style={{width: 313, height: 38}}>
        <TextInput placeholderTextColor="#C7C7C7" placeholder="Search for recipes" style={{fontFamily: "K2D",padding: 0,margin: 0,width: 313, height: 38, fontSize: 12, borderRadius: 54, paddingLeft: 24, paddingRight: 24, color: "#C7C7C7"}}>
        
        </TextInput>
        </ImageBackground>
        <IcoFilter></IcoFilter>
        </View>
        );
}

export default SBar;