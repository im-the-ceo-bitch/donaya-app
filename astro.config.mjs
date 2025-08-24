import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://donaya.dev',
  output: 'static',
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        ph: [
          "star-duotone",
          "lightning-duotone",
          "globe-duotone",
          "users-duotone",
          "users-three-duotone",
          "buildings-duotone",
          "briefcase-duotone",
          "check-circle-duotone",
          "x-circle-duotone",
          "code-duotone",
          "puzzle-piece-duotone",
          "brain-duotone",
          "shield-check-duotone",
          "linkedin-logo-duotone",
          "twitter-logo-duotone",
          "github-logo-duotone",
          "currency-dollar-duotone",
          "money-duotone",
          "arrow-left-duotone",
          "arrow-right",
          "file-search",
          "layout-duotone",
          "calendar-duotone",
          "clock-duotone",
          "link-duotone",
          "check-square-duotone",
          "credit-card-duotone",
          "paint-brush-duotone",
          "chart-line-duotone",
          "google-logo-duotone",
          "lock-key-duotone",
          "certificate-duotone",
          "lifebuoy-duotone",
          "handshake-duotone",
          "heart-duotone",
          "house-duotone",
          "graduation-cap-duotone",
          "first-aid-kit-duotone",
          "shopping-bag-duotone"
        ]
      }
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
