import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
    site: 'https://aravindhnivas.github.io',
    integrations: [
        UnoCSS(),
    ],
});
