import { Text, View } from "react-native";
import { UserAvatar } from "./UserAvatar";

export default function DrawerHeader() {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#5F5D9C",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          John Doe
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#fff",
          }}
        >
          john@example.com
        </Text>
      </View>
      <UserAvatar />
    </View>
  );
}
