import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "../../../pages/Feed/styles";

type Props = TextProps & {
  description: string;
};

export default function PostDescription({ description }: Props) {
  return <Text style={styles.description}>{description}</Text>;
}
