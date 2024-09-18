import { ImageBackground, View, Image, Text } from "react-native";

function Ingredient({name,amt,srcs}){
    return(
        <View style={{width:319,height:56,marginHorizontal:-5}}>
            <ImageBackground source={require("@/assets/ingcontainer.png")} style={{width:"100%",height:"100%",display:"flex",flexDirection:"row",columnGap:14,alignItems:"center",justifyContent:"space-between"}}>
            <View  style={{display:"flex",flexDirection:"row",columnGap:14,alignItems:"center"}}>
            <Image source={srcs} style={{width:30,height:30,borderRadius:100,overflow:"hidden",marginLeft:24,marginTop:-4,backgroundColor:"red"}} resizeMode="contain"></Image>
            <Text style={{fontFamily:"K2DBOLD",fontSize:12,color:"black",marginTop:-4}}>{name}</Text>
            </View>
            <Text style={{fontFamily:"K2D",fontSize:12,color:"black",marginTop:-4,marginRight:24}}>{amt}</Text>
            </ImageBackground>
        </View>
    )
}
export default Ingredient;