import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";
import vuetifyPlugin from 'vite-plugin-vuetify';

/**
 * Vuetify integration for Astro
 * @param {import('astro/config').Options} options
 * @returns {import('astro/config').AstroIntegration}
 */
const vuetify = () => {
  return {
    name: 'astro-vuetify-integration',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          vite: {
            ssr: {
              noExternal: ['vuetify'],
            },
            plugins: [vuetifyPlugin({
              autoImport: true,
              treeshaking: true,
              useIconCDN: true,
              styles: true,
            })],
          },
        })
      },
    },
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({ appEntrypoint: '/src/app' }),
    vuetify(),
  ]
});