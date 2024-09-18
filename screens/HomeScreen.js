import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SBar from "@/components/sBar";
import Knob from "@/components/knob";
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RecipeContainer from "@/components/recipecontainer";


const HomeScreen = ({navigation}) => {
  return (
    <GestureHandlerRootView>
    <SafeAreaView style={styles.container}>
      <SBar></SBar>

      <View style={styles.container_knob}>
      <LinearGradient
        colors={['#C9C9C9', '#898989']}
        style={styles.background}
      />
      <View style={styles.container_knob_inner}></View>
      <Text style={{fontFamily:"K2D",fontSize:10,color:"#646464",position:"absolute",left:12,top:4}}>Filter</Text>
      <Knob></Knob>
      <Knob></Knob>
      <Knob></Knob>
      </View>
    <RecipeContainer nav={navigation}>
    </RecipeContainer>

    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container_knob_inner: {
    borderRadius: 13,
    position: "absolute",
    width: 340,
    height: 124,
    top:  2,
    left: 2,
    backgroundColor: "#A7A7A7"
  },
  background: {
    width: 344,
    height: 128,
    position: "absolute",
    top: 0,
    left: 0,

  },
  container_knob: {
    width: 344,
    height: 128,
    overflow: "hidden",
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 18,
    columnGap:24,
    justifyContent:"space-evenly"
  },
  container: {
    paddingTop: -20,
    backgroundColor: "#A7A7A7",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
    rowGap: 10,
  },
});

export default HomeScreen;
