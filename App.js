import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import { StyleSheet, View } from "react-native";

export default function App() {
  const size = 256;
  const r = size * 0.33;
  return (
    <View style={styles.container}>
      <Canvas style={{ flex: 1 }}>
        <Group blendMode="multiply">
          <Circle cx={r} cy={r} r={r} color="cyan" />
          <Circle cx={size - r} cy={r} r={r} color="magenta" />
          <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
        </Group>
      </Canvas>
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
