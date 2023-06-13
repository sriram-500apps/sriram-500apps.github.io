import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineNuxtModule, installModule, addComponentsDir, addPlugin } from '@nuxt/kit';

const name = "@agile/avatar";
const version = "1.0.0";

const module = defineNuxtModule({
  meta: {
    name,
    version,
    configKey: "agile"
  },
  defaults: {
    branding: {
      kind: "product"
    }
  },
  async setup(_options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    await installModule(
      "@nuxtjs/tailwindcss",
      {
        configPath: resolve(nuxt.options.srcDir, "tailwind.config.cjs"),
        config: {
          content: [
            `${runtimeDir}/components/**/*.{vue,ts,js}`,
            `${runtimeDir}/app.{js,ts,vue}`
          ]
        },
        cssPath: `${runtimeDir}/assets/css/tailwind.css`,
        exposeConfig: true
      },
      nuxt
    );
    nuxt.options.postcss.plugins.tailwindcss = nuxt.options.postcss.plugins.tailwindcss || {};
    nuxt.options.postcss.plugins.autoprefixer = nuxt.options.postcss.plugins.autoprefixer || {};
    nuxt.options.build.transpile.push(runtimeDir);
    addComponentsDir({
      path: resolve(runtimeDir, "components"),
      prefix: "agile"
    });
    addPlugin(resolve(runtimeDir, "plugin"));
  }
});

export { module as default };
