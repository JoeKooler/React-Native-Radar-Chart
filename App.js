import React from 'react';
import SpiderGraph from './SpiderGraph';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.thatfuckingtext}>Open up App.js to start working on your app!</Text>
      <SpiderGraph
        graphSize={400}
        scaleCount={5}
        numberInterval={2}
        data={[
          { speed: 0.7, harshStart: 1, harshBreak: 0.9, sharpTurn: 0.67, exceedingRPM: 0.8, harshAcceleration: 1 },
          { speed: 1, harshStart: 0.1, harshBreak: 0.2, sharpTurn: 0.5, exceedingRPM: 0.8, harshAcceleration: 0.4 },
        ]}
        options={
          {showAxis: true , showIndicator: true}
        }
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thatfuckingtext: {
    padding: 40
  }
});
