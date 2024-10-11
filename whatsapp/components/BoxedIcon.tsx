import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export type BoxedIconProps = {
  name: typeof Ionicons.defaultProps.name;
  backgroundColor: string;
};

const BoxedIcon = ({ name, backgroundColor }: BoxedIconProps) => {
  return (
    <View style={{ backgroundColor, borderRadius: 6, padding: 4 }}>
      <Ionicons name={name} size={22} color="white" />
    </View>
  );
};

export default BoxedIcon;
