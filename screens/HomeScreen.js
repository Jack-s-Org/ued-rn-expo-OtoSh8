import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SBar from "@/components/sBar";
import Knob from "@/components/knob";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SBar/>
      <Knob></Knob>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: "#A7A7A7",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
    
  },
});

export default HomeScreen;
