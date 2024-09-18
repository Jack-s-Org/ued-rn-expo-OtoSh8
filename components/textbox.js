import { Text, ImageBackground, View, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
function TextBox({text,placeholdertxt,lines}){
    const [txt, setTxt] = useState('');

           
    let activeimg = (txt == '')
    ? require("@/assets/redlight.png")
    : require("@/assets/greenlight.png");




    return(
        <View style={{display:"flex",flexDirection:"row",columnGap:12,alignItems:"center"}}>
            <View>
      <Text  style={{fontFamily:"K2D", fontSize:14,color:"#646464"}}>{text}</Text>
      <View style={{width:324,height:76, display:"flex",alignItems:"center",justifyContent:"center",borderRadius:2 }}>
                  <LinearGradient colors={['#EDEDED', '#A7A7A7']} style={{width: "100%", height: "100%", position: "absolute"}}>
                  </LinearGradient>

    <View style={{width:322,height:74, display:"flex",alignItems:"center",justifyContent:"center",borderRadius:2,backgroundColor:"#A7A7A7" }}>
        <View style={{width:298,height:46, display:"flex",alignItems:"center",justifyContent:"center",borderRadius:10,backgroundColor:'red',overflow:'hidden'}}>
                  <LinearGradient colors={['#6F6F6F', '#EAEAEA']} style={{width: "100%", height: "100%", position: "absolute"}}>
                  </LinearGradient>

            <View style={{width:290,height:38, borderRadius:6,overflow:"hidden"}}>
                <ImageBackground source={require("@/assets/screen.png")} style={{width:"100%",height:"100%"}} resizeMode="cover">

                <TextInput onChangeText={(input) => setTxt(input)} placeholderTextColor="#FF3333" placeholder={placeholdertxt} style={{fontFamily: "K2DBOLD",padding: 0,margin: 0,width: 313, height: 38, fontSize: 12, borderRadius: 54, paddingLeft: 24, paddingRight: 24, color: "#FF3333"}}>
        </TextInput>

                </ImageBackground>
            </View>

        </View>
        </View>
        </View>
        </View>
        <Image source={activeimg} style={{width:20,height:20,marginTop:24}}></Image>
    </View>
    )
}

export default TextBox;