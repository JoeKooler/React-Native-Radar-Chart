# React-Native-Radar-Chart
A client once asked "Hey can you find me a nice radar chart lib. for the project? I haven't seen one yet" ...

![ChartImage](https://i.imgur.com/PHsjg0n.jpg)

# Usage
1. Download ```SpiderGraph.js```
2. npm install ```react-native-svg```
3. Import ```SpiderGraph.js``` to your component

# Features
1.Customizable graph size

2.Customizable scale count

3.Customizable number interval

4.You can switch graph shape from circle to edge graph (Coming soon)

5.You can toggle showing graph axis

6.You can toggle showing number indicator

7.You can customize your own graph color

8.You can customize your graph to be a simple line or a dotted line


```<RadarChart
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
 ```
      

**Special thanks to Lorenzo Spyna's article so i didn't have to make this library from scratch**

https://itnext.io/react-svg-radar-chart-a89d15760e8
