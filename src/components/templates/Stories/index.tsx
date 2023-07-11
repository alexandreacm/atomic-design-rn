import React from 'react';
import { View, FlatList } from 'react-native';
import { Profile } from '../../organisms/Post';
import { PostProfile } from '../../organisms/PostProfile';


import { styles } from "./styles";

type Props = {
  profiles: Profile[];
}

export default function Stories({ profiles }: Props) {

  const renderItem = (item: Profile) => <PostProfile name={item?.name} avatar={item?.avatar} />

  return (
    <View style={styles.stories}>
      <FlatList
        data={profiles}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.profiles}
        keyExtractor={(profile) => profile.id}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
}
