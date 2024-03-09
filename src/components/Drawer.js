import { View } from "react-native";
import { Drawer } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import DrawerHeader from "./DrawerHeader";
import { LogoutButton } from "./LogoutButton";

export const AppDrawer = ({ active }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#5F5D9C",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <View>
          <DrawerHeader />
          <Drawer.Section
            style={{
              paddingTop: 20,
            }}
          >
            <Drawer.Item active icon="note-check" label="Requests" />
            <Drawer.Item icon="devices" label="Devices" />
            <Drawer.Item icon="account" label="Profile" />
          </Drawer.Section>
        </View>
        <View>
          <LogoutButton />
        </View>
      </View>
    </SafeAreaView>
  );
};
