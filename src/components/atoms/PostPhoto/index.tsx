import React from "react";
import { Image, ImageProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

export default function PostPhoto({ ...props }: ImageProps) {
  return <Image {...props} style={styles.cover} />;
}
