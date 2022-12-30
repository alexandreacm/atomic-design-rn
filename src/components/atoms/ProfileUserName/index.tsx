import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "./styles";

type Props = TextProps & {
    value: string;
};

export default function ProfileUserName({ value }: Props) {
    return <Text style={styles.username}>{value}</Text>;
}
