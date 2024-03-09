import { Drawer } from "expo-router/drawer";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";
import { axiosInstance } from "../src/axios";
import Auth from "../src/components/Auth";
import { AppDrawer } from "../src/components/Drawer";
import { UserAvatar } from "../src/components/UserAvatar";
import { supabase } from "../src/supabase";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session) {
        setSession(session);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${session.access_token}`;
      }
      await SplashScreen.hideAsync();
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session)
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${session.access_token}`;
    });
  }, []);

  return session ? (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer defaultStatus="open" drawerContent={() => <AppDrawer />}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "TheAppName",
            header: ({ navigation }) => {
              return (
                <SafeAreaView>
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: "row",
                      padding: 10,

                      borderBottomWidth: 1,
                      borderBottomColor: "#cecece",
                    }}
                  >
                    <Text variant="headlineLarge">
                      Hello
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        WORLD
                      </Text>
                    </Text>
                    <Pressable onPress={navigation.openDrawer}>
                      <UserAvatar />
                    </Pressable>
                  </View>
                </SafeAreaView>
              );
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  ) : (
    <Auth />
  );
}
