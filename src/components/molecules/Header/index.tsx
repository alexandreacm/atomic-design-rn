import React from 'react';
import { LogoIcon } from "../../../global/styles/icons";

import more from '../../../assets/icons/more.png';
import heart from '../../../assets/icons/heart.png';
import send from '../../../assets/icons/send.png';
import HeaderIcon from '../../atoms/HeaderIcon';

import { Box } from '../../atoms/Box';

export default function Header() {

  return (
    <Box
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal={'m'}
      marginTop={'xl'}
    >
      <Box
        flexDirection="row"
        alignItems="center"
        marginTop={'s'}
        minWidth={66}
      >
        <LogoIcon />
      </Box>

      <Box
        flexDirection="row"
        alignItems="center"
        marginTop={'s'}
        minWidth={66}
      >
        <HeaderIcon source={more} />
        <HeaderIcon source={heart} />
        <HeaderIcon source={send} />
      </Box>
    </Box>
  );
}
