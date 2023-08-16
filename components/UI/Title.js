import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color:'white',
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.primaryYellow,
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.primary500,
  },
});

export default Title;
