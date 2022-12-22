import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "../../../pages/Feed/styles";

import { ProfileIcon } from "../../../global/styles/icons";

type Props = { username: string; location: string };

export function PostHeader({ username, location }: Props) {
  return (
    <View style={styles.postHeader}>
      <Image source={ProfileIcon} style={styles.postAvatar} />
      <View>
        <Text style={styles.postUsername}>{username}</Text>
        <Text style={styles.postLocation}>{location}</Text>
      </View>
    </View>
  );
}
