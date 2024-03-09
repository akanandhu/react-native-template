import { ScrollView } from "react-native";
import { DeviceCard } from "../src/components/DeviceCard";

export default function Page() {
  return (
    <ScrollView
      style={{
        padding: 20,
      }}
    >
      <DeviceCard />
      <DeviceCard />
      <DeviceCard />
      <DeviceCard />
    </ScrollView>
  );
}
