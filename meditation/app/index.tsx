import { View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

import { SafeAreaView } from "react-native-safe-area-context";

import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { Href, useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage as any}
        className="flex-1"
        resizeMode="cover"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="flex-1 px-1 justify-between">
            <View>
              <Text className="text-center text-white text-4xl font-bold">
                Simple Meditation
              </Text>
              <Text className="text-center text-white text-2xl text-regular mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>

            <CustomButton
              title="Get Started"
              onPress={() => {
                router.push("/nature-meditate" as Href);
              }}
            />

            <StatusBar style="light" />
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
