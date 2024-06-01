import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bmi from './calculators/bmi';
import Calc from './calculators/simple';

export default function App() {
  return (
    <View style={styles.container}>
      <Bmi />
      <Calc />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
  },
});
