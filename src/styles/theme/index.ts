import { createTheme } from '@shopify/restyle';

const palette = {
    white: '#FFF',
    black: '#000',
    background: '#FAFAFA',
    gray50: '#A6A6AA',
    gray40: '#C6C6C8'
}

const theme = createTheme({
    colors: {
        mainBackground: palette.background,
        grayFifty: palette.gray50,
        grayForty: palette.gray40
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
        largeTablet: 1024,
    },
    boxVariants: {
        defaults: {},
        pill: {
          paddingVertical: 's',
          paddingHorizontal: 'l',
          marginTop: 's',
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          bg: 'usdColor',
        },
      },
    // textVariants: {
    //     header: {
    //         fontFamily: 'ShopifySans-Bold',
    //         fontWeight: 'bold',
    //         fontSize: 34,
    //         lineHeight: 42.5,
    //         color: 'black',
    //     }
    // },
});

export type Theme = typeof theme;
export default theme;
