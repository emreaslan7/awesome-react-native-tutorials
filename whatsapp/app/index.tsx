import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import welcomeImage from "@/assets/images/welcome.png";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
const welcome_image = Image.resolveAssetSource(welcomeImage).uri;

const Page = () => {
  const openLink = () => {
    /* open link */
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: welcome_image }} style={styles.welcome} />
      <Text style={styles.headline}>Welcome to WhatsApp</Text>
      <Text style={styles.description}>
        Read our{" "}
        <Text style={styles.link} onPress={openLink}>
          Privacy Policy
        </Text>
        . Tap "Agree and continue" to accept the{" "}
        <Text style={styles.link} onPress={openLink}>
          Terms of Service
        </Text>
      </Text>
      <Link href={"/otp"} replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agree and continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    width: "100%",
    height: 300,
    marginBottom: 80,
    objectFit: "contain",
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.gray,
    marginBottom: 80,
  },
  link: {
    color: Colors.primary,
    fontSize: 16,
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default Page;
