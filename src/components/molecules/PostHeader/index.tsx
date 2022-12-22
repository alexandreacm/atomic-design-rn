import React from "react";
import { View } from "react-native";

import PostAvatar from "../../atoms/PostAvatar";
import PostUsername from "../../atoms/PostUserName";
import PostLocation from "../../atoms/PostLocation";

import { styles } from "./styles";
import { ProfileIcon } from "../../../global/styles/icons";

type Props = { username: string; location: string };

export function PostHeader({ username, location }: Props) {
  return (
    <View style={styles.postHeader}>
      <PostAvatar source={ProfileIcon} />
      <View>
        <PostUsername value={username} />
        <PostLocation value={location} />
      </View>
    </View>
  );
}
