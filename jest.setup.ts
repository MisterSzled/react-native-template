import i18n from './src/i18n';

beforeAll(async () => {
        if (!i18n.isInitialized) {
                await i18n.init();
        }
});
