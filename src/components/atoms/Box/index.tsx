import { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import {
    BoxProps as RNBoxProps,
    VariantProps,
    boxRestyleFunctions,
    createRestyleComponent,
    createVariant,
} from '@shopify/restyle';

import { Theme } from '../../../styles/theme';

export type BoxProps = RNBoxProps<Theme> &
    VariantProps<Theme, 'boxVariants'> &
    ViewProps & {
        children?: ReactNode;
    };

const restyleFunctions = [
    ...boxRestyleFunctions,
    createVariant<Theme>({
        themeKey: 'boxVariants',
    }) as any,
];

export const Box = createRestyleComponent<BoxProps, Theme>(
    restyleFunctions,
    View,
);
