import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style = { styles.container}>
      <Text style = {styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primaryYellow,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'green'
  },
  numberText: {
    color: Colors.primaryYellow,
    fontSize: 36,
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 50
 
  },
});
