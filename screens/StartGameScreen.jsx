import { TextInput, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style = {styles.buttonsView}>
        <View style = {styles.forEachButton}>
        <PrimaryButton>
          <Text>Reset</Text>
        </PrimaryButton>
        </View>
        <View style = {styles.forEachButton}>
        <PrimaryButton>
          <Text>Confirm</Text>
        </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    backgroundColor: "#72063c",
    marginHorizontal: 10,
    borderRadius: 8,
    elevation: 15,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsView: {
    flexDirection: 'row'
  },
  forEachButton: {
    flex:1
  }
});

export default StartGameScreen;
