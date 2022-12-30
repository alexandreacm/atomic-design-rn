import React from 'react';
import { View, ImageProps } from 'react-native';
import ProfileAvatar from '../../atoms/ProfileAvatar';
import ProfileUserName from '../../atoms/ProfileUserName';

import { styles } from "./styles";

type Props = {
    name: string;
    avatar: ImageProps
}

export function PostProfile({ name, avatar }: Props) {
    return (
        <View style={styles.profile}>
            <ProfileAvatar source={avatar} />
            <ProfileUserName value={name} />
        </View>
    );
}
