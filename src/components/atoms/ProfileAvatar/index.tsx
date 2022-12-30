import React from "react";
import { Image, ImageProps } from "react-native";


export default function ProfileAvatar({ ...props }: ImageProps) {
    return <Image {...props} />;
}
