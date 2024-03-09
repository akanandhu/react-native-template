import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView } from "react-native";

export const HelloWorld = () => {
  const [name, setName] = useState("You can type in me");

  return (
    <ScrollView>
      <Link href="/about">About</Link>
      <Link href="/user/bacon">View user</Link>
    </ScrollView>
  );
};
