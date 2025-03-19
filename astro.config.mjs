import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://blog.mbtquniverse.com',
  integrations: [
    tailwind(),
    mdx()
  ]
});