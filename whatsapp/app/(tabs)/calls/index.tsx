import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
import calls from "@/assets/data/calls.json";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";

const Page = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [items, setItems] = React.useState(calls);

  const onEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={onEdit}>
              <Text style={{ color: Colors.primary, fontSize: 18 }}>
                {isEditing ? "Done" : "Edit"}
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <View style={defaultStyles.block}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            ItemSeparatorComponent={() => (
              <View style={defaultStyles.separator} />
            )}
            renderItem={({ item }) => (
              <View style={[defaultStyles.item]}>
                {/* @ts-ignore */}
                <Image source={{ uri: item.img }} style={styles.avatar} />

                <View style={{ flex: 1, gap: 2 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: item.missed ? Colors.red : "#000",
                    }}
                  >
                    {item.name}
                  </Text>

                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Ionicons
                      name={item.video ? "videocam" : "call"}
                      size={16}
                      color={Colors.gray}
                    />
                    <Text style={{ color: Colors.gray, flex: 1 }}>
                      {item.incoming ? "Incoming" : "Outgoing"}
                    </Text>
                  </View>
                </View>

                <View
                  style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
                >
                  <Text style={{ color: Colors.gray }}>
                    {format(item.date, "MM.dd.yy")}
                  </Text>
                  <Ionicons
                    name={"information-circle-outline"}
                    size={24}
                    color={Colors.primary}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
export default Page;
