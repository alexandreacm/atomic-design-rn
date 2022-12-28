import React from 'react';
import { View } from 'react-native';

import {
    MessengerIcon,
    CameraIcon,
    LogoIcon,
    IgtvIcon,
} from "../../../global/styles/icons";
  
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
    <View style={styles.headerSide}>
      <CameraIcon />
    </View>

    <LogoIcon />

    <View style={styles.headerSide}>
      <IgtvIcon />
      <MessengerIcon style={styles.messengerIcon} />
    </View>
  </View>
  );
}
