import { Text, Image, View, ImageBackground } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

function CardContainer({text}){
    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // Request permission to access the gallery
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
  
      // Open the image picker
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };


return(

    <View style={{width:"100%",alignItems:"flex-start",display:"flex",flexDirection:"column"}}>

    <View style={{display:"flex",flexDirection:"row",columnGap:6, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
        
    <View style={{width:324,height:167, borderRadius: 5, overflow:"hidden",backgroundColor:"red", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <LinearGradient colors={['#646464', '#CACACA']} style={{width: "100%", height: "100%", position:"absolute"}}>
    </LinearGradient>

    <Image source={require("@/assets/cardpics.png")}  style={{width:296, height:139}}></Image>

    <View onPress={pickImage} style={{width:100,height:100,borderRadius:100,overflow:"hidden",position:"absolute",left: 22, top:22}}>
    <TouchableOpacity onPress={pickImage} style={{width:"100%", height:"100%"}}>
        {image && <Image source={{ uri: image }} style={{width:"100%", height:"100%"}} />}
    </TouchableOpacity>
    </View>


    </View>
    
    <Image source={require("@/assets/redlight.png")} style={{width:20,height:20}}></Image>
    </View>





    </View>
)
}

export default CardContainer;