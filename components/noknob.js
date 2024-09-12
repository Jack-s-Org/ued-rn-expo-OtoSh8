import { View, ImageBackground, Text, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient";


function NoKnob(){
return(

    <View style={{alignItems:"center", display:"flex", flexDirection:"column", rowGap:4}}>
            <Image source={require("@/assets/knoblabel.png")} style={{width:110,height:30,marginBottom:-20}}></Image>
    <View style={{width:92, height: 92, alignItems: "center",justifyContent:"center",borderRadius:100}}>
                  <LinearGradient colors={['#6F6F6F', '#EAEAEA']} style={{width: "100%", height: "100%", position: "absolute", borderRadius: 100}}>
                  </LinearGradient>

    <View style={{width:76, height: 76, alignItems: "center", backgroundColor:"#212121", justifyContent:"center",borderRadius:100, elevation: 10, shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}}}>
    <View style={{width:72, height: 72}}>
        <ImageBackground style={{width:"100%", height:"100%"}} source={require("@/assets/noknob.png")}></ImageBackground>
        <ImageBackground style={{width:"100%", height:"100%",position:"absolute",left:0,right:0,opacity:0.5}} source={require("@/assets/noknobouter.png")}></ImageBackground>
        
    </View>

    </View>
    </View>

    <Text style={{fontFamily:"K2D", fontSize:10, fontWeight:400, color:"#646464"}}>Servings</Text>
    </View>

)
}

export default NoKnob;