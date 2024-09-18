import { Text, Image, View, ImageBackground } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

function PfpContainer({text}){
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

    
    let activeimg = (image == null)
    ? require("@/assets/redlight.png")
    : require("@/assets/greenlight.png");



return(

    <View style={{width:"100%",alignItems:"flex-start",display:"flex",flexDirection:"column",marginBottom:-16,marginLeft:22}}>
    <Text style={{fontFamily:"K2D", fontSize:14,color:"#646464"}}>{text}</Text>

    <View style={{display:"flex",flexDirection:"row",columnGap:6, justifyContent:"center", alignItems:"center", alignSelf:"center"}}>
        
    <View style={{width:144,height:144}}>
    <Image source={require("@/assets/roundpfp.png")}  style={{width:"100%", height:"100%"}}></Image>


    <View onPress={pickImage} style={{width:100,height:100,borderRadius:100,overflow:"hidden",position:"absolute",left: 22, top:22}}>
    <TouchableOpacity onPress={pickImage} style={{width:"100%", height:"100%"}}>
        {image && <Image source={{ uri: image }} style={{width:"100%", height:"100%"}} />}
    </TouchableOpacity>
    </View>


    </View>
    
    <Image source={activeimg} style={{width:20,height:20}}></Image>
    </View>





    </View>
)
}

export default PfpContainer;