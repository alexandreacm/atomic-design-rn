import React from "react";
import { View } from "react-native";

import { profiles } from "../../utils/profiles";

import { styles } from "./styles";
import { posts } from "../../utils/posts";

import { Posts } from "../../components/templates/Posts";
import Header from "../../components/molecules/Header";
import Stories from "../../components/templates/Stories";

export function Feed() {
  return (
    <View style={styles.container}>

      {/* molecules */}
      <Header />

      {/* templates */}
      <Stories profiles={profiles} />

      <Posts data={posts} />
    </View>
  );
}
