import { StyleSheet, Text, View } from "react-native";
import Title from "../components/UI/Title";
import { useState } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

const generateBetweenRandom = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    generateBetweenRandom(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber }) => {
  const initialGuss = generateBetweenRandom(minBoundary, maxBoundary, userNumber);
  const [currentGuss, setCurrentGuss] = useState(initialGuss);

  const nextGussHandler = (direction) =>{
   if (direction === 'lowwer') {
    maxBoundary = currentGuss;
    generateBetweenRandom(minBoundary, maxBoundary, currentGuss)
   }
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's guss</Title>
      <NumberContainer>{currentGuss}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
        <PrimaryButton>+</PrimaryButton>
        <PrimaryButton>-</PrimaryButton>
        </View>
      </View>
      {/* <View>
        Log rounds
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 44,
  },
});

export default GameScreen;
