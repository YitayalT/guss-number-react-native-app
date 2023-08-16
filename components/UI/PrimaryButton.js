import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const PrimaryButton = ({ children, onPress}) => {
  // const pressHandler = () => {
  //   console.log("pressed!");
  // };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(pressed) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "gray" }}
      >
        <Text style={styles.butonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
   
  },
  butonText: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
