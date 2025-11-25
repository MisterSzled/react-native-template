import { createTamagui } from 'tamagui';

import { animations } from './config/animations';
import { fonts } from './config/fonts';
import { media } from './config/media';
import { settings } from './config/settings';
import { shorthands } from './config/shorthands';
import { themes } from './config/themes';
import { tokens } from './config/tokens';

export const config = createTamagui({
        animations: animations,
        fonts: fonts,
        media: media,
        settings: settings,
        shorthands: shorthands,
        themes: themes,
        tokens: tokens,
});