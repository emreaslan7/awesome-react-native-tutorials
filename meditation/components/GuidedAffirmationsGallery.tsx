import { View, Text, Pressable, Image, FlatList } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/AffirmationGallery";
import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white text-xl font-bold">{title}</Text>
      </View>

      <View>
        <FlatList
          data={previews}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}` as any} asChild>
              <Pressable>
                <View className="h-36 w-32 mr-4 rounded-md">
                  <Image
                    source={item.image as any}
                    resizeMode="cover"
                    className="w-full h-full rounded-2xl"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
