import { Canvas, Circle, Group, Skia } from "@shopify/react-native-skia";
import { StyleSheet, View } from "react-native";

export default function App() {
  const size = 256;
  const r = size * 0.33;

  console.log(
    console.log(
      Skia.Path.MakeFromSVGString(
        "M0,35L60,140L120,105L180,70L240,35L300,0L360,105"
      ).toCmds()
    )
  );

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
    backgroundColor: "red",
  },
});
