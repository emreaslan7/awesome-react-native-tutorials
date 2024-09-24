import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;

const Content = ({ children }: any) => {
  return <SafeAreaView style={[styles.container]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20, // Approximate conversion of TailwindCSS px-5
    paddingVertical: 20, // Approximate conversion of TailwindCSS py-3
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
