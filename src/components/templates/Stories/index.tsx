import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Profile } from '../../organisms/Post';

import { styles } from "./styles";

type Props = {
    profiles: Profile[];
}

export default function Stories({ profiles }: Props) {
  return (
    <View style={styles.stories}>
    <FlatList
      data={profiles}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.profiles}
      keyExtractor={(profile) => profile.id}
      renderItem={({ item }) => (
        <View style={styles.profile}>
          <Image source={item.avatar} />
          <Text style={styles.username}>{item.name}</Text>
        </View>
      )}
    />
  </View>
  );
}
