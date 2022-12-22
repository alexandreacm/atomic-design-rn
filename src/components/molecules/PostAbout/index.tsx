import React from "react";
import { View, Text, Image, ImageProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";
import { PostProps } from "../../organisms/Post";

type Props = {
  avatar: ImageProps;
  likes: string;
};

export function PostAbout({ avatar, likes }: Props) {
  return (
    <View style={styles.postAbout}>
      <Image source={avatar} style={styles.lastLiked} />
      <Text style={styles.likes}>{likes}</Text>
    </View>
  );
}
