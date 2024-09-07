import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={{backgroundColor:"red", width: 314, height:498, borderRadius: 14, overflow:"hidden"}}>
      <View style={{width:"98%", height: "98%", alignSelf:"center"}}>
      <LinearGradient
        colors={['#6F6F6F', '#D2D2D2']}
        style={{width:"100%", height: "100%"}}
      />
      </View>
      
      <LinearGradient
        colors={['#EAEAEA', '#606060']}
        style={{width:"100%", height: "100%"}}
      />
      
      </View>
      <Text>Discover</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A7A7A7",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DiscoverScreen;
