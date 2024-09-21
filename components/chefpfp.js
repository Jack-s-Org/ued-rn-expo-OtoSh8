import { ImageBackground, View } from "react-native";

function ChefPfp({yes}){
    return(
        <View style={{height:62,width:62,marginHorizontal:-10}}>
        {yes  ? <ImageBackground source={require("@/assets/chefgreen.png")} style={{width:"100%",height:"100%"}}></ImageBackground> : <ImageBackground source={require("@/assets/chefred.png")} style={{width:"100%",height:"100%"}}></ImageBackground>}
        </View>
        
    )
}

export default ChefPfp;