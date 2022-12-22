import React from "react";
import { FlatList } from "react-native";

import { styles } from "./styles";
import Post, { PostProps } from "../../organisms/Post";

type Props = {
  data: PostProps[];
};

export function Posts({ data }: Props) {
  const renderItem = (item: PostProps) => <Post data={item} />;

  return (
    <FlatList
      data={data}
      style={styles.posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(post) => post.id}
      renderItem={({ item }) => renderItem(item)}
    />
  );
}
