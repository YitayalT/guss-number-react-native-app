import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log("pressed!");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style = {styles.buttonInnerContainer} onPress={pressHandler} android_ripple={{ color: "gray" }}>
        <Text style={styles.butonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer:{
    borderRadius: 8,
    margin: 4,
    overflow:'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: "blue",   
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,  
  },
  butonText: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
  },
});
export default PrimaryButton;
