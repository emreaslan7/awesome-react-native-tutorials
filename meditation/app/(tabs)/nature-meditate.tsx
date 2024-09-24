import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import AppGradient from "@/components/AppGradient";

import { MEDITATION_DATA } from "@/constants/MeditationData";
import meditationImages from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e76"]}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Emre
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation practice today!
          </Text>
        </View>

        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                className="h-48 my-3 rounded-md overflow-hidden"
                onPress={() => {
                  router.push(`meditate/${item.id}`);
                }}
              >
                <ImageBackground
                  source={meditationImages[item.id - 1] as any}
                  className="flex-1 rounded-lg justify-center"
                  resizeMode="cover"
                >
                  <LinearGradient
                    colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
                    className="flex-1 rounded-lg justify-center"
                  >
                    <Text className="text-gray-100 text-3xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>

      <StatusBar style="light" />
    </View>
  );
};

export default NatureMeditate;
