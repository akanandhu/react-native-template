import React from "react";
import { View } from "react-native";
import { supabase } from "../supabase";
import { Button } from "react-native-paper";

export const LogoutButton = () => {
  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.log("Error logging out:", error.message);
    }
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        margin: 20,
      }}
    >
      <Button icon="logout" mode="contained" onPress={logout}>
        Logout
      </Button>
    </View>
  );
};
