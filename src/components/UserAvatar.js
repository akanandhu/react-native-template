import * as React from "react";
import { Avatar } from "react-native-paper";

export const UserAvatar = ({ initials = "JD" }) => {
  return <Avatar.Text size={48} label={initials} />;
};
