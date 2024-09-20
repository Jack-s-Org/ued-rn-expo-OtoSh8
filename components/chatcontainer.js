import { View, Text, Image, ImageBackground } from "react-native";
import IcoImage from "./icons/image";
import { TouchableOpacity } from "react-native-gesture-handler";

function ChatContainer({name, last, nav}){
    return(
        <TouchableOpacity onPress={() => {nav.navigate("Message", {names: name})}} activeOpacity={1}>
        <View style={{width:330,height:72,backgroundColor:"#B9B9B9", flexDirection:"row", alignItems:"center",paddingHorizontal:12, columnGap:20, borderRadius:2, opacity: 0.9, elevation:5}}>
            <View style={{width:50,height:50, backgroundColor:"#FFFFFF", borderRadius:100}}>
            <ImageBackground style={{width:"100%",height:"100%", alignItems:"center",justifyContent:"center"}}>
            <IcoImage></IcoImage>
            </ImageBackground>

            </View>

            <View style={{display:"flex",flexDirection:"column"}}>
            <Text style={{fontFamily:"K2D", fontSize:6, marginVertical:-4}}>NAME:</Text>
            <Text style={{fontFamily:"K2DBOLD", fontSize:16, marginVertical:-4}}>{name}</Text>
            <Text style={{fontFamily:"K2DBOLD", fontSize:14, marginVertical:-4, color:"#646464"}}>{last}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default ChatContainer;