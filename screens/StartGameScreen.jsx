import { TextInput, View, Text, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (enteredValue) => {
    setEnteredNumber(enteredValue);
  };

  const confirmInputhandler = () =>{
  console.log('Confirm Pressed!');
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsView}>
        <View style={styles.forEachButton}>
          <PrimaryButton>
            <Text>Reset</Text>
          </PrimaryButton>
        </View>
        <View style={styles.forEachButton}>
          <PrimaryButton onPress = {confirmInputhandler}>
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
    backgroundColor: "#300b1f",
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
    flexDirection: "row",
  },
  forEachButton: {
    flex: 1,
  },
});

export default StartGameScreen;
