import { createThemes, defaultConfig } from "@tamagui/config/v4";

const draculaPalette = [
        '#282a36',
        '#44475a',
        '#f8f8f2',
        '#bd93f9',
        '#ff79c6',
        '#50fa7b',
        '#f1fa8c',
        '#6272a4',
        '#8be9fd',
        '#44475a',
        '#282a36',
        '#21222c',
]

const dracula_generated = createThemes({
        base: {
                palette: draculaPalette,
                extra: {
                        light: {
                                dracPurple: '#bd93f9',
                        },
                        dark: {
                                dracPurple: '#bd93f9',
                        },
                },
        },
})


export const themes = {
        ...defaultConfig.themes,

        ...dracula_generated,
};