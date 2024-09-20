import { ImageBackground, StyleSheet, Text } from "react-native";
import { View, Image, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import RadarButton from "@/components/radarbutton";
import SetupButton from "@/components/setupbutton";
import IcoRadar from "@/components/icons/radar";
import IcoSquad from "@/components/icons/squad";
import IcoChat from "@/components/icons/chat";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useRef, useState } from "react";
import IcoLocation from "@/components/icons/location";
const DiscoverScreen = ({navigation, route}) => {

  
  const { signedup } = route.params || false;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const [peer, setPeer] = useState(0);

  const [name, setName] = useState("Bobby Lee, 20 Student");
  const [fav, setFav] = useState("Japanese");
  const [dist, setDist] = useState("15 meters away");
  const [age, setAge] = useState("3 months");
  const [like, setLike] = useState("326");

  const [images, setImages] = useState(require("@/assets/bobby.png"))

  const goChat = () => {
    navigation.navigate("Main", {screen: "Chat"});
  };

  const swapPeer = () => {
    if(peer == 0){
      setPeer(1);
      setName("Alyssa Yap, 22 Student");
      setFav("French");
      setDist("32 meters away");
      setAge("2 years");
      setLike("934");
      setImages(require("@/assets/alyssa.png"));
      console.log(peer);
    }
    else{
      setPeer(0);
      setName("Bobby Lee, 20 Student");
      setFav("Japanese");
      setDist("15 meters away");
      setAge("3 months");
      setLike("326");
      setImages(require("@/assets/bobby.png"));
      console.log(peer);
    }
  };

  const slideOut = () => {

    Animated.timing(slideAnim, {
      toValue: -500,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      swapPeer();
      Animated.timing(slideAnim, {
        toValue: 500,
        duration: 0,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      })
    })

  }


  return (
    <GestureHandlerRootView>
    <SafeAreaView style={styles.container}>
      <View style={{width: "100%", paddingHorizontal: 26, display:"flex",flexDirection:"row", columnGap:10, justifyContent:"space-between"}}>
      <View style={{display:"flex",flexDirection:"row", columnGap:10, marginBottom:16}}>
        <IcoRadar></IcoRadar>
      <Text style={{fontFamily: "K2D", fontSize: 20,textAlignVertical:"center" ,alignSelf: "flex-start"}}>Homecook Radar</Text>
      </View>

      <View style={{display:"flex",flexDirection:"row", columnGap:20, alignItems:"flex-start", paddingTop: 6}}>
        <IcoSquad></IcoSquad>
        <IcoChat></IcoChat>
        </View>
      </View>

<View style={{width: 338, height:498, borderRadius: 14, overflow:"hidden", alignItems:"center", justifyContent:"center"}}>



      <View style={{width: "100%", height:"100%", borderRadius: 14, overflow:"hidden", position:"absolute"}}>
      <LinearGradient
        colors={['#606060', '#EAEAEA']}
        style={{width:"100%", height: "100%"}}
      />
      </View>

      <View style={{width: 334, height:494, borderRadius: 12, overflow:"hidden", position:"absolute"}}>
      <LinearGradient
        colors={['#6F6F6F', '#D2D2D2']}
        style={{width:"100%", height: "100%"}}
      />
      </View>
      

      <View style={{width: 310, height:470, borderRadius: 12, overflow:"hidden"}}>
      <ImageBackground source={require("@/assets/screen.png")} style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}} resizeMode="stretch">
      {signedup ? (
        <Animated.View style={{transform: [{ translateX: slideAnim }], position:"absolute", top: 24, left: 0 }}>
        <View style={{width:"100%",paddingHorizontal:25}}>
              <View style={{width:264,height:180,borderRadius:4,overflow:"hidden"}}>
                <ImageBackground source={images} style={{width:"100%",height:"100%"}} resizeMode="cover">

                </ImageBackground>
              </View>

              <Text style={{fontFamily:"K2D",fontSize:20,color:"#38C433",marginTop:24}}>{name}</Text>
              <View style={{flexDirection:"row",columnGap:6}}>
              <IcoLocation></IcoLocation>
              <Text style={{fontFamily:"K2D",fontSize:12,color:"#38C433",marginTop:-4}}>{dist}</Text>
              </View>
              <Text style={{fontFamily:"K2D",fontSize:10,color:"#38C433",marginTop:20}}>This is a long description about yourself. Fill this space up with our fabulous traits and features that you’d want to show off to other chefs out there!</Text>
        
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
              <View style={{display:"flex",flexDirection:"column"}}>
              <Text style={{fontFamily:"K2D",fontSize:10,color:"#38C433"}}>Favourite Cuisine:</Text>
              <Text style={{fontFamily:"K2D",fontSize:10,color:"#38C433"}}>{fav}</Text>
              </View>
              <View style={{display:"flex",flexDirection:"column"}}>
              <Text style={{fontFamily:"K2D",fontSize:10,color:"#38C433"}}>Tasty Age:</Text>
              <Text style={{fontFamily:"K2D",fontSize:10,color:"#38C433"}}>{age}</Text>
              </View>
              <View style={{display:"flex",flexDirection:"column"}}>
              <Text style={{fontFamily:"K2D",fontSize:10,color:"#38C433"}}>Community Likes:</Text>
              <Text style={{fontFamily:"K2D",fontSize:10,color:"#38C433"}}>{like}</Text>
              </View>
          </View>
        </View>
        </Animated.View>
    )
    : 
    <Image source={require("@/assets/errorpfp.png")}  style={{width: 196, height:170,marginBottom:32}}></Image>
    }

      </ImageBackground>
    </View>



    </View>
      
      <View style={{ backgroundColor:"#171717", padding: 2, borderRadius: 9, display: "flex", flexDirection:"row", columnGap:2, marginTop: 48}}>
      
      <View style={{display:"flex",flexDirection:"row",position:"absolute",top:-20,width:"100%"}}>
      <Text style={{fontFamily:"K2D",fontSize:10,color:"#646464",marginLeft:12}}>Set Up</Text>
      <Text style={{fontFamily:"K2D",fontSize:10,color:"#646464",marginLeft:42}}>Favourite</Text>
      <Text style={{fontFamily:"K2D",fontSize:10,color:"#646464",marginLeft:60}}>Chat</Text>
      <Text style={{fontFamily:"K2D",fontSize:10,color:"#646464",marginLeft:76}}>Next</Text>
      </View>
      {signedup ?
        <View style={{width: 54, height: 54, borderRadius: 7,shadowColor: "#250900", shadowOpacity: 0.65, shadowRadius: 8, shadowOffset: {width: 0, height: 12}}}>
        <ImageBackground source={require("@/assets/setupdone.png")} style={{width:"100%", height: "100%"}}>

        </ImageBackground>
        </View>
        :
        <SetupButton nav={navigation} available={signedup}></SetupButton>
      }

      <RadarButton activate={signedup} variant={0}></RadarButton>
      <RadarButton activate={signedup}  variant={1} func={goChat}></RadarButton>
      <RadarButton activate={signedup}  variant={2} func={slideOut}></RadarButton>
      </View>


    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: -20,
    backgroundColor: "#A7A7A7",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
  },
});

export default DiscoverScreen;
