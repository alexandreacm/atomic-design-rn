import React from 'react';
import { View } from 'react-native';

import { LogoIcon } from "../../../global/styles/icons";

import { styles } from "./styles";

import more from '../../../assets/icons/more.png';
import heart from '../../../assets/icons/heart.png';
import send from '../../../assets/icons/send.png';
import HeaderIcon from '../../atoms/HeaderIcon';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerSide}>
        <LogoIcon />
      </View>

      <View style={styles.headerSide}>
        <HeaderIcon source={more} />
        <HeaderIcon source={heart} />
        <HeaderIcon source={send} />
      </View>
    </View>
  );
}
