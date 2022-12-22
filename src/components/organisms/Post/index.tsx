import React from "react";
import { View, ImageProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

import { PostHeader } from "../../molecules/PostHeader";
import PostPhoto from "../../atoms/PostPhoto";
import { PostOptions } from "../../molecules/PostOptions";
import { PostAbout } from "../../molecules/PostAbout";
import PostDescription from "../../atoms/PostDescription";

export type Profile = {
  id: string;
  name: string;
  avatar: ImageProps;
};

export type PostProps = {
  id: string;
  username: string;
  location: string;
  likes: string;
  cover: ImageProps;
  description: string;
  lastLiked: Profile;
};

type Props = {
  data: PostProps;
};

export default function Post({ data }: Props) {
  return (
    <View style={styles.post}>
      {/* molecules */}
      <PostHeader username={data.username} location={data.location} />

      {/* atom */}
      <PostPhoto source={data.cover} />

      <View style={styles.postFooter}>
        {/* molecules */}
        <PostOptions />

        {/* molecules */}
        <PostAbout avatar={data.lastLiked.avatar} likes={data.likes} />

        {/* atom */}
        <PostDescription description={data.description} />
      </View>
    </View>
  );
}
