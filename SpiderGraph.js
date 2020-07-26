import React from "react";
import Svg, { G, Path, Text, Polyline } from "react-native-svg";

export default function RadarChart({
  graphSize,
  scaleCount,
  numberInterval,
  data,
  options,
}) {
  const boxSize = graphSize * 3;
  const centerPos = boxSize / 2;

  // Top start pos -90 degree
  const posX = (angle, distance) =>
    Math.cos(angle - Math.PI / 2) * distance * graphSize;
  const posY = (angle, distance) =>
    Math.sin(angle - Math.PI / 2) * distance * graphSize;

  const initPath = (points) => {
    let d = "M" + points[0][0].toFixed(4) + "," + points[0][1].toFixed(4);
    for (let i = 1; i < points.length; i++) {
      d += "L" + points[i][0].toFixed(4) + "," + points[i][1].toFixed(4);
    }
    return d + "z";
  };

  const scaleShape = (columns, i) => {
    return (
      <Path
        key={`shape-${i}`}
        d={initPath(
          columns.map((column) => {
            return [
              posX(column.angle, i / scaleCount),
              posY(column.angle, i / scaleCount),
            ];
          })
        )}
        stroke={`#928481`}
        fill={`#FFFFFF`}
        fillOpacity=".5"
      />
    );
  };

  const shape = (columns) => (chartData, i) => {
    const data = chartData;
    const colorCode = options.colorList[i];
    const dot = options.dotList[i] == true ? "20,20" : "0,0";
    return (
      <Path
        key={`shape-${i}`}
        d={initPath(
          columns.map((column) => {
            return [
              posX(column.angle, data[column.key]),
              posY(column.angle, data[column.key]),
            ];
          })
        )}
        strokeDasharray={dot}
        stroke={colorCode}
        strokeWidth="2.5"
        fill={`#FFFFFF`}
        fillOpacity=".5"
      />
    );
  };

  const points = (points) => {
    return points
      .map((point) => point[0].toFixed(4) + "," + point[1].toFixed(4))
      .join(" ");
  };

  const axis = () => (column, i) => {
    return (
      <Polyline
        key={`poly-axis-${i}`}
        points={points([
          [0, 0],
          [posX(column.angle, 1.1), posY(column.angle, 1.1)],
        ])}
        stroke="#000000"
        strokeWidth=".5"
      />
    );
  };

  const label = () => (column) => {
    return (
      <Text
        key={`label-of-${column.key}`}
        x={posX(column.angle, 1.2)}
        y={posY(column.angle, 1.2)}
        dy={10 / 2}
        fill="#444"
        fontWeight="bold"
        fontSize="30"
        textAnchor="middle"
      >
        {column.key}
      </Text>
    );
  };

  const textIndicator = (i) => {
    return (
      <Text
        x={-20}
        y={-((i / scaleCount) * graphSize)}
        fill="#444"
        fontWeight="bold"
        fontSize="30"
        textAnchor="middle"
      >
        {i}
      </Text>
    );
  };

  const groups = [];
  const labels = Object.keys(data[0]);

  const columns = labels.map((key, i, arr) => {
    return {
      key,
      angle: (Math.PI * 2 * i) / arr.length,
    };
  });

  for (let i = scaleCount; i >= 0; i--) {
    groups.push(<G>{scaleShape(columns, i)}</G>);
  }

  groups.push(<G key={`groups}`}>{data.map(shape(columns))}</G>);
  groups.push(<G key={`group-captions`}>{columns.map(label())}</G>);

  if (options.showAxis)
    groups.push(<G key={`group-axes`}>{columns.map(axis())}</G>);

  if (options.showIndicator) {
    for (let i = 0; i <= scaleCount; i++) {
      if (i % numberInterval == 0)
        groups.push(<G key={`group-eiei`}>{textIndicator(i)}</G>);
    }
  }
  return (
    <Svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      width={graphSize}
      height={graphSize}
      viewBox={`0 0 ${boxSize} ${boxSize}`}
    >
      <G transform={`translate(${centerPos},${centerPos})`}>{groups}</G>
    </Svg>
  );
}
