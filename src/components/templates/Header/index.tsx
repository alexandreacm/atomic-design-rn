import React from 'react';
import { View, Image } from 'react-native';

import {
  MessengerIcon,
  CameraIcon,
  LogoIcon,
  IgtvIcon,
} from "../../../global/styles/icons";

import { styles } from "./styles";
import more from '../../../assets/icons/more.png';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerSide}>
        <LogoIcon />
        {/* <CameraIcon /> */}
      </View>


      <View style={styles.headerSide}>
        <Image source={more} style={{ width: 20, height: 20 }} />
        {/* <IgtvIcon /> */}
        <MessengerIcon style={styles.messengerIcon} />
      </View>
    </View>
  );
}
