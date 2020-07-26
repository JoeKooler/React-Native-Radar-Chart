import React from "react";
import RadarChart from "./SpiderGraph";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <RadarChart
        graphSize={400}
        scaleCount={5}
        numberInterval={2}
        data={[
          {
            Int: 0.7,
            Vit: 1,
            Str: 0.9,
            Def: 0.67,
            Agi: 0.8,
            Luck: 1,
          },
          {
            Int: 1,
            Vit: 0.1,
            Str: 0.2,
            Def: 0.5,
            Agi: 0.8,
            Luck: 0.4,
          },
        ]}
        options={{
          graphShape: 1,
          showAxis: true,
          showIndicator: true,
          colorList: ["blue", "red"],
          dotList: [false, true],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
